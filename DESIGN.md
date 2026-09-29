---
name: Next Tenisz Akadémia
description: Clay courts on the Buda hill, told in paper, navy and a quiet teal.
colors:
  paper: "#faf8f4"
  sand: "#f4efe7"
  linen: "#fdfcfa"
  card-white: "#ffffff"
  hairline: "#e8e4df"
  hairline-strong: "#d9d3cb"
  ink-navy: "#1b3a5c"
  ink-soft: "#4a5d73"
  muted-slate: "#62707f"
  deep-navy: "#0f2237"
  navy-panel: "#1b3354"
  flow-navy: "#0c1d31"
  court-teal: "#267272"
  court-teal-deep: "#1e5f5f"
  lagoon-teal: "#5fc9c9"
  teal-wash: "#e6f1f0"
  clay: "#c4633a"
  error-on-navy: "#f08b6b"
  ball-red: "#d9443a"
  ball-orange: "#eb8a2f"
  ball-green: "#9ccf3c"
  ball-yellow: "#e3e64a"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "clamp(3.1rem, 8.2vw, 7.5rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.9rem, 6.4vw, 5.4rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline-section:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.1rem, 3.6vw, 2.9rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.2
  price:
    fontFamily: "Cormorant Garamond, Georgia, Times New Roman, serif"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "tnum, lnum"
  lead:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.06rem, 1.3vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
  label:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  s: "6px"
  m: "12px"
  l: "16px"
  full: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(72px, 10vw, 128px)"
  section-tight: "clamp(56px, 7vw, 88px)"
  stack-s: "12px"
  grid-gap: "16px"
  stack-m: "20px"
  card-pad: "22px"
  stack-l: "32px"
  container-max: "1160px"
  container-narrow: "760px"
  header-height: "64px"
components:
  button-primary:
    backgroundColor: "{colors.court-teal}"
    textColor: "{colors.card-white}"
    typography: "{typography.button}"
    rounded: "{rounded.s}"
    padding: "0 20px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.court-teal-deep}"
    textColor: "{colors.card-white}"
  button-primary-sm:
    backgroundColor: "{colors.court-teal}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.s}"
    padding: "0 14px"
    height: "38px"
  button-ghost:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink-navy}"
    typography: "{typography.button}"
    rounded: "{rounded.s}"
    padding: "0 20px"
    height: "46px"
  button-ghost-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-navy}"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.s}"
    padding: "0 20px"
    height: "46px"
  card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.m}"
    padding: "22px 22px 24px"
  price-card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.m}"
    padding: "clamp(22px, 3vw, 32px)"
  side-card:
    backgroundColor: "{colors.navy-panel}"
    textColor: "{colors.paper}"
    rounded: "{rounded.l}"
    padding: "clamp(24px, 3vw, 32px)"
  path-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.m}"
    padding: "18px 20px"
  photo-frame:
    backgroundColor: "{colors.sand}"
    rounded: "{rounded.l}"
  input-on-navy:
    backgroundColor: "rgba(250, 248, 244, 0.05)"
    textColor: "{colors.paper}"
    rounded: "{rounded.s}"
    padding: "10px 14px"
    height: "46px"
  chip-on-navy:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.s}"
    padding: "0 14px"
    height: "40px"
  chip-on-navy-selected:
    backgroundColor: "rgba(95, 201, 201, 0.16)"
    textColor: "{colors.paper}"
  pill:
    backgroundColor: "{colors.teal-wash}"
    textColor: "{colors.court-teal}"
    rounded: "{rounded.full}"
    padding: "7px 14px"
  season-bar:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.paper}"
    typography: "{typography.body-sm}"
    padding: "8px 16px"
---

# Design System: Next Tenisz Akadémia

## Overview

**Creative North Star: "The Clubhouse on the Hill"**

A calm, coached club site: warm paper pages that read like a well-kept noticeboard, interrupted by deep navy bands that feel like evening on the courts. The world is owner-pinned to the Laguna Beach Tennis Academy register and translated to four clay courts in the Buda woods beside Normafa. The setting carries the premium feel; the interface stays out of its way, stating times, places and prices plainly.

Density is relaxed on the marketing pages (generous section padding, one idea per band) and firmer where people act: price tables, junior schedules and the four-step request flow use hairline rows, tabular numerals and compact controls. Light Cormorant display headings with tight tracking set the voice; DM Sans does all the working text. Depth comes from alternating grounds (paper, sand, navy) and 1px hairlines, not from stacked shadows. Two local materials make the world its own: topographic contour lines of the hill as the navy-band texture, and hand-drawn pencil sketches (court plan, ball arc, headline underline) that draw themselves once.

The world refuses the tennis category default: no lime-green sporty banners, no shouting all-caps headlines, no stock "premium" gloss.

