# Blackburn Realty Group

> Florida's front door to the world. A division of The Keyes Company.
> 50 languages. 1 standard. 1 team.

This is the production website for [Blackburn Realty Group](https://blackburnrealtygroup.com), built with [Astro](https://astro.build) and deployed via [Vercel](https://vercel.com).

---

## 🏗️ Architecture

The site uses a component-based architecture where the header, footer, and shared styles are defined **once** and used everywhere automatically.

```
blackburn-realty-group/
├── src/
│   ├── components/        ← Reusable components
│   │   ├── Nav.astro      ← Header (edit once, applies to ALL pages)
│   │   ├── Footer.astro   ← Footer (edit once, applies to ALL pages)
│   │   ├── CTAStrip.astro ← Reusable bottom CTA
│   │   └── Breadcrumb.astro
│   ├── layouts/
│   │   └── BaseLayout.astro  ← Wraps every page with Nav + content + Footer
│   ├── pages/             ← One file = one page on the site
│   │   ├── index.astro    ← /
│   │   ├── about.astro    ← /about/
│   │   ├── keyes.astro    ← /keyes/
│   │   ├── contact.astro  ← /contact/
│   │   ├── ladies.astro   ← /ladies/
│   │   ├── guys.astro     ← /guys/
│   │   ├── agents/        ← /agents/...
│   │   ├── tools/         ← /tools/...
│   │   ├── diy/           ← /diy/...
│   │   └── blog/          ← /blog/...
│   ├── styles/
│   │   └── global.css     ← Brand colors, fonts, buttons, footer — edit once
│   └── data/              ← JSON data files (agents, etc.)
├── public/                ← Static assets served as-is
│   ├── pdfs/              ← The 4 DIY guide PDFs
│   └── images/            ← Logo, favicon, etc.
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### To change the header menu

Open `src/components/Nav.astro`, edit, save. Run `npm run build`. Every page on the site gets the new menu.

### To change the footer

Open `src/components/Footer.astro`. Same drill.

### To change brand colors, fonts, or button styles

Open `src/styles/global.css`. All CSS variables are at the top in the `:root` block.

---

## 🚀 Local Development

```bash
# Install dependencies (one-time)
npm install

# Run the local dev server
npm run dev
# → opens at http://localhost:4321

# Build the production static site
npm run build
# → outputs to ./dist/

# Preview the production build locally
npm run preview
```

---

## 📦 Deploy to Vercel

This project is configured for automatic Vercel deployment via GitHub.

### First-time setup

1. Push this repo to GitHub:
   ```bash
   git remote add origin https://github.com/stairwaymortgage/blackburn-realty-group.git
   git branch -M main
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Click **"Add New" → "Project"**
4. Select **stairwaymortgage/blackburn-realty-group** from the GitHub list
5. Vercel auto-detects Astro. Just click **Deploy**.
6. After the first deploy succeeds, go to **Settings → Domains** and add `blackburnrealtygroup.com`

### Ongoing changes

```bash
git add .
git commit -m "Update homepage hero"
git push
```

That's it. Vercel rebuilds and publishes automatically within ~90 seconds of every push to `main`.

---

## 📝 Adding New Pages

To add a new page (e.g. `/news/` or `/agents/maria-garcia/`):

1. Create a new file in `src/pages/`. The path becomes the URL:
   - `src/pages/news.astro` → `/news/`
   - `src/pages/agents/maria-garcia.astro` → `/agents/maria-garcia/`

2. Use this template:
   ```astro
   ---
   import BaseLayout from '../layouts/BaseLayout.astro';
   ---
   <BaseLayout title="Page Title" description="Page description for SEO">
     <!-- Your page content here -->
     <h1>Hello world</h1>
   </BaseLayout>
   ```

3. Save. The page exists. No router config needed.

---

## 🎨 Brand System

Defined in `src/styles/global.css`. Edit once, propagates everywhere.

| Variable | Color | Used for |
|----------|-------|----------|
| `--black` | `#060606` | Background |
| `--near-black` | `#0c0c0c` | Card backgrounds |
| `--white` | `#ffffff` | Primary text |
| `--silver` | `#e8e8e8` | Secondary text, brand accent (default theme) |
| `--silver-mid` | `#b0b0b0` | Tertiary text |
| `--silver-dark` | `#7a7a7a` | Subtle text |

### Theme colors per section

Pages can set `theme="ladies"` or `theme="guys"` in their `BaseLayout`:

```astro
<BaseLayout title="..." theme="ladies">  <!-- pink theme -->
<BaseLayout title="..." theme="guys">    <!-- turquoise theme -->
```

This swaps `--theme` and `--theme-rgb` automatically.

### Typography

- **Cormorant Garamond** — Serif, used for headlines
- **Barlow Condensed** — Sans-serif, used for uppercase labels and taglines
- **Barlow** — Sans-serif, used for body text

---

## 📄 PDFs

The 4 DIY guide PDFs are in `/public/pdfs/`. They are served at:
- `/pdfs/blackburn-diy-01-sell-your-home.pdf`
- `/pdfs/blackburn-diy-02-improve-your-home.pdf`
- `/pdfs/blackburn-diy-03-buy-without-agent.pdf`
- `/pdfs/blackburn-diy-04-secure-best-financing.pdf`

To wire form submissions to auto-email the matching PDF, configure your GoHighLevel workflow to send a download link to one of these URLs after form submission.

---

## 🌐 Translation

The homepage uses Google Translate widget to translate to 50 languages. The translation script is set to `is:inline` so it's not bundled — this is the correct way to load third-party scripts with Astro.

For the eventual SEO-optimized translated content (250 native-language pages), see the project roadmap. Those will live in `src/pages/[lang]/` and use Astro's [i18n routing](https://docs.astro.build/en/recipes/i18n/).

---

## 🤝 Need to make a change?

| What | Where |
|------|-------|
| Header menu items | `src/components/Nav.astro` |
| Footer content | `src/components/Footer.astro` |
| Brand colors, fonts | `src/styles/global.css` |
| Homepage content | `src/pages/index.astro` |
| Add a new page | Create file in `src/pages/` |
| PDF guides | `public/pdfs/` |
| Phone number | `src/components/Footer.astro` |
| Email address | `src/components/Footer.astro` |

---

## 📞 Contact

Built and maintained by Blackburn Realty Group.
Founded by Olga Blackburn · Fort Lauderdale, Florida

A division of [The Keyes Company](https://keyes.com) · Est. 1926
