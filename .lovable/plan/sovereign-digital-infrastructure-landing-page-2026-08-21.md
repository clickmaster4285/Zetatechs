# Sovereign Digital Infrastructure — Landing Page

Build a one-page site matching the uploaded reference exactly: near-black background, crimson accent, condensed heavy display headlines, monospace uppercase micro-labels, thin hairline dividers.

## Visual system

- Background: near-black navy (#080a12) with subtle radial glow at edges
- Accent: crimson red (#e8203f) used only for one headline word, dots, and the CTA button
- Text: off-white headings, muted grey body
- Fonts: Archivo/Archivo Black-style condensed grotesk for headlines, JetBrains Mono for uppercase micro-labels, Inter-ish sans for body
- Sharp corners, hairline 1px borders, generous vertical space, tracking-wide mono labels

## Sections (in order)

1. **Nav bar** — red stylised "Z" mark left, centered links (ABOUT, SERVICES, PRODUCTS, BLOGS & EVENTS, CAREERS) in mono uppercase, red "TALK TO ZETA" button right. Mobile: hamburger drawer.
2. **Hero** — full-viewport. Mono eyebrow "TELECOMMUNICATIONS & DIGITAL INFRASTRUCTURE"; four-line headline POWERING / SOVEREIGN / DIGITAL (red) / INFRASTRUCTURE at massive scale. Faint animated network-constellation graphic on the right half. Bottom hairline row: "— SCROLL THROUGH THE NETWORK" left, short descriptor centre, coordinates "PK / 30.3753° N 69.3451° E" right.
3. **Credentials strip** — mono heading "NETWORK ASSURANCE / INFRASTRUCTURE CREDENTIALS" with sub-line, right-aligned "— SOVEREIGN CARRIER FOUNDATION". Below: horizontal hairline with 4 red dots and 4 numbered items (01 CONTINUITY / 15+ Years, 02 LICENSED / LDI Operator, 03 GATEWAY / T-CLS, 04 REACH / Regional Network) each with mono caption.
4. **Services** — numbered list rows in the same hairline/mono style (terrestrial routes, IP transit, data centre, managed services).
5. **Footer** — minimal: logo, link columns in mono, coordinates line, copyright.

## Technical notes

- Rewrite `src/routes/index.tsx` as the page; sections split into components under `src/components/`.
- Add design tokens (background, accent crimson, hairline border, mono/display font families) to `src/styles.css` @theme — no hardcoded colours in components.
- Load fonts via `<link>` in `src/routes/__root.tsx`; set page title/description/OG meta in the index route `head()`.
- Hero network graphic: lightweight canvas/SVG constellation, subtle drift, respects reduced-motion.
- Fully responsive; headline scales down to stacked mobile size.
