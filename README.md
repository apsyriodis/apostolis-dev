# apostolis.dev

Personal portfolio & professional presence of **Apostolis Syriodis** — Senior Full Stack Developer.

🌐 **Live:** [https://www.apostolis.dev](https://www.apostolis.dev)

---

## About

A fast, minimal, SEO-friendly portfolio built as a static site with Astro. Bilingual (English / Greek) with a language switcher, and a working contact form powered by Resend.

The site is designed as a **central verification point** — a professional link to share with clients from Upwork, Fiverr, Koala, and Partnely.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro](https://astro.build) 5.x (static output) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) v4 |
| **Adapter** | [@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) |
| **Email** | [Resend](https://resend.com) |
| **Hosting** | [Vercel](https://vercel.com) |
| **DNS** | [Cloudflare](https://cloudflare.com) |
| **Fonts** | IBM Plex Mono |

---

## Features

- ⚡ **Static site** — zero JS by default, fast load times
- 🌍 **Bilingual** (EN / EL) with `Astro i18n` and language switcher
- 📱 **Responsive** — mobile-first with hamburger menu
- 📧 **Contact form** — server-side endpoint via Astro API routes + Resend
- 🎨 **Design** — minimalist, professional, teal accent (`#2E7D8F`)
- 🔍 **SEO** — meta tags, OpenGraph image, sitemap, robots.txt
- 📊 **Google Search Console** verified
- 🔒 **Privacy Policy** (EN + EL)
- 📝 **Case study** for Eukairon (flagship SaaS project)

---

## Project Structure

src/
├── components/ # Reusable UI components
│ ├── Header.astro
│ ├── Hero.astro
│ ├── About.astro
│ ├── Projects.astro
│ ├── Experience.astro
│ ├── Certifications.astro
│ ├── Education.astro
│ ├── Contact.astro
│ ├── Footer.astro
│ └── LanguageSwitcher.astro
├── pages/
│ ├── index.astro # English homepage
│ ├── privacy.astro # Privacy Policy (EN)
│ ├── projects/
│ │ └── eukairon.astro # Eukairon case study (EN)
│ ├── el/ # Greek pages
│ │ ├── index.astro
│ │ ├── privacy.astro
│ │ └── projects/
│ │ └── eukairon.astro
│ └── api/
│ └── contact.ts # Contact form endpoint
├── config.ts # English content config
├── config.el.ts # Greek content config
├── i18n.ts # Locale helper
└── styles/
└── global.css

public/ # Static assets
├── og-image.png
├── photo-biography.jpg
├── eukairon-banner.png
├── eukairon-landing.png
├── eukairon-dashboard.png
└── favicon.svg
