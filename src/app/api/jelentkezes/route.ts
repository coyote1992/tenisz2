import { coerceBooking, contactLines, programs, summaryLines, validateAll } from "@/lib/booking";

// Sends a training request by e-mail through Resend (https://resend.com).
// Environment:
//   RESEND_API_KEY            required to send
//   BOOKING_TO_EMAIL          where requests go (comma-separated allowed)
//   BOOKING_TO_EMAIL_TRAINER  optional; personal training and group classes go here instead
//   BOOKING_FROM_EMAIL        verified sender, e.g. "Next Tenisz <jelentkezes@next-tenisz.hu>"

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const data = coerceBooking(payload);

  // Honeypot: bots fill the hidden field. Pretend success.
  if (data.website) return Response.json({ ok: true });

  const errors = validateAll(data);
  if (Object.keys(errors).length) return Response.json({ error: "invalid", fields: Object.keys(errors) }, { status: 422 });

  const apiKey = process.env.RESEND_API_KEY;
  const program = programs.find((p) => p.id === data.program)!;
  const to = (program.toTrainer && process.env.BOOKING_TO_EMAIL_TRAINER) || process.env.BOOKING_TO_EMAIL;
  if (!apiKey || !to) return Response.json({ error: "not_configured" }, { status: 503 });

  const lines = [...summaryLines(data), ...contactLines(data)];
  const text = lines.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2 style="font-family:Georgia,serif;font-weight:400;color:#1b3a5c">Új jelentkezés: ${escapeHtml(program.title)}</h2>
<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;color:#1b3a5c;border-collapse:collapse">
${lines.map(([k, v]) => `<tr><td style="color:#62707f;vertical-align:top">${escapeHtml(k)}</td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`).join("\n")}
</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.BOOKING_FROM_EMAIL || "Next Tenisz <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: data.email,
      subject: `Jelentkezés: ${program.title} · ${data.name}`,
      text,
      html,
    }),
  }).catch(() => null);

  if (!res || !res.ok) return Response.json({ error: "send_failed" }, { status: 502 });
  return Response.json({ ok: true });
}
