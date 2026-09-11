# Vivaria Art & Designs

Landing page for Vivaria Art & Designs by Madeleine Barois, built with React + TypeScript + Vite, ready to deploy on Vercel.

## Structure

- `src/components/` — one component per section (Header, Hero, Blurb, Portfolio, Shop, Connect, Contact, Footer)
- `src/data/links.ts` — every external link in one place. `shopEntries` drives the Shop cards (Etsy, Redbubble); set `ready: false` on an entry to render it as a "coming soon" card instead of a live link. `artistWebsite` and `socialLinks` drive the Connect section.
- `public/` — logo, moth artwork, portfolio pieces, and shop preview images, sourced from the repo's `assets/` folder.

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Notes

- Styled with [Tailwind CSS v4](https://tailwindcss.com) via the `@tailwindcss/vite` plugin — no separate config file. Theme colors/fonts are defined in `src/index.css` under `@theme`, and a few repeated patterns (`.section`, `.btn-primary`, `.card`, etc.) are defined there with `@utility` so components stay readable.
- The color palette (deep forest greens, cream text, terracotta accent) is pulled from the [Printify shop](https://vivaria-designs.printify.me/), so the landing page and shop feel like one brand.
- Fonts: [Megrim](https://fonts.google.com/specimen/Megrim) for the `h1`, [Georama](https://fonts.google.com/specimen/Georama) for everything else — matching madeleinebarois.com.
- The Blurb section currently has placeholder copy — swap it for a real artist statement in `src/components/Blurb.tsx` whenever ready.
- The Etsy shop card links to `https://www.etsy.com/de-en/shop/VivariaByMadeleine`.
- The Contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month), same as madeleinebarois.com. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID` to your form ID (restart `npm run dev` after adding it). Until it's set up, the section still renders with a note instead of submitting. When deploying, add the same env var in your host's project settings.

## Deploying to Vercel

1. Push this folder to a GitHub repo (or use the existing one already connected to this folder).
2. In Vercel, "Add New Project" → import the repo. Vercel auto-detects Vite; no config needed.
3. Deploy, then attach your `vivaria-art.com` domain under Project → Settings → Domains.
