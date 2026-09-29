// Every fact the site states lives here, so updates happen in one place.
// Values marked "CONFIRM" had conflicting sources on the old site.

export const site = {
  name: "Next Tenisz Akadémia",
  shortName: "Next Tenisz",
  url: "https://next-tenisz.hu",
  hellaUrl: "https://hella.next-tenisz.hu/",
  facebookUrl: "https://www.facebook.com/NextTeniszAkademia/",
  email: "montvaigabor@gmail.com",
  phone: { display: "+36 30 439 6037", href: "tel:+36304396037" },
  // CONFIRM: flyers say 1121 / Őzike út, the old footer said 1125 / Őzike utca.
  address: {
    line: "1121 Budapest, Őzike út 30/A",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Budapest+%C5%90zike+%C3%BAt+30%2FA",
  },
  bank: { name: "Raiffeisen Bank Zrt.", account: "12001008-01723861-00100005" },
  season: {
    label: "Nyári pályaszezon",
    // Without the closing period: every use appends a suffix ("-ig").
    until: "2026. október 12",
  },
} as const;

export const trainer = {
  name: "Juhász András",
  role: "Személyi edző",
  phone: { display: "+36 30 618 9800", href: "tel:+36306189800" },
} as const;

// CONFIRM: the old footer listed H–P 7–20, hétvégén 7–19.
export const openingHours = [
  { days: "Hétfő – péntek", hours: "7:00 – 21:00, egyes napokon 22:00-ig" },
  { days: "Szombat – vasárnap", hours: "8:00 – 19:00" },
] as const;

export type PriceRow = { band: string; detail: string; price: number };

export const courtPrices: { kind: string; note: string; rows: PriceRow[] }[] = [
  {
    kind: "Alkalmi",
    note: "Egy-egy alkalomra, bérlet nélkül.",
    rows: [
      { band: "Hétköznap reggel", detail: "7 – 10 óra", price: 5200 },
      { band: "Hétköznap napközben", detail: "10 – 14 óra, és hétvégén egész nap", price: 4900 },
      { band: "Hétköznap délután, este", detail: "14 – 21 óra", price: 6000 },
    ],
  },
  {
    kind: "Bérletes",
    note: "Rendszeres játékosoknak, bérlettel.",
    rows: [
      { band: "Hétköznap reggel", detail: "7 – 10 óra", price: 4700 },
      { band: "Hétköznap napközben", detail: "10 – 14 óra, és hétvégén egész nap", price: 4400 },
      { band: "Hétköznap délután, este", detail: "14 – 21 óra", price: 5500 },
    ],
  },
];

// Hungarian grouping with a narrow no-break space, also for four-digit numbers (5 200 Ft).
export const formatNumber = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f");
export const formatFt = (n: number) => formatNumber(n) + "\u00a0Ft";

export type JuniorGroup = {
  id: string;
  name: string;
  slots: string[];
};

export type JuniorStage = {
  id: string;
  name: string;
  ball: string;
  court: string;
  who: string;
  image: string;
  imageAlt: string;
  groups: JuniorGroup[];
};

// Fall 2026 junior groups, as published in the 2026.08.25 sign-up form.
export const juniorStages: JuniorStage[] = [
  {
    id: "piros",
    name: "Piros",
    ball: "Piros labda",
    court: "Kis pálya",
    who: "Az első ütőtől: lassú, puha labda, rövid pálya, sok labdaérintés.",
    image: "/images/junior-cones.jpg",
    imageAlt: "Két kisfiú ütővel, bóják között a salakpályán",
    groups: [
      { id: "piros", name: "Piros", slots: ["Hétfő 16–17", "Kedd 17–18", "Csütörtök 16–17", "Péntek 15–16"] },
      { id: "piros-plus", name: "Piros+", slots: ["Kedd 17–18", "Csütörtök 16–17", "Péntek 16–17"] },
    ],
  },
  {
    id: "narancs",
    name: "Narancs",
    ball: "Narancs labda",
    court: "Közepes pálya",
    who: "Aki már rendszeresen átüti a hálón: nagyobb pálya, gyorsabb labda.",
    image: "/images/junior-net.jpg",
    imageAlt: "Kislány a háló előtt, ütővel a kezében",
    groups: [
      { id: "narancs", name: "Narancs", slots: ["Hétfő 16–17", "Kedd 17–18", "Csütörtök 16–17", "Péntek 16–17"] },
      { id: "narancs-plus", name: "Narancs+", slots: ["Hétfő 16–17", "Kedd 16–17", "Csütörtök 16–17", "Péntek 16–17"] },
    ],
  },
  {
    id: "zold",
    name: "Zöld",
    ball: "Zöld labda",
    court: "Teljes pálya",
    who: "Teljes pálya, kicsit lassabb labda: átmenet a felnőtt játékba.",
    image: "/images/junior-backhand.jpg",
    imageAlt: "Fiú kétkezes fonákot üt a salakon",
    groups: [{ id: "zold", name: "Zöld", slots: ["Hétfő 16–17", "Kedd 16–17", "Csütörtök 17–18", "Péntek 17–18"] }],
  },
  {
    id: "nagyok",
    name: "Nagyok",
    ball: "Sárga labda",
    court: "Teljes pálya",
    who: "Sárga labdás játékosoknak, két csoportban, tudásszint szerint.",
    image: "/images/forehand-dark.jpg",
    imageAlt: "Fiatal játékos tenyeres ütés után, sötét háttér előtt",
    groups: [
      { id: "nagyok-1", name: "Nagyok 1", slots: ["Hétfő 17–18", "Kedd 17:30–19", "Szerda 16–17", "Csütörtök 17–18"] },
      { id: "nagyok-2", name: "Nagyok 2", slots: ["Kedd 17:30–19", "Szerda 18–19", "Csütörtök 17–18", "Csütörtök 18–19"] },
    ],
  },
];

export const allJuniorGroups = juniorStages.flatMap((s) => s.groups);

export const goodMorningClub = {
  when: "Hétköznap 7:30",
  fee: 3000,
  bring: "Saját matrac, víz és jókedv",
} as const;

export const tournaments2026 = [
  { name: "Tavaszi Tenisz Tusa", date: "2026. május 16.", start: "10:00", fee: 12000 },
  { name: "Nyárindító Tenisztorna", date: "2026. június 14.", start: "10:00", fee: 12000 },
  { name: "Póker Páros", date: "2026. július 18.", start: "10:00", fee: 12000, note: "A párokat tudásszint szerint sorsoljuk." },
] as const;

export const directions = {
  car: "Az Istenhegyi úton, majd az Eötvös úton felfelé. A Víztornyot elhagyva az első utcán jobbra (Normafa út), majd rögtön az első utcán ismét jobbra, az Őzike útra.",
  transit:
    "A Széll Kálmán térről a 21-es busszal körülbelül húsz perc, vagy a Fogaskerekűvel a Városmajorból.",
  parking: "A pályák mellett lehet parkolni.",
} as const;

export const nav = [
  { href: "/tenisz", label: "Tenisz" },
  { href: "/szemelyi-edzes", label: "Személyi edzés" },
  { href: "/csoportos-orak", label: "Csoportos órák" },
  { href: "/palyaberles", label: "Pályabérlés" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kapcsolat", label: "Kapcsolat" },
] as const;
