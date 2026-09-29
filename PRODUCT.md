# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router, TypeScript). Chosen by the owner. Static-first; one route handler (`/api/jelentkezes`) forwards training requests by e-mail.

## Users

- **Local players and families in Buda (XII. kerület and around):** want a clay court near Normafa at a known price, booked in a minute. They already use Hella for court booking.
- **Parents of juniors:** want to know which colour-ball group (Piros → Nagyok) fits their child, when it runs, and how to sign up for the season.
- **Adults looking for movement coaching:** want personal training, small-group functional training (Köredzés) or the Good Morning Club, led by Juhász András, on site at the academy.

## Product Purpose

Next Tenisz Akadémia is a tennis club with four renovated outdoor clay courts in the Buda hills, a few minutes' walk from Normafa. The site sells three things: court rental (booked on Hella), tennis coaching (junior colour-ball groups, adults), and movement coaching (personal training, Köredzés, Good Morning Club). Success means a visitor finds the right offer and either books a court on Hella or sends a complete training request.

## Positioning

The only thing a neighbouring club cannot copy: the setting (courts on the hill next to Normafa, in the woods, fresh air, twenty minutes from Széll Kálmán tér) and a single place where tennis and whole-body movement coaching sit side by side.

## Operating Context

- Court booking and payment: https://hella.next-tenisz.hu (external, stays external).
- Training requests: the site's guided request form; staff follow up by phone or e-mail.
- Seasons: the summer court season runs until 2026.10.12; junior groups sign up per season (fall 2026 sign-up opened 2026.08.25).
- Amateur tournaments are held on site (Tavaszi Tenisz Tusa, Nyárindító Tenisztorna, Póker Páros; 2026, entry 12 000 Ft/fő).

## Capabilities and Constraints

- Language: Hungarian only.
- Court prices (summer season until 2026.10.12), per hour: Alkalmi 5 200 (hétköznap 7–10), 4 900 (hétköznap 10–14 és hétvégén), 6 000 (hétköznap 14–21); Bérletes 4 700 / 4 400 / 5 500 for the same bands.
- Opening hours (current home page): H–P 7–21/22 h, Szo–V 8–19 h. The old footer states different hours (H–P 7–20, hétvégén 7–19); **open decision: owner to confirm**.
- Address: the flyers say "1121 Budapest, Őzike út 30/A"; the old footer says "1125 Budapest, Őzike utca 30/A". **Open decision: owner to confirm**; the site uses the flyer version.
- Junior groups (fall 2026): Piros, Piros+, Narancs, Narancs+, Zöld, Nagyok 1, Nagyok 2 with fixed weekday slots (see `src/content/site.ts`).
- Good Morning Club: weekdays 7:30, 3 000 Ft per session, open to all, bring a mat and water.
- Massage/cupping and softlaser: announced, not yet available ("Hamarosan").
- No prices published for tennis lessons or personal training: never invent them.

## Brand Commitments

- Visual direction is pinned by the owner: closely follow lagunabeachtennisacademy.com (colours, type, components, calm, specific voice).
- Logo intentionally out of scope for now; a wordmark stands in.
- Owner will replace photography later; current photos come from the existing site.

## Evidence on Hand

- Photos: drone shots of the courts and Buda hills, junior training, coach feeding balls, group photo, the movement studio and equipment (`public/images`).
- Drone video of the club (`public/video/next-tenisz-dron.mp4`).
- Flyers for Good Morning Club, personal training (Juhász András, +36 30 618 9800) and 2026 tournaments.
- No testimonials, ratings, coach bios or results are on hand: do not fabricate any.

## Product Principles

1. Say the specific thing: times, prices, places, and what happens next.
2. Two clear doors: book a court (Hella) or ask for training (request form).
3. The hill is the brand: let the setting carry the premium feel.
4. Honest about what is not ready yet (Hamarosan) rather than padding.

## Accessibility & Inclusion

WCAG 2.2 AA: keyboard-complete booking flow, pausable background video, reduced-motion support, sufficient contrast on photo overlays.
