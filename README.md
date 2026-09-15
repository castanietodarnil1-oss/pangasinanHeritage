# Pangasinan Heritage Digital Showcase

A mobile-first, JAMstack-deployable web platform for the Pangasinan
Provincial Tourism Office, built with **Next.js 14 (App Router)** and
**Tailwind CSS**, following **Brad Frost's Atomic Design** methodology.

## Requirements addressed

| Requirement    | How it's addressed                                                                 |
|-----------------|-------------------------------------------------------------------------------------|
| Lightning Fast  | Static export (`output: "export"`), automatic code-splitting, `next/image`         |
| Mobile-First    | Tailwind default breakpoints authored mobile-up; 44px touch targets throughout      |
| Maintainable    | Atomic Design component library + decoupled `/lib/data` content layer              |
| Accessible      | Semantic landmarks, skip link, visible focus states, alt text, WCAG AA color ratios |
| Deployable      | Static export works on Vercel, Netlify, Cloudflare Pages, or any static host        |

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to /out
```

> This project was authored in a sandboxed environment without internet
> access, so `npm install` has not been run here — please run it locally
> before starting the dev server.

## Project structure (Atomic Design)

```
components/
  atoms/        Button, Typography, Icon, Image, tokens (Color Tokens)
  molecules/    HeritageCard, SearchForm, NavigationItem
  organisms/    HeritageGrid, HeaderNavigation
lib/data/       Decoupled content (heritageSites.ts)
app/            Next.js App Router pages, layout, global styles
```

See `/documentation/Atomic-Design-System-Manual.pdf` for full usage
guidance, responsive behavior, and previews of every component.

## Images

`public/images/` already includes an illustrated placeholder photo for each
heritage site (`hundred-islands.jpg`, `bolinao-lighthouse.jpg`,
`balungao-hot-spring.jpg`) so the project runs out of the box. Swap these for
real photography before going live.
