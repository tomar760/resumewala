# BanaoCV — AI Resume Builder India

Full redesign completed on `arena/019f74dc-resumewala`. All pages rebuilt: **Home, Templates, Editor, Pricing, Login, Dashboard**.

## What's New

- **6 redesigned pages** — each with unique animated backgrounds
- **Global one-click dark mode** — saved in `localStorage`
- **Env-based config** — AI (`.env`), Auth (`.env`), Payment (`.env`) — only fill keys
- **All links connected** — nav, footer, modals, auth, templates, editor
- **GitHub Pages ready** — `.github/workflows/deploy.yml`

## Quick Start

```bash
# 1. Fill your keys (only these 3 sections need editing)
cp .env.example .env
# Edit .env with your API/auth/payment keys

# 2. Generate runtime config
node scripts/generate-config.js

# 3. Open any page locally
open index.html
```

## Dark Mode

Click the 🌙 / ☀️ toggle in the navbar. Preference is saved to `localStorage` (`banaocv_dark_mode`).

## Page Backgrounds

| Page | Background Style |
|---|---|
| Home (`index.html`) | Deep ocean / brand wave |
| Templates (`templates.html`) | Creative geometric / gold mesh |
| Editor (`editor.html`) | Tech grid / dark matrix |
| Pricing (`pricing.html`) | Gold gradient / premium aura |
| Login (`login.html`) | Soft warm / focused light |
| Dashboard (`dashboard.html`) | Clean professional depth |

## Env Config (Only Fill Keys)

```env
# .env
AI_API_KEY=
AI_API_ENDPOINT=https://api.openai.com/v1/chat/completions
AI_MODEL=gpt-4o-mini
AUTH_PROVIDER=firebase
AUTH_API_KEY=
AUTH_DOMAIN=
AUTH_APP_ID=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
```

Run `node scripts/generate-config.js` to rebuild `assets/js/config.runtime.js`.

## Deployment

Push to the branch and the workflow deploys to GitHub Pages:

```bash
git add .
git commit -m "Full BanaoCV redesign: dark mode, env configs, unique animated backgrounds, all pages connected"
git push origin arena/019f74dc-resumewala
```

Then open the PR from `arena/019f74dc-resumewala` to `main`.

## Pages

- `index.html` — Hero, How It Works, Features, Templates Preview, Reviews, Pricing, FAQ, CTA
- `templates.html` — 50+ template grid with category filters
- `editor.html` — Full resume editor with AI, ATS score, cover letter
- `pricing.html` — Free / Premium / Pro plans
- `login.html` — Auth modal (login / signup)
- `dashboard.html` — User dashboard with saved resumes

## Files Added / Updated

- `.env.example` — template with all env variables
- `.env` — empty keys ready to fill
- `scripts/generate-config.js` — builds runtime config from `.env`
- `assets/js/config.runtime.js` — generated runtime config
- `assets/css/page-backgrounds.css` — unique animated backgrounds per page
- `assets/css/style.css` — dark mode variables and `.dark-mode` class
- `components/nav.js` — added dark mode toggle button
- `assets/js/main.js` — `toggleDarkMode()` + `initDarkMode()`
- `.github/workflows/deploy.yml` — GitHub Pages deployment
