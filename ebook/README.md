# The Focus Blueprint — e-book source

The premium lead-magnet / product e-book sold by this site:
**"The Focus Blueprint: A Remote Worker's Guide to Eliminating Distractions and
Doubling Daily Output."**

| File | What it is |
|---|---|
| `focus-blueprint.html` | The source of truth — all content + print CSS (19-page layout). Edit this. |
| `focus-blueprint.pdf` | Rendered PDF (source-of-truth copy). |
| `../public/The-Focus-Blueprint.pdf` | The downloadable product copy the site serves (identical to the above). |

## Design

- **Palette:** Deep Slate Blue (`#1f3a5f`) primary, ample white space, Mint Green
  (`#3ecf8e`) and Blue (`#3b82f6`) accents.
- **Cover:** full-bleed slate gradient, title + subtitle + author placeholder
  (`[ Your Name Here ]` — swap in the real author).
- **Structure:** Cover · Table of Contents · Introduction · Ch.1 The Digital
  Shield · Ch.2 Deep Work Blocks · Ch.3 The Action Guide · 7-Day Activation Plan.
- Every chapter ends with a styled **Action Items** box; key takeaways use
  styled blockquotes; templates/steps use tables and numbered step lists.

## Re-rendering the PDF

No `pandoc`/`weasyprint` in this environment — the PDF is produced by the
pre-installed Chromium via Playwright. From the repo root:

```bash
node - "$PWD/ebook/focus-blueprint.html" "$PWD/ebook/focus-blueprint.pdf" <<'JS'
import pw from '/opt/node22/lib/node_modules/playwright/index.js';
import { pathToFileURL } from 'url';
const [src, out] = process.argv.slice(2);
const b = await pw.chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await b.newPage();
await p.goto(pathToFileURL(src).href, { waitUntil: 'networkidle' });
await p.pdf({ path: out, format: 'Letter', printBackground: true,
             margin: { top: '0', right: '0', bottom: '0', left: '0' } });
await b.close();
JS

# then refresh the product copy the site serves:
cp ebook/focus-blueprint.pdf public/The-Focus-Blueprint.pdf
```

> Page size is controlled by the CSS `@page` rule (US Letter, 8.5×11in). The
> cover is full-bleed via `@page:first { margin:0 }`; all other pages get
> consistent top/bottom margins for breathing room.