**Key Characteristics:**
- Paper ground, sand alternates, deep navy bands and footer.
- One action colour: court teal on light, lagoon teal on navy.
- Clay appears only as a line, never as a fill.
- Light, tightly tracked serif display over a clean geometric sans.
- Hairline-bordered white cards; prices and times in tabular figures.
- Real photography in 16px-rounded frames; drone video in the hero.
- Motion happens once: headline settles from blur, photos uncover, sketches draw.

## Colors

A warm neutral paper world anchored by navy ink, with a single teal voice for action and a thread of clay for place.

### Primary
- **Court Teal** (court-teal): every primary action on light grounds: filled buttons, text links, step numerals, checklist and FAQ icons, focus outlines. Hover deepens to **Court Teal Deep** (court-teal-deep).
- **Lagoon Teal** (lagoon-teal): the same role transposed onto navy: links, focus rings, selected chips and choices, progress bars, footer column heads, icon strokes in footer and event cards, the hero headline underline, and the contour texture.

### Secondary
- **Clay** (clay): the hill's own material. Used only as a line: the wordmark ball, sketch accents, the 36px rule atop navy side cards, and the centre of the footer's 3px teal-clay-teal rule.

### Neutral
- **Paper** (paper): page ground, header glass tint, and all text on navy (on-navy). Soft text on navy is paper at 74% opacity.
- **Sand** (sand): alternating section ground and the placeholder behind photos before they load.
- **Linen** (linen): the lightest alternating section, FAQ row hover, callouts, schedule header row.
- **Card White** (card-white): cards, price cards, FAQ, schedules, ghost buttons. Pure white appears only as a surface on paper, never as page ground.
- **Hairline** (hairline) and **Hairline Strong** (hairline-strong): 1px card borders, row dividers, ghost-button borders, dashed opening-hours rules.
- **Ink Navy** (ink-navy): all body and heading text on light grounds; also the season bar and feature panel ground.
- **Ink Soft** (ink-soft): leads, card text, secondary copy.
- **Muted Slate** (muted-slate): captions, price-band details, table heads.
- **Deep Navy** (deep-navy): hero, page heroes, navy sections, CTA bands, mobile menu, footer; all photo scrims are this colour at 30–88%.
- **Navy Panel** (navy-panel) and **Flow Navy** (flow-navy): raised panels inside navy bands (side cards; the booking flow shell).
- **Teal Wash** (teal-wash): pill and light-tag grounds.

### Data colours
- **Ball Red / Orange / Green / Yellow** (ball-red, ball-orange, ball-green, ball-yellow): the junior colour-ball stages (Piros, Narancs, Zöld, Nagyok), shown only as 10px dots beside stage names in cards and schedules. They encode data; they are never decorative.
- **Error on Navy** (error-on-navy): invalid-field borders and the alert box in the request flow; error text uses a lighter #f6a88e for contrast.

### Named Rules
**The Clay Hairline Rule.** Clay is a line of at most 3px or a stroke in a sketch or mark. It is never a fill, a button, a background or body text.

**The Two Teals Rule.** Court teal acts on light grounds; lagoon teal acts on navy. Never put court teal on navy or lagoon teal on paper.

**The Paper Ground Rule.** Pages sit on paper, sand or navy. White is reserved for surfaces that sit on paper (cards, tables, ghost buttons).

## Typography

**Display Font:** Cormorant Garamond (with Georgia, Times New Roman, serif), weights 300–600, italic available.
**Body Font:** DM Sans (with ui-sans-serif, system-ui, sans-serif).

**Character:** A light, high-contrast serif with tight negative tracking gives the headings a quiet, editorial calm; DM Sans handles every piece of working text with plain clarity. The contrast is the voice: soft headline, specific sentence.

### Hierarchy
- **Display** (300, clamp(3.1rem, 8.2vw, 7.5rem), 0.95): the home hero headline only, two lines, centred, with a soft text shadow over video.
- **Headline** (300, clamp(2.9rem, 6.4vw, 5.4rem), 0.98): inner page hero titles, left-aligned over a photo.
- **Headline Section** (300, clamp(2.1rem, 3.6vw, 2.9rem), 1.08): section h2; an XL variant (clamp(2.4rem, 4.6vw, 3.6rem)) for band statements. Mobile-menu links use 2.1rem at 300.
- **Title** (400, 1.6rem, 1.1): card titles, aside titles, side-card titles; event-card titles at 1.5rem.
- **Title Small** (500, 1.3rem, 1.2): step titles, h4, schedule row heads (1.15rem), row-group heads (1.12rem).
- **Price** (Cormorant 400, 1.6rem, tabular lining): price figures in price tables; unit in DM Sans 0.75rem muted.
- **Lead** (400, clamp(1.06rem, 1.3vw, 1.2rem), 1.6): section intros in ink-soft, max 62ch.
- **Body** (400, 1rem, 1.6): running text; prose max 66ch, FAQ answers 68ch. Card text 0.9063rem at 1.5.
- **Body Small** (0.875rem, 1.55): captions, row lists, footer, form help.
- **Button** (600, 0.9375rem, 1): buttons and text links.
- **Label** (600, 0.6875rem, 0.16em tracking, uppercase, muted): table column heads, the flow summary label and a speaker's name under a quote. Footer column heads are the display-face cousin: Cormorant 600, 0.75rem, 0.2em, uppercase, lagoon teal.

