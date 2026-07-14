# Araav Rotella — Portfolio

Multi-page personal portfolio. React + Vite + Tailwind CSS, themed in **Catppuccin Mocha**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Deploy

### Vercel (recommended)
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → framework auto-detects as Vite.
3. Done. `vercel.json` already handles SPA route rewrites (so `/projects` etc. work on refresh).

### GitHub Pages
Client-side routing on GitHub Pages needs one of:
- Easiest: switch `BrowserRouter` → `HashRouter` in `src/main.jsx` (URLs become `/#/projects`), or
- Keep clean URLs: add a `404.html` redirect trick and set `base` in `vite.config.js` to `/<repo-name>/`.

Vercel is the smoother path — clean URLs with zero extra config.

## Editing content

All content lives in `src/data/` — no component edits needed:

| File | Contains |
|---|---|
| `src/data/profile.js` | Name, links, pitch, education, skills |
| `src/data/projects.js` | Project cards (add `live:` URLs when deployed, swap `github:` placeholders) |
| `src/data/experience.js` | Allegis role sections + homepage stat chips |

Replace `public/resume.pdf` whenever the resume updates — the Resume page and download
button pick it up automatically.

### TODOs left for you
- [ ] Tracepaper, AppFill, AI Resume Editor: repos currently link to your GitHub profile — swap in real repo URLs when public.
- [ ] Pocket Vogue: add `live:` URL once the Vercel 404 is fixed.
- [ ] Set `og:url` / `og:image` in `index.html` after you know the final domain.

## Theme

Full Catppuccin Mocha palette is defined in `tailwind.config.js` as first-class Tailwind
colors (`bg-base`, `text-mauve`, `border-surface0`, ...). Accent conventions:

- **Mauve** — primary actions, links
- **Teal** — tech tags
- **Peach** — dates, metrics, highlights
- **Pink / Green / Blue** — per-card accents

Fonts: Space Grotesk (display) · Inter (body) · JetBrains Mono (code/labels), loaded via Google Fonts.
# Personal-Website
