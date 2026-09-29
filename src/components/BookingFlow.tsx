"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { allJuniorGroups, site, trainer } from "@/content/site";
import {
  adultFormats,
  type BookingData,
  contactLines,
  dayparts,
  days,
  emptyBooking,
  type Errors,
  goals,
  juniorGroupOptions,
  levels,
  programs,
  type ProgramId,
  recoveryOptions,
  stepHints,
  stepTitles,
  type StepId,
  summaryLines,
  validateStep,
  weekdays,
} from "@/lib/booking";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "done" | "error";

const ages = Array.from({ length: 15 }, (_, i) => String(i + 4));

export function BookingFlow() {
  const params = useSearchParams();
  const [data, setData] = useState<BookingData>(emptyBooking);
  const [stepIndex, setStepIndex] = useState(0);
  const [dir, setDir] = useState<"fwd" | "back">("fwd");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorKind, setErrorKind] = useState<"network" | "not_configured" | "invalid" | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const didInit = useRef(false);
  const didMount = useRef(false);

  const program = programs.find((p) => p.id === data.program);
  const steps: StepId[] = program?.steps ?? ["program", "time", "contact"];
  const step = steps[stepIndex] ?? "program";
  const isLast = stepIndex === steps.length - 1;

  // Deep links: /jelentkezes?program=junior&csoport=narancs
  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    const p = params.get("program") as ProgramId | null;
    if (p && programs.some((x) => x.id === p)) {
      const g = params.get("csoport");
      setData((d) => ({ ...d, program: p, group: g && juniorGroupOptions.some((o) => o.id === g) ? g : d.group }));
      setStepIndex(1);
    }
  }, [params]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
    const top = headingRef.current?.closest(".flow")?.getBoundingClientRect().top ?? 0;
    if (top < 0) headingRef.current?.closest(".flow")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [stepIndex, status]);

  const set = <K extends keyof BookingData>(key: K, value: BookingData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggle = (key: "slots" | "formats" | "goals" | "days" | "dayparts" | "interests", value: string) => {
    setData((d) => {
      const list = d[key];
      return { ...d, [key]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value] };
    });
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const focusFirstError = (errs: Errors) => {
    requestAnimationFrame(() => {
      const first = Object.keys(errs)[0];
      const el = document.querySelector<HTMLElement>(`[data-field="${first}"] input, [data-field="${first}"] select, [data-field="${first}"] textarea, [data-field="${first}"] button`);
      el?.focus();
    });
  };

  const next = () => {
    const errs = validateStep(step, data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      focusFirstError(errs);
      return;
    }
    setErrors({});
    setDir("fwd");
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  };

  const back = () => {
    setErrors({});
    setDir("back");
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const chooseProgram = (id: ProgramId) => {
    if (id === data.program) {
      setDir("fwd");
      setStepIndex(1);
      return;
    }
    // A new program starts from a clean slate; only contact details carry over.
    setData((d) => ({ ...emptyBooking, program: id, name: d.name, email: d.email, phone: d.phone, message: d.message, consent: d.consent }));
    setErrors({});
    setDir("fwd");
    setStepIndex(1);
  };

  const submit = async () => {
    const errs = validateStep("contact", data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      focusFirstError(errs);
      return;
    }
    setStatus("sending");
    setErrorKind(null);
    try {
      const res = await fetch("/api/jelentkezes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("done");
        return;
      }
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      setErrorKind(body.error === "not_configured" ? "not_configured" : body.error === "invalid" ? "invalid" : "network");
      setStatus("error");
    } catch {
      setErrorKind("network");
      setStatus("error");
    }
  };

  const mailto = useMemo(() => {
    const lines = [...summaryLines(data), ...contactLines(data)].map(([k, v]) => `${k}: ${v}`).join("\n");
    const subject = `Jelentkezés: ${program?.title ?? "edzés"}`;
    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
  }, [data, program]);

  if (status === "done") {
    const first = data.name.trim().split(/\s+/).pop();
    return (
      <div className="flow" aria-live="polite">
        <div className="flow__done">
          <span className="flow__done-mark">
            <Icon name="check" size={28} />
          </span>
          <h2 ref={headingRef} tabIndex={-1} className="flow__title" style={{ outline: "none" }}>
            Köszönjük{first ? `, ${first}` : ""}! Megkaptuk a jelentkezésed.
          </h2>
          <p className="flow__hint" style={{ marginBottom: 0 }}>
            Hamarosan keresünk telefonon vagy e-mailben, hogy egyeztessük a részleteket. Ha közben kérdésed van,
            hívj: {program?.toTrainer ? trainer.phone.display : site.phone.display}.
          </p>
          <Summary data={data} />
          <div className="btn-row" style={{ marginTop: 8 }}>
            <Link className="btn" href="/">
              Vissza a kezdőlapra
            </Link>
            <a className="btn btn--ghost-dark" href={site.hellaUrl} target="_blank" rel="noopener">
              Pályafoglalás
              <Icon name="arrowUpRight" size={15} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flow">
      <div className="flow__progress" style={{ ["--steps" as string]: program ? steps.length : 1 }} aria-hidden="true">
        {program ? steps.map((s, i) => <span key={s + i} data-done={i <= stepIndex} />) : <span data-done="false" />}
      </div>
      <div className="flow__stepline">
        <span>{program ? `${stepIndex + 1}. lépés / ${steps.length}` : "1. lépés"}</span>
        {program && stepIndex > 0 && <span>{program.title}</span>}
      </div>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (isLast) void submit();
          else next();
        }}
      >
        <div className="flow__panel" key={step} data-dir={dir}>
          <h2 ref={headingRef} tabIndex={-1} className="flow__title" style={{ outline: "none" }}>
            {stepTitles[step]}
          </h2>
          <p className="flow__hint">{stepHints[step]}</p>

          {step === "program" && (
            <div data-field="program">
              <div className="choice-grid">
                {programs.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="choice"
                    aria-pressed={data.program === p.id}
                    onClick={() => chooseProgram(p.id)}
                  >
                    <span className="choice__icon">
                      <Icon name={p.icon} size={18} />
                    </span>
                    <span className="choice__title">{p.title}</span>
                    <span className="choice__text">{p.text}</span>
                  </button>
                ))}
                <a className="choice" href={site.hellaUrl} target="_blank" rel="noopener">
                  <span className="choice__icon">
                    <Icon name="arrowUpRight" size={18} />
                  </span>
                  <span className="choice__title">Pályát foglalnék</span>
                  <span className="choice__text">Online, a Hella rendszerében</span>
                </a>
              </div>
              <FieldError msg={errors.program} />
            </div>
          )}

          {step === "junior" && (
            <>
              <div className="field-row">
                <Field label="A gyerek neve" name="childName" error={errors.childName} required>
                  <input
                    id="childName"
                    className="input"
                    autoComplete="off"
                    value={data.childName}
                    onChange={(e) => set("childName", e.target.value)}
                    aria-invalid={!!errors.childName}
                    aria-describedby={errors.childName ? "childName-error" : undefined}
                  />
                </Field>
                <Field label="Életkora" name="childAge" error={errors.childAge} required>
                  <select
                    id="childAge"
                    className="select"
                    value={data.childAge}
                    onChange={(e) => set("childAge", e.target.value)}
                    aria-invalid={!!errors.childAge}
                    aria-describedby={errors.childAge ? "childAge-error" : undefined}
                  >
                    <option value="">Válassz</option>
                    {ages.map((a) => (
                      <option key={a} value={a}>
                        {a} éves
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <fieldset className="fieldset" data-field="group" style={{ marginTop: 20 }}>
                <legend>
                  Csoport <span className="req">*</span>
                </legend>
                <div className="chips">
                  {juniorGroupOptions.map((g) => (
                    <label key={g.id} className="chip">
                      <input
                        type="radio"
                        name="group"
                        value={g.id}
                        checked={data.group === g.id}
                        onChange={() => {
                          setData((d) => ({ ...d, group: g.id, slots: [], days: [] }));
                          setErrors((e) => ({ ...e, group: undefined, slots: undefined, days: undefined }));
                        }}
                      />
                      {g.name}
                    </label>
                  ))}
                </div>
                <FieldError msg={errors.group} />
              </fieldset>
              {data.group && data.group !== "nem-tudom" && (
                <fieldset className="fieldset" data-field="slots">
                  <legend>
                    Mely időpontok jók? <span className="req">*</span>
                  </legend>
                  <p className="field__help" style={{ marginBottom: 10 }}>
                    Több is választható. 2026 ősz, hétköznap délután.
                  </p>
                  <Chips
                    options={allJuniorGroups.find((g) => g.id === data.group)?.slots ?? []}
                    selected={data.slots}
                    onToggle={(v) => toggle("slots", v)}
                  />
                  <FieldError msg={errors.slots} />
                </fieldset>
              )}
              {data.group === "nem-tudom" && (
                <fieldset className="fieldset" data-field="days">
                  <legend>
                    Melyik délutánok jók? <span className="req">*</span>
                  </legend>
                  <Chips options={weekdays} selected={data.days} onToggle={(v) => toggle("days", v)} />
                  <FieldError msg={errors.days} />
                </fieldset>
              )}
              <label className="consent">
                <input type="checkbox" checked={data.fitness} onChange={(e) => set("fitness", e.target.checked)} />
                <span>Az erőnléti és koordinációs edzés is érdekel a tenisz mellé.</span>
              </label>
            </>
          )}

          {step === "level" && (
            <>
              <fieldset className="fieldset" data-field="level">
                <legend>
                  Melyik áll hozzád a legközelebb? <span className="req">*</span>
                </legend>
                <div className="choice-grid">
                  {levels.map((l) => (
                    <label key={l} className="choice" style={{ gridTemplateColumns: "1fr" }}>
                      <input type="radio" name="level" value={l} checked={data.level === l} onChange={() => set("level", l)} />
                      <span className="choice__title">{l.split(",")[0]}</span>
                      <span className="choice__text">{l.split(",").slice(1).join(",").trim()}</span>
                    </label>
                  ))}
                </div>
                <FieldError msg={errors.level} />
              </fieldset>
              <fieldset className="fieldset">
                <legend>
                  Hogyan játszanál? <span className="optional">(nem kötelező)</span>
                </legend>
                <Chips options={adultFormats} selected={data.formats} onToggle={(v) => toggle("formats", v)} />
              </fieldset>
            </>
          )}

          {step === "goals" && (
            <fieldset className="fieldset" data-field="goals">
              <legend>
                Célok <span className="req">*</span>
              </legend>
              <Chips options={goals} selected={data.goals} onToggle={(v) => toggle("goals", v)} />
              <FieldError msg={errors.goals} />
            </fieldset>
          )}

          {step === "time" && (
            <>
              <fieldset className="fieldset" data-field="days">
                <legend>
                  Napok <span className="req">*</span>
                </legend>
                <Chips options={days} selected={data.days} onToggle={(v) => toggle("days", v)} />
                <FieldError msg={errors.days} />
              </fieldset>
              <fieldset className="fieldset" data-field="dayparts">
                <legend>
                  Napszak <span className="req">*</span>
                </legend>
                <Chips options={dayparts} selected={data.dayparts} onToggle={(v) => toggle("dayparts", v)} />
                <FieldError msg={errors.dayparts} />
              </fieldset>
            </>
          )}

          {step === "weekdays" && (
            <fieldset className="fieldset" data-field="days">
              <legend>
                Napok <span className="req">*</span>
              </legend>
              <Chips options={weekdays} selected={data.days} onToggle={(v) => toggle("days", v)} />
              <FieldError msg={errors.days} />
            </fieldset>
          )}

          {step === "interest" && (
            <fieldset className="fieldset" data-field="interests">
              <legend>
                Szolgáltatás <span className="req">*</span>
              </legend>
              <Chips options={recoveryOptions} selected={data.interests} onToggle={(v) => toggle("interests", v)} />
              <FieldError msg={errors.interests} />
            </fieldset>
          )}

          {step === "contact" && (
            <>
              <Field label={data.program === "junior" ? "A szülő neve" : "A neved"} name="name" error={errors.name} required>
                <input
                  id="name"
                  className="input"
                  autoComplete="name"
                  value={data.name}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </Field>
              <div className="field-row">
                <Field label="E-mail" name="email" error={errors.email} required>
                  <input
                    id="email"
                    className="input"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => set("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </Field>
                <Field label="Telefon" name="phone" error={errors.phone} required>
                  <input
                    id="phone"
                    className="input"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+36 30 123 4567"
                    value={data.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                </Field>
              </div>
              <Field
                label={
                  <>
                    {data.program === "szemelyi-edzes" ? "Van sérülésed, fájdalmad, vagy bármi, amiről tudnunk kell?" : "Üzenet"}{" "}
                    <span className="optional">(nem kötelező)</span>
                  </>
                }
                name="message"
              >
                <textarea id="message" className="textarea" value={data.message} onChange={(e) => set("message", e.target.value)} />
              </Field>
              <div className="visually-hidden" aria-hidden="true">
                <label htmlFor="website">Weboldal</label>
                <input id="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => set("website", e.target.value)} />
              </div>
              <div data-field="consent">
                <label className="consent">
                  <input
                    type="checkbox"
                    checked={data.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    aria-invalid={!!errors.consent}
                  />
                  <span>
                    Elolvastam az{" "}
                    <Link className="inline-link" href="/adatkezeles" target="_blank">
                      adatkezelési tájékoztatót
                    </Link>
                    , és hozzájárulok, hogy a megadott adataimmal felvegyétek velem a kapcsolatot.
                  </span>
                </label>
                <FieldError msg={errors.consent} />
              </div>
              <Summary data={data} />
              {status === "error" && (
                <div className="flow__alert" role="alert">
                  <strong>
                    {errorKind === "invalid" ? "Valami nem stimmel az adatokkal." : "Most nem sikerült elküldeni a jelentkezést."}
                  </strong>
                  <span>
                    {errorKind === "invalid"
                      ? "Nézd át a lépéseket, és próbáld újra."
                      : errorKind === "not_configured"
                        ? "Az online küldés most nem elérhető. Küldd el e-mailben, a kitöltött adatok már benne vannak, vagy hívj minket:"
                        : "Próbáld újra egy perc múlva, vagy küldd el e-mailben, a kitöltött adatokkal együtt:"}
                  </span>
                  {errorKind !== "invalid" && (
                    <span className="btn-row">
                      <a className="btn btn--sm" href={mailto}>
                        <Icon name="mail" size={16} />
                        Küldés e-mailben
                      </a>
                      <a className="inline-link" href={program?.toTrainer ? trainer.phone.href : site.phone.href}>
                        {program?.toTrainer ? trainer.phone.display : site.phone.display}
                      </a>
                    </span>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {step !== "program" && (
          <div className="flow__nav">
            <button type="button" className="flow__back" onClick={back}>
              <Icon name="arrowLeft" size={16} />
              Vissza
            </button>
            <button type="submit" className="btn" disabled={status === "sending"} aria-busy={status === "sending"}>
              {status === "sending" ? (
                <>
                  <span className="spinner" aria-hidden="true" />
                  Küldés…
                </>
              ) : isLast ? (
                "Jelentkezés elküldése"
              ) : (
                <>
                  Tovább
                  <Icon name="arrowRight" size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: ReactNode;
  name: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="field" data-field={name}>
      <label htmlFor={name}>
        {label} {required && <span className="req">*</span>}
      </label>
      {children}
      {error && (
        <span className="field__error" id={`${name}-error`}>
          <Icon name="info" size={14} />
          {error}
        </span>
      )}
    </div>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <span className="field__error" role="alert" style={{ marginTop: 10 }}>
      <Icon name="info" size={14} />
      {msg}
    </span>
  );
}

function Chips({ options, selected, onToggle }: { options: readonly string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="chips">
      {options.map((o) => (
        <label key={o} className="chip">
          <input type="checkbox" checked={selected.includes(o)} onChange={() => onToggle(o)} />
          {o}
        </label>
      ))}
    </div>
  );
}

function Summary({ data }: { data: BookingData }) {
  const lines = summaryLines(data);
  if (!lines.length) return null;
  return (
    <div className="summary">
      <span className="meta" style={{ color: "var(--on-navy-soft)" }}>
        Összegzés
      </span>
      <dl>
        {lines.map(([k, v]) => (
          <div key={k} style={{ display: "contents" }}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
