# Salik Groups — Design System

This document is the single source of truth for visual design, tokens, and UI conventions in the Next.js site. It mirrors the **Salik Groups Electronic Services Website** template (`Salik Groups.dc.html`).

## Source template

| Asset | Path |
|-------|------|
| Design HTML | `../Salik Groups Electronic Services Website/Salik Groups.dc.html` |
| Content master | `../Salik Groups Electronic Services Website/content.txt` |

## Tech stack

| Layer | Choice | Version policy |
|-------|--------|----------------|
| Framework | Next.js App Router | 16.x (latest stable) |
| UI | React | 19.x |
| Styling | Tailwind CSS v4 | CSS-first `@theme` tokens |
| Fonts | Sora + Manrope (Google Fonts) | Loaded in `src/app/layout.tsx` |
| Utilities | `clsx` + `tailwind-merge` | `cn()` in `src/lib/cn.ts` |

## Directory map (design-related)

```
web/
├── design.md                          ← this file
├── agents.md                          ← agent workflow & conventions
├── claude.md                          ← Claude-specific pointers
├── src/
│   ├── styles/globals.css             ← CSS variables, animations, Tailwind theme
│   ├── config/site.ts                 ← brand, contact, theme key
│   ├── config/navigation.ts           ← nav + footer links
│   ├── content/                       ← copy & structured data (no styling)
│   ├── types/content.ts               ← shared TypeScript shapes
│   ├── providers/theme-provider.tsx   ← dark/light theme (localStorage)
│   ├── components/
│   │   ├── ui/                        ← reusable primitives
│   │   ├── layout/                    ← chrome: nav, footer, scroll
│   │   ├── sections/                  ← page sections (1:1 with template)
│   │   └── pages/home-page.tsx        ← section composition
```

## Color tokens

Defined in `src/styles/globals.css` as `--sg-*` variables on `:root` / `[data-theme="dark"]` and `[data-theme="light"]`.

### Dark theme (default)

| Token | Hex / value | Usage |
|-------|-------------|--------|
| `--sg-bg` | `#0a1430` | Page background |
| `--sg-surface` | `#0e1b3e` | Cards, hero overlays |
| `--sg-accent` | `#F49F1C` | CTAs, highlights, logo accent |
| `--sg-accent-light` | `#ffce7a` | Scroll progress gradient |
| `--sg-cyan` | `#00A5E0` | Secondary highlight |
| `--sg-success` | `#3DDC84` | Status dot, success states |
| `--sg-text-hi` | `#f3f6fc` | Primary text |
| `--sg-text-mid` | `#aab4cf` | Body copy |
| `--sg-panel` | `rgba(255,255,255,.05)` | Card backgrounds |

### Light theme

Toggle adds `[data-theme="light"]` on `<html>`. Background becomes `#eef1f7`, surface `#ffffff`, text shifts to navy tones (`#0e1b3e`).

## Typography

| Role | Font | Tailwind |
|------|------|----------|
| Body | Manrope | `font-sans` |
| Headings / brand | Sora | `font-display` |

Utility classes:

- `.sg-eyebrow` — 13px uppercase accent label
- `.sg-heading` — display headings
- `.sg-body` — 17px body paragraph

## Layout

| Token | Value |
|-------|-------|
| Max content width | `1240px` (`--spacing-container`) |
| Horizontal padding | `7vw` (`--spacing-section-x`) |
| Section vertical rhythm | `110px` major / `60px` minor |

## Border radius scale

| Class | px |
|-------|-----|
| `rounded-sg-sm` | 11 |
| `rounded-sg-md` | 14 |
| `rounded-sg-lg` | 20 |
| `rounded-sg-xl` | 22 |
| `rounded-sg-2xl` | 28 |
| `rounded-sg-pill` | 40 |

## Motion

| Animation | CSS keyframe | Usage |
|-----------|--------------|--------|
| `animate-sg-float` | `sg-float` | Hero stat pills |
| `animate-sg-marquee` | `sg-marquee` | Trust bar, client logos |
| `animate-sg-spin` | `sg-spin` | Hero globe rings |
| `animate-sg-glow` | `sg-glow` | Hero status dot |

Scroll interactions live in `src/hooks/use-scroll-progress.ts` and `src/components/layout/site-chrome.tsx`.

## Component inventory (maps to template sections)

| Template section | Component |
|------------------|-----------|
| Scroll progress | `layout/scroll-chrome.tsx` |
| Navigation + mobile menu | `layout/site-chrome.tsx` |
| Hero | `sections/hero-section.tsx` + `hero-globe.tsx` |
| Trust marquee | `sections/trust-marquee-section.tsx` |
| About | `sections/about-section.tsx` |
| Services grid | `sections/services-section.tsx` |
| Why us panel | `sections/why-us-section.tsx` |
| Process steps | `sections/process-section.tsx` |
| Projects | `sections/projects-section.tsx` |
| Industries + clients | `sections/industries-section.tsx` |
| Partners | `sections/partners-section.tsx` |
| Contact form | `sections/contact-section.tsx` |
| Footer | `layout/footer.tsx` |

## UI primitives

| Component | File | Purpose |
|-----------|------|---------|
| `Logo` | `ui/logo.tsx` | Brand mark |
| `Button` / `NavCta` | `ui/button.tsx` | Primary, secondary CTAs |
| `SectionHeader` | `ui/section-header.tsx` | Eyebrow + title blocks |
| `Badge`, `PartnerChip`, `ClientPill` | `ui/badge.tsx` | Tags and pills |
| `Reveal` | `ui/reveal.tsx` | Scroll-in animation |
| `TiltCard` | `ui/tilt-card.tsx` | Hover tilt on cards |
| `StatCounter`, `Marquee` | `ui/stat-counter.tsx` | Hero stats + marquees |
| `ServiceIcon` | `ui/icons.tsx` | Service card icons |

## Theme behavior

- Default: **dark**
- Storage key: `sg-theme` (`siteConfig.themeStorageKey`)
- Provider: `src/providers/theme-provider.tsx`
- Attribute: `data-theme="dark" | "light"` on `<html>`

## Content editing

Update copy in `src/content/*.ts` — never hard-code long strings inside section components. Site-wide constants go in `src/config/site.ts`.

## Images

Remote Unsplash URLs are allowed via `next.config.ts` → `images.remotePatterns`. Replace with owned assets in `public/` when available.

## Security

- Run `npm audit` before release; `package.json` includes a PostCSS override (`^8.5.10`) for the transitive advisory in Next.js.
- Do not commit secrets; contact form is client-side demo only until a backend is wired.