### Named Rules
**The Light Voice Rule.** Headings are Cormorant at 300–500 with negative tracking (−0.01 to −0.03em) and balanced wrapping. Never bold a display heading and never set a heading in uppercase.

**The Plain Numbers Rule.** Every price, time slot and schedule cell uses tabular lining numerals; right-align figures in row lists.

## Layout

A single centred container (1160px max plus a fluid gutter of clamp(16px, 4vw, 40px)); a narrow 760px container for forms and legal text. Sections breathe on a fluid rhythm (section, clamp(72px, 10vw, 128px); tight sections clamp(56px, 7vw, 88px)) and alternate grounds so the page reads as bands: paper, sand or linen, then a navy band, then paper again. Full-bleed photo bands (clamp(320px, 42vw, 560px) tall) and a navy CTA band close most pages before the navy footer.

Recurring grids: a two-column split (1.05fr / 0.95fr, gap clamp(40px, 6vw, 96px)) for text beside photographs, often an offset photo pair with the second frame dropped 64px; card grids of 2, 3 or 4 columns at a 16px gap; a detail layout with a sticky 360px aside; a 1.4fr / 0.9fr navy "what happens next" grid with ruled steps. Section heads cap at 720px and sit clamp(36px, 5vw, 56px) above content.

Responsive behaviour collapses by content, not device: 4-up cards go to 2 at 1100px, 3-up to 2 at 900px, everything to 1 at 620px; splits stack at 900px, detail and next-grid at 960px, the booking grid at 980px. The desktop nav yields to a full-screen navy menu below 1100px; below 720px the schedule table becomes a card list. The sticky header is 64px and anchors scroll padding.

**The Two Doors Rule.** Every major surface ends with both actions available: the request flow (teal button) and Hella court booking (ghost button).

## Elevation & Depth

