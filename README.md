# Vetrivel Groups — Corporate Website

A production-ready Next.js 15 (App Router) site for Vetrivel Groups, built with TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started

This project's dependencies could not be installed in the build sandbox (no network access),
so please run the following yourself:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## What's included

- **6 pages**: Home, About, Divisions, Gallery, Careers, Contact (`app/`)
- **Working contact form** with client-side validation, server-side sanitization/length
  limits, and a placeholder delivery function in `app/api/contact/route.ts` — see the
  doc-comment in that file for a ready-to-paste Resend integration.
- **Centralized content** in `lib/content.ts` — update company facts, stats, divisions,
  open roles, and contact details in one place.
- **SEO**: per-page metadata, `sitemap.ts`, `robots.ts`, Organization JSON-LD structured
  data, auto-generated favicon/Apple touch icon (`app/icon.tsx`, `app/apple-icon.tsx`),
  and a generated Open Graph share image (`app/opengraph-image.tsx`).
- **PWA basics**: `app/manifest.ts` web app manifest.
- **Error handling**: a root `error.tsx` and per-route `error.tsx` boundaries (one per
  page), plus a `global-error.tsx` that catches failures in the root layout itself, and a
  custom 404 (`not-found.tsx`).
- **Accessibility**: skip-to-content link, visible focus states, semantic landmarks,
  aria-current on nav links, reduced-motion support.
- **Loading states**: route-level `loading.tsx` skeletons for every page.
- **Brand assets**: founder photo and logo were cropped/processed from your uploads and
  live in `public/images/`.
- **`.env.example`**: documents the environment variables you'll need once the contact
  form is wired to a real email provider.

## Before going live — please check

1. **Contact form backend**: currently logs to the server console only. Connect it to an
   actual email/CRM service in `app/api/contact/route.ts` — see the doc-comment there for
   a ready-to-paste Resend example.

2. **Domain**: `lib/content.ts` → `site.url` is set to `https://www.vetrivelgroups.in` —
   update if your actual domain differs, since it's used in metadata, sitemap, and JSON-LD.

3. **This was not compiled in the sandbox** (no network access to install packages). I did
   a thorough manual review of every file for import correctness, type safety, and Next.js
   App Router conventions, but please run `npm install && npm run build` yourself as a final
   check before deploying.

Resolved from earlier review:
- **Careers email** — confirmed as `vetrivelgroups.in`; already set correctly throughout.
- **"Trusted By" client logos** — the homepage now shows real client logos (Anabond,
  Billroth Hospitals, Kauvery Hospital, Ravel, Skill-Lync) in
  `components/sections/WhyChooseUs.tsx`, sourced from `lib/content.ts` → `trustedClients`,
  with logo files in `public/images/clients/`. Add or swap clients by editing that array
  and dropping a new logo file in the same folder.

## Project structure

```
app/                  Routes (App Router)
  about/              about page (page.tsx, loading.tsx, error.tsx)
  divisions/          divisions page
  gallery/            gallery page
  careers/            careers page
  contact/            contact page + API route
  layout.tsx          root layout, fonts, metadata, JSON-LD
  page.tsx            home page
  loading.tsx / error.tsx / global-error.tsx / not-found.tsx
  icon.tsx / apple-icon.tsx / opengraph-image.tsx   generated brand icons & share image
  sitemap.ts / robots.ts / manifest.ts
components/
  layout/             Header, Footer
  sections/           page-section components (Hero, Stats, CTABanner, etc.)
  divisions/          DivisionCard
  ui/                 Button, Logo, Reveal (motion wrapper), PageHero, GalleryCard
lib/
  content.ts          all site copy and structured data
  icons.ts             lucide-react icon name → component map
public/images/        logo + founder photo assets
public/images/clients/ real client logos shown in the "Trusted By" strip
.env.example           env vars needed once the contact form is wired to a real provider
```
