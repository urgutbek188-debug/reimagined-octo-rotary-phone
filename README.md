# Warren Mitchell — Quiet Wealth (link-in-bio site)

Single-page Next.js 14 site. Dark + gold, Playfair/Inter, parallax hero, sticky navbar,
testimonial carousel, FAQ accordion, exit-intent popup.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Deploy to Vercel: push to GitHub → vercel.com → Import → done.

## 3 things to paste before launch (all in `lib/images.ts`)

1. **Gumroad link** → `LINKS.gumroad` — your product URL for the $27 Blueprint.
2. **MailerLite form action** → `LINKS.mailerliteAction`
   - MailerLite → Forms → Embedded form → create one with fields `name` + `email`
   - Click "HTML code" and copy the URL from the `<form action="...">` attribute
   - Paste it as `mailerliteAction`. All 3 forms on the page (main, footer, popup) use it.
3. **Images** → the `WARREN` object. Currently using your 5 newest Higgsfield images.
   To swap one: copy a URL from your Higgsfield library and paste it over the line.
   - `hero` — direct eye contact, strongest portrait
   - `serious` — for The Trap (debt talk)
   - `story` — candid for the timeline
   - `hopeful` — warm, for the free kit form
   - `confident` — calm-confident, for the $27 pitch

**For 95+ PageSpeed:** download the 5 images, compress them (squoosh.app, WebP, ~1200px wide),
drop them in `public/warren/`, and change the values to `"/warren/hero.webp"` etc.
Remote CDN images work fine but local + WebP scores higher.

## SEO

- Title/description/OG are in `app/layout.tsx`. Change `metadataBase` to your real domain.
- Add an `og.png` (1200×630) to `/public` — Warren portrait + "Never Pay Your Debt First."

## Where everything lives

| File | What |
|---|---|
| `app/page.tsx` | Page assembly + gold scroll-progress bar |
| `components/Hero.tsx` | Hero with parallax portrait |
| `components/Navbar.tsx` | Sticky navbar (appears after 480px scroll) |
| `components/Sections.tsx` | Trap, Story, Lead magnet, What's Inside |
| `components/Testimonials.tsx` | Auto-scrolling IG/YT comment carousel (drag-enabled) |
| `components/Closing.tsx` | Blueprint pitch, FAQ accordion, Footer |
| `components/ExitIntent.tsx` | Exit popup (desktop mouse-out + mobile scroll-up, once per session) |
| `components/ui.tsx` | GoldButton, Section fade-in, EmailForm |
| `lib/images.ts` | **All images + links — your one config file** |

## Legal note

The footer links to /privacy, /terms, /disclaimer — create those pages before running paid
traffic. Keep the "not financial advice" line everywhere; it's also in the FAQ answer.