Mostly flat. Depth comes from ground changes (paper to sand to navy), 1px hairlines, and photo scrims in deep navy. Shadows are rare and soft, always tinted navy, never grey or hard-offset.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 1px 2px rgba(15, 34, 55, 0.04), 0 8px 24px -12px rgba(15, 34, 55, 0.12)`): only on linked-card hover and the sticky detail aside.
- **Float** (`box-shadow: 0 2px 6px rgba(10, 22, 40, 0.12), 0 24px 48px -16px rgba(10, 22, 40, 0.45)`): only for surfaces floating over photography or navy: the frosted hero path cards and the booking flow shell.
- **Header settle** (`box-shadow: 0 6px 24px -18px rgba(15, 34, 55, 0.35)`): appears with the header's hairline once the page scrolls.
- **Frosted glass** (`backdrop-filter: blur(10–12px)`): header (paper at 92%), hero path cards (paper at 90%), video pause control.

### Named Rules
**The Border-First Rule.** Surfaces on paper rest with a 1px hairline and no shadow. Shadow is a response (hover, scroll, sticky) or the mark of something floating over a photo; it is never decoration at rest.

## Shapes

Three radii, each with a job: controls at 6px (buttons, inputs, chips, menu toggle), containers at 12px (cards, price cards, FAQ, schedules, path cards, callouts, choices), and photographs and large panels at 16px (photo frames, feature panel, side cards, booking flow). Fully rounded shapes are reserved for small status tags and pills; circles for icon-only controls (video pause, lightbox, social) and choice icons. Buttons are rectangular-with-soft-corners, never pills.

Lines do the structural work: 1px hairlines divide rows, tables and card sections; on navy, dividers are paper at 12% opacity. The sketches use a pencil line (1.5–3.2px, round caps) that slightly overshoots its ends. Photos reveal by clipping from an 18% inset to the full 16px-rounded frame.

**The Three Radii Rule.** 6px to act, 12px to contain, 16px to frame. Do not introduce in-between radii.

## Components

### Buttons
- **Shape:** softly squared (6px), 46px tall, 20px side padding; small variant 38px tall, 14px padding.
- **Primary:** court teal fill, white 600-weight text. This is the request-flow action ("Jelentkezés").
- **Hover / Focus / Active:** hover deepens to court teal deep over 180ms; active presses to 0.97 scale; focus shows a 2px court-teal outline offset 3px (lagoon teal on navy).
- **Ghost:** white fill, ink text, hairline-strong border; hover goes to paper with an ink border. Used for Hella court booking in the header.
- **Ghost on navy:** transparent, paper text, paper border at 28%; hover adds a 8% paper wash and a 60% border.
- **Text link:** court teal 600-weight with a trailing arrow that nudges 3px on hover.

### Chips and Pills
- **Pill:** teal-wash ground, court-teal 600 text, fully rounded; used for training focus areas.
- **Tag:** tiny uppercase status tag (0.6875rem, 0.08em), fully rounded; navy glass over photos, or teal-wash on light for "Hamarosan".
- **Choice chip (on navy):** 6px, 40px tall, paper border at 20%; selected shows a lagoon-teal border, a 16% lagoon wash and a small leading dot.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** card white on paper or sand.
- **Shadow Strategy:** none at rest; linked cards lift 2px with the card-lift shadow and zoom their photo to 1.04 on hover.
- **Border:** 1px hairline.
- **Internal Padding:** 22px sides, 24px bottom; a 16:10 photo head; the title in Cormorant 1.6rem; facts as hairline-topped rows with right-aligned tabular values; a text link at the foot.
- **Price card:** same shell, the kind in Cormorant 2rem light, then a hairline-ruled price table: band and detail on the left, the figure in Cormorant 1.6rem on the right.

### Inputs / Fields
- **Style:** the request flow lives on navy. Fields are 46px tall, 6px radius, paper border at 20% over a 5% paper wash, paper text, lagoon-teal caret; labels 600 at 0.9063rem above.
- **Focus:** border turns lagoon teal, wash rises to 8%, plus a 3px lagoon halo at 20%.
- **Error:** border in error-on-navy with an inline message and icon below; the form-level alert is an error-tinted 12px box.

### Navigation
- **Header:** sticky paper glass (92%, 12px blur), 64px tall; wordmark left (clay ball mark, Cormorant name, spaced small caps sub-line), text nav in DM Sans 0.9375rem with a 1px underline that draws from the left on hover and marks the current page; ghost Hella button and primary Jelentkezés button at small size on the right.
- **Season bar:** a thin ink-navy strip above the header with the current season notice and a lagoon-teal link.
- **Mobile:** below 1100px a full-screen deep-navy menu fades and settles in; links in Cormorant 2.1rem light divided by navy hairlines, both actions as full-width buttons, contact details at the bottom.
- **Footer:** deep navy opening with the 3px teal-clay-teal rule; a four-column grid collapsing to two then one.

### Hero Path Cards (signature)
Two frosted paper cards side by side over the drone video under a navy scrim: bold DM Sans title with a court-teal arrow, one line of ink-soft explanation. They are the "two doors": book a court or train. Float shadow; hover lifts 2px.

### Guided Request Flow (signature)
A four-step panel in flow navy (16px radius, float shadow): a segmented 3px progress bar that fills in lagoon teal, a step line, a Cormorant question title, then choice tiles or fields. Panels slide in 14px from the direction of travel with a slight blur. Back is a quiet text button; the summary is a hairline-bordered definition list.

### Contour Band and Sketches (signature)
Navy sections carry the hill's topographic contour lines in lagoon teal at 14% opacity. Hand-drawn sketches (the four-court plan, the ball arc, the hero underline) are ink line drawings with clay accents, drawn once as they enter view.

## Do's and Don'ts

### Do:
- **Do** alternate paper, sand and deep-navy bands to pace a page; end with both doors (request flow and Hella).
- **Do** keep court teal as the only filled action colour on light grounds and lagoon teal as its counterpart on navy.
- **Do** set prices, times and schedules in tabular lining numerals, with the figure in Cormorant and the unit in small DM Sans.
- **Do** frame photographs at 16px, cards at 12px and controls at 6px.
- **Do** use real photography of the courts, juniors and studio under deep-navy scrims (30–88%) so paper text holds contrast.
- **Do** let motion happen once and respect reduced motion: headline settles from blur, photos uncover, sketches draw, then everything stays still.

### Don't:
- **Don't** use lime or tennis-ball green as a brand colour, banner or button; the ball colours exist only as junior-stage data dots.
- **Don't** set headlines in uppercase or bold; display type stays Cormorant at 300–500.
- **Don't** fill anything with clay; it is a line.
- **Don't** add resting shadows to cards on paper, grey shadows, or hard offset shadows.
- **Don't** make buttons pill-shaped; pills are for tags and focus-area labels only.
- **Don't** put pure white behind a whole page or section; white is a card surface.
