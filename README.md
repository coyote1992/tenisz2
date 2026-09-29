# Next Tenisz Akadémia — weboldal

Next.js 16 (App Router) oldal a Next Tenisz Akadémiának: pályabérlés, junior tenisz, felnőtt tenisz, személyi edzés, Köredzés és Good Morning Club, vezetett online jelentkezéssel.

## Indítás

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Node.js 20.9 vagy újabb kell.

## Hol mit találsz

| Mit akarsz módosítani | Fájl |
| --- | --- |
| Árak, nyitvatartás, telefonszámok, cím, szezon vége, junior csoportok és időpontok, versenyek | `src/content/site.ts` |
| Gyakori kérdések | `src/content/faq.tsx` |
| Galéria képei | `src/content/gallery.ts` és `public/images/` |
| Jelentkezési lépések, választható célok, napszakok | `src/lib/booking.ts` |
| Színek, betűk, minden stílus | `src/app/globals.css` (a tetején a tokenek) |
| Oldalak | `src/app/<útvonal>/page.tsx` |

A képeket a `public/images/` mappában azonos néven cserélheted, a Next.js automatikusan méretezi és WebP/AVIF formátumra alakítja őket.

## Jelentkezési űrlap (e-mail küldés)

A `/jelentkezes` oldal űrlapja a `/api/jelentkezes` végpontra küld, ami a [Resend](https://resend.com) szolgáltatáson keresztül e-mailt küld. Állítsd be a környezeti változókat (minta: `.env.example`):

- `RESEND_API_KEY`: a Resend API-kulcs
- `BOOKING_TO_EMAIL`: ide érkeznek a jelentkezések (több cím vesszővel)
- `BOOKING_TO_EMAIL_TRAINER`: nem kötelező; a személyi edzés, Köredzés és Good Morning Club jelentkezések ide mennek
- `BOOKING_FROM_EMAIL`: a Resendben hitelesített feladó, pl. `Next Tenisz <jelentkezes@next-tenisz.hu>`

Amíg nincs beállítva, az űrlap nem vész el: a látogató egy gombbal e-mailben küldheti el a kitöltött adatokat, és látja a telefonszámot.

A pályafoglalás továbbra is a Hellán történik: `https://hella.next-tenisz.hu/`.

## Átirányítások a régi oldalról

A régi WordPress-címek (`/koredzes`, `/good-morning-club`, `/masszazs-kopolyozes`, `/softlaser`, `/jelentkezes-2026-osz`, `/haziverseny`, `/verseny`, `/tabor`, `/edzoi-allashirdetes`) a `next.config.ts`-ben vannak átirányítva. A `/tenisz`, `/szemelyi-edzes` és `/jelentkezes` címek megmaradtak.

Figyelem: a régi WordPressen futó Amelia-foglalófelületeket (`/foglalas`, `/ugyfel-terulet`, `/edzoi-felulet`) ez az oldal nem váltja ki. Ha ezeket használjátok, a domain átállítása előtt döntsetek róluk.

## Telepítés

Legegyszerűbb a [Vercel](https://vercel.com): importáld a repót, add meg a fenti környezeti változókat, és kösd rá a `next-tenisz.hu` domaint.
