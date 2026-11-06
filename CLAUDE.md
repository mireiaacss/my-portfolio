# Portfolio Development Rules

## Design Principles (Anti-AI Default)
- Avoid default purple/indigo gradients, floating rounded cards with heavy drop-shadows, and unstyled Inter.
- Pick a cohesive aesthetic: Editorial / Swiss Clean with high-contrast typography (e.g., Playfair or Newsreader paired with Geist / Plus Jakarta Sans).
- Use a single-hue OKLCH token system:
  --brand-hue: 215; /* Slate / Steel Navy */
  --bg-surface: oklch(0.99 0.005 var(--brand-hue));
  --text-main: oklch(0.18 0.02 var(--brand-hue));
  --accent: oklch(0.55 0.18 var(--brand-hue));

## SEO & Architecture Standards
1. Semantic HTML: Exact use of `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`. Exactly one `<h1>` per page.
2. Structured Data: Always generate a JSON-LD script tag with schema.org `Person` containing:
   - name, jobTitle, worksFor, url, sameAs (LinkedIn, GitHub, Bluesky/Twitter)
   - knowsAbout (key skills and domains)
3. Meta & OpenGraph: Canonical URLs, descriptive titles (`[Name] - [Core Role/Specialty]`), OpenGraph image tags, and concise meta descriptions.
4. Fast & Lightweight: Zero heavy animation libraries for static elements; rely on CSS native transitions and scroll-driven CSS where appropriate.
