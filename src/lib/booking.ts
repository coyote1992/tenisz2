// Shared by the booking flow (client) and /api/jelentkezes (server).
import { allJuniorGroups, goodMorningClub, formatFt, trainer } from "@/content/site";

export type ProgramId = "junior" | "felnott-tenisz" | "szemelyi-edzes" | "koredzes" | "good-morning-club" | "regeneracio";

export type StepId = "program" | "junior" | "level" | "goals" | "time" | "weekdays" | "interest" | "contact";

export const programs: {
  id: ProgramId;
  title: string;
  text: string;
  icon: "ball" | "users" | "sun" | "info";
  steps: StepId[];
  toTrainer?: boolean;
}[] = [
  { id: "junior", title: "Junior tenisz", text: "Gyerekeknek, a Piros labdától a Nagyokig", icon: "ball", steps: ["program", "junior", "contact"] },
  { id: "felnott-tenisz", title: "Tenisz felnőtteknek", text: "Kezdőtől versenyzőig, egyénileg vagy társsal", icon: "ball", steps: ["program", "level", "time", "contact"] },
  { id: "szemelyi-edzes", title: "Személyi edzés", text: `${trainer.name}sal, a céljaidhoz igazítva`, icon: "users", steps: ["program", "goals", "time", "contact"], toTrainer: true },
  { id: "koredzes", title: "Köredzés", text: "Funkcionális kiscsoportos edzés", icon: "users", steps: ["program", "time", "contact"], toTrainer: true },
  { id: "good-morning-club", title: "Good Morning Club", text: `${goodMorningClub.when}, ${formatFt(goodMorningClub.fee)} / alkalom`, icon: "sun", steps: ["program", "weekdays", "contact"], toTrainer: true },
  { id: "regeneracio", title: "Masszázs és softlaser", text: "Hamarosan indul, értesítést kérek", icon: "info", steps: ["program", "interest", "contact"] },
];

export const stepTitles: Record<StepId, string> = {
  program: "Mire jelentkezel?",
  junior: "A gyerekről",
  level: "Hol tartasz most?",
  goals: "Mit szeretnél elérni?",
  time: "Mikor érsz rá?",
  weekdays: "Melyik reggeleken jönnél?",
  interest: "Mi érdekel?",
  contact: "Hogyan érünk el?",
};

export const stepHints: Record<StepId, string> = {
  program: "Válassz egyet. Ha pályát foglalnál, azt a Hellán teheted meg.",
  junior: "Ha nem tudod, melyik csoport illik hozzá, jelöld a „Még nem tudom” lehetőséget, és segítünk.",
  level: "Nincs rossz válasz: ebből tudjuk, melyik edző és milyen óra illik hozzád.",
  goals: "Jelölj be annyit, amennyi igaz. Az első alkalommal úgyis részletesen megbeszéljük.",
  time: "Jelölj be minden napot és napszakot, ami jó. Ebből ajánlunk időpontot.",
  weekdays: `Az alkalmak ${goodMorningClub.when.toLowerCase()}-kor kezdődnek. Nem kell minden nap jönnöd.`,
  interest: "Szólunk, amint indul, és elsőként foglalhatsz időpontot.",
  contact: "Ezeken az elérhetőségeken keresünk, hogy egyeztessük a részleteket.",
};

export const juniorGroupOptions = [...allJuniorGroups.map((g) => ({ id: g.id, name: g.name })), { id: "nem-tudom", name: "Még nem tudom" }];

export const levels = ["Kezdő, most ismerkednék a teniszezéssel", "Újrakezdő, régebben játszottam", "Középhaladó, rendszeresen játszom", "Haladó vagy versenyző"];

export const adultFormats = ["Egyéni óra", "Párban", "Kiscsoportban", "Még nem tudom"];

export const goals = [
  "Egészség megőrzése",
  "Fájdalommentesebb mozgás",
  "Erőfejlesztés",
  "Robbanékonyság",
  "Állóképesség",
  "Koordináció",
  "Ülő életmód ellensúlyozása",
  "Fogyás, jobb közérzet",
  "Felkészülés a teniszre",
];

export const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
export const weekdays = days.slice(0, 5);
export const dayparts = ["Reggel (7–10)", "Délelőtt (10–14)", "Délután (14–18)", "Este (18–21)"];
export const recoveryOptions = ["Masszázs", "Köpölyözés", "Softlaser"];

export type BookingData = {
  program: ProgramId | "";
  childName: string;
  childAge: string;
  group: string;
  slots: string[];
  fitness: boolean;
  level: string;
  formats: string[];
  goals: string[];
  days: string[];
  dayparts: string[];
  interests: string[];
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  website: string; // honeypot
};

export const emptyBooking: BookingData = {
  program: "",
  childName: "",
  childAge: "",
  group: "",
  slots: [],
  fitness: false,
  level: "",
  formats: [],
  goals: [],
  days: [],
  dayparts: [],
  interests: [],
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
  website: "",
};

export type Errors = Partial<Record<keyof BookingData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateStep(step: StepId, d: BookingData): Errors {
  const e: Errors = {};
  switch (step) {
    case "program":
      if (!programs.some((p) => p.id === d.program)) e.program = "Válaszd ki, mire jelentkezel.";
      break;
    case "junior":
      if (!d.childName.trim()) e.childName = "Add meg a gyerek nevét.";
      if (!d.childAge) e.childAge = "Válaszd ki a gyerek életkorát.";
      if (!d.group) e.group = "Válassz csoportot, vagy jelöld, hogy még nem tudod.";
      else if (d.group !== "nem-tudom" && d.slots.length === 0) e.slots = "Jelölj be legalább egy időpontot.";
      else if (d.group === "nem-tudom" && d.days.length === 0) e.days = "Jelölj be legalább egy napot.";
      break;
    case "level":
      if (!d.level) e.level = "Válaszd ki, melyik áll hozzád a legközelebb.";
      break;
    case "goals":
      if (d.goals.length === 0) e.goals = "Jelölj be legalább egy célt.";
      break;
    case "time":
      if (d.days.length === 0) e.days = "Jelölj be legalább egy napot.";
      if (d.dayparts.length === 0) e.dayparts = "Jelölj be legalább egy napszakot.";
      break;
    case "weekdays":
      if (d.days.length === 0) e.days = "Jelölj be legalább egy napot.";
      break;
    case "interest":
      if (d.interests.length === 0) e.interests = "Jelölj be legalább egyet.";
      break;
    case "contact":
      if (!d.name.trim()) e.name = "Add meg a neved.";
      if (!d.email.trim()) e.email = "Add meg az e-mail-címed.";
      else if (!EMAIL_RE.test(d.email.trim())) e.email = "Ez nem tűnik érvényes e-mail-címnek. Nézd át, kérlek.";
      if (d.phone.replace(/\D/g, "").length < 9) e.phone = "Add meg a telefonszámod, hogy fel tudjunk hívni.";
      if (!d.consent) e.consent = "A küldéshez fogadd el az adatkezelési tájékoztatót.";
      break;
  }
  return e;
}

export function validateAll(d: BookingData): Errors {
  const program = programs.find((p) => p.id === d.program);
  if (!program) return { program: "Válaszd ki, mire jelentkezel." };
  return program.steps.reduce<Errors>((acc, s) => ({ ...acc, ...validateStep(s, d) }), {});
}

export function groupName(id: string) {
  return juniorGroupOptions.find((g) => g.id === id)?.name ?? id;
}

// Human-readable lines used by the summary, the e-mail and the mailto fallback.
export function summaryLines(d: BookingData): [string, string][] {
  const program = programs.find((p) => p.id === d.program);
  const lines: [string, string][] = [];
  const has = (s: StepId) => !!program?.steps.includes(s);
  if (program) lines.push(["Program", program.title]);
  if (d.program === "junior") {
    if (d.childName) lines.push(["Gyerek", `${d.childName}${d.childAge ? `, ${d.childAge} éves` : ""}`]);
    if (d.group) lines.push(["Csoport", groupName(d.group)]);
    if (d.slots.length) lines.push(["Időpontok", d.slots.join(", ")]);
    if (d.group === "nem-tudom" && d.days.length) lines.push(["Napok", d.days.join(", ")]);
    lines.push(["Erőnlét, koordináció", d.fitness ? "Érdekel" : "Most nem"]);
  }
  if (has("level") && d.level) lines.push(["Szint", d.level]);
  if (has("level") && d.formats.length) lines.push(["Forma", d.formats.join(", ")]);
  if (has("goals") && d.goals.length) lines.push(["Célok", d.goals.join(", ")]);
  if ((has("time") || has("weekdays")) && d.days.length) lines.push(["Napok", d.days.join(", ")]);
  if (has("time") && d.dayparts.length) lines.push(["Napszak", d.dayparts.join(", ")]);
  if (has("interest") && d.interests.length) lines.push(["Érdeklődés", d.interests.join(", ")]);
  return lines;
}

export function contactLines(d: BookingData): [string, string][] {
  const lines: [string, string][] = [
    ["Név", d.name],
    ["E-mail", d.email],
    ["Telefon", d.phone],
  ];
  if (d.message.trim()) lines.push(["Megjegyzés", d.message.trim()]);
  return lines;
}

// Sanitises an untrusted payload into BookingData (server side).
export function coerceBooking(input: unknown): BookingData {
  const src = (typeof input === "object" && input ? input : {}) as Record<string, unknown>;
  const str = (k: keyof BookingData, max = 200) => (typeof src[k] === "string" ? (src[k] as string).slice(0, max) : "");
  const arr = (k: keyof BookingData, allowed: string[]) =>
    Array.isArray(src[k]) ? (src[k] as unknown[]).filter((v): v is string => typeof v === "string" && allowed.includes(v)).slice(0, 20) : [];
  const program = str("program") as ProgramId;
  const allSlots = allJuniorGroups.flatMap((g) => g.slots);
  return {
    program: programs.some((p) => p.id === program) ? program : "",
    childName: str("childName", 120),
    childAge: str("childAge", 3),
    group: juniorGroupOptions.some((g) => g.id === src.group) ? (src.group as string) : "",
    slots: arr("slots", allSlots),
    fitness: src.fitness === true,
    level: levels.includes(src.level as string) ? (src.level as string) : "",
    formats: arr("formats", adultFormats),
    goals: arr("goals", goals),
    days: arr("days", days),
    dayparts: arr("dayparts", dayparts),
    interests: arr("interests", recoveryOptions),
    name: str("name", 120),
    email: str("email", 200),
    phone: str("phone", 40),
    message: str("message", 2000),
    consent: src.consent === true,
    website: str("website", 200),
  };
}
