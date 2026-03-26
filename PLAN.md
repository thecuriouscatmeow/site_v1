# Implementation Plan — Portfolio Website v1
**Reference:** SRS.md (read before executing any task)
**Date:** 2026-03-13

---

## How to use this plan

Each task is self-contained. A subagent executing any task needs only:
1. This file (for context on the current task)
2. `SRS.md` (for spec details)
3. The files listed under "Inputs" for that task

Tasks within the same phase that have no inter-dependencies can be parallelized.
Never start a phase before all tasks in the previous phase are marked ✅.

**Task status symbols:** `⬜` not started · `🔄` in progress · `✅` complete · `⏳` blocked

---

## Phase Summary

| Phase | Name | Goal | Token cost |
|---|---|---|---|
| 1 | Project Bootstrap | Working Next.js app, folder structure | Low |
| 2 | Content & Design System | Tokens + content config, Tailwind wired | Low |
| 3 | Skeleton Sections | All 8 sections render with real content, no styling | Medium |
| 4 | Full Styling | Design system applied, sections visually complete | High |
| 5 | Scroll Behavior | Snap scrolling, mobile WebView compatibility | Medium |
| 6 | Polish & Production | OG, meta, fonts, performance, resume link | Medium |

---

## Phase 1 — Project Bootstrap

**Goal:** A working Next.js 14 project at `site_v1/` with correct folder structure. No content yet.

**Completion test:** `npm run dev` serves a blank page at `localhost:3000` with no errors.

---

### Task 1.1 — Initialize Next.js project ⬜

**Inputs:** None
**Outputs:** Full Next.js 14 project scaffolded at `site_v1/`

**Instructions:**
Run the following from `website/`:
```bash
npx create-next-app@latest site_v1 \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*"
```
Then move the `src/` structure to match SRS.md §13.

Create the following empty directories:
- `src/design/`
- `src/content/`
- `src/components/sections/`
- `src/components/ui/`

**Do not** create any component files yet. This task only creates the scaffold.

---

### Task 1.2 — Restructure to match SRS §13 ⬜

**Inputs:** Task 1.1 complete
**Outputs:** Folder structure exactly matches SRS.md §13

**Instructions:**
Verify that `src/` contains: `design/`, `content/`, `app/`, `components/sections/`, `components/ui/`
Verify `public/` exists.
Add a placeholder `public/resume.pdf` (empty file is fine).
Create `public/og-image.png` placeholder (any 1200×630 image; will be replaced in Phase 6).
Remove the default Next.js boilerplate from `src/app/page.tsx` — replace with a single `<main>` that renders the text "site_v1" and nothing else.
Verify `npm run build` passes.

---

## Phase 2 — Content & Design System

**Goal:** All design tokens and all content strings defined in their canonical locations. Tailwind configured to use the token values. No components yet — just the data layer.

**Completion test:** Importing from `src/design/tokens.ts` and `src/content/index.ts` resolves without errors.

Tasks 2.1 and 2.2 are independent — they can run in parallel.

---

### Task 2.1 — Design tokens file ⬜

**Inputs:** SRS.md §4
**Outputs:** `src/design/tokens.ts`

**Instructions:**
Create `src/design/tokens.ts` exporting a single `tokens` object with the exact structure below.
These values are the single source of truth for all visual styling.
No component may reference a raw hex value or raw font string — only these token keys.

```ts
export const tokens = {
  color: {
    bg:          '#FAF9F6',
    text:        '#111111',
    textMuted:   '#6B6B6B',
    accent:      '#007F5F',
    surface:     '#F0EFEB',
    border:      '#E0DED8',
  },
  font: {
    sans:    "'Inter', system-ui, sans-serif",
    display: "'Fraunces', Georgia, serif",
  },
  size: {
    hero:     'clamp(3.5rem, 8vw, 7rem)',
    headline: 'clamp(2rem, 5vw, 4rem)',
    subhead:  'clamp(1.1rem, 2.5vw, 1.5rem)',
    body:     '1rem',
    label:    '0.75rem',
  },
  leading: {
    tight:  1.1,
    normal: 1.6,
  },
  tracking: {
    wide: '0.08em',
  },
  space: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  motion: {
    fast: '150ms ease',
    base: '300ms ease',
    slow: '600ms ease-out',
  },
} as const;

export type Tokens = typeof tokens;
```

---

### Task 2.2 — Tailwind config wired to tokens ⬜

**Inputs:** Task 2.1 complete, `tailwind.config.ts`
**Outputs:** Updated `tailwind.config.ts`, updated `src/app/globals.css`

**Instructions:**
Update `tailwind.config.ts` to extend the default theme with values from `tokens`.
Import `tokens` from `src/design/tokens.ts` at the top of `tailwind.config.ts`.
Map token values to Tailwind theme extensions so that Tailwind classes like `bg-bg`, `text-text`, `text-muted`, `text-accent`, `bg-surface`, `border-border` work.
Also map font families: `font-sans` → `tokens.font.sans`, `font-display` → `tokens.font.display`.

In `src/app/globals.css`:
- Set `background-color` on `html` to `tokens.color.bg`
- Set `color` on `body` to `tokens.color.text`
- Set `font-family` on `body` to `tokens.font.sans`
- Define CSS custom properties for every token (e.g. `--color-bg: #FAF9F6`) for use in any non-Tailwind CSS
- Add base scroll container styles (see Phase 5 for scroll snap — just the font/color base here)

---

### Task 2.3 — Content config file ⬜

**Inputs:** SRS.md §7
**Outputs:** `src/content/index.ts`

**Instructions:**
Create `src/content/index.ts` with the full content for all 8 sections, exactly as specified in SRS.md §7.
Structure:

```ts
export const content = {
  personal: {
    name: 'Saahil Basak',
    title: 'Backend & Systems Engineer',
    email: 'saahilbasak@gmail.com',
    linkedin: 'https://www.linkedin.com/in/saahilbasak',
    linkedinDisplay: 'linkedin.com/in/saahilbasak',
    github: 'https://github.com/thecuriouscatmeow',
    githubDisplay: 'github.com/thecuriouscatmeow',
    resumeUrl: '/resume.pdf',
  },
  sections: {
    identity: {
      headline: 'Saahil Basak',
      title: 'Backend & Systems Engineer',
      subtext: 'I build systems that survive real users — from real-time infrastructure to AI pipelines to production backends.',
    },
    evidence1: {
      label: 'Medjeex Edutech · Delhi, India · Nov 2024 – Nov 2025',
      headline: 'Built an edtech platform from scratch.',
      stats: ['30+ screens', '1,000 concurrent users', 'sub-180ms API responses'],
      body: 'Full-stack product owned entirely by one engineer — authentication, test engine, AI tutoring, live class system, behavioral analytics, and community platform — deployed within AWS free-tier constraints.',
      tech: ['Node.js', 'React', 'MongoDB', 'LangChain', 'Google AI', 'AWS'],
    },
    philosophy1: {
      quote: 'I design systems under real constraints — not ideal infrastructure, but production-grade results with what\'s actually available.',
    },
    evidence2: {
      label: 'Freelance · Hedge Fund · NSE Futures Trading System',
      headline: 'Engineered a live market data pipeline.',
      stats: ['Millions of market ticks', 'Zero data loss under sustained load'],
      body: 'A Python WebSocket-to-TCP bridge delivering live NSE futures into a MATLAB trading system — decoupled, binary-serialized, and sub-millisecond accessible via in-memory O(1) snapshot reads.',
      tech: ['Python', 'WebSockets', 'TCP/IP', 'MessagePack', 'MATLAB'],
    },
    philosophy2: {
      quote: 'Reliability is a design choice. I build systems that are predictable when it matters most.',
    },
    evidence3: {
      label: 'Ayla Voice Chat · Remote · Sep 2025 – Dec 2025',
      headline: 'Inherited a broken production backend. Fixed it in one month.',
      body: 'Took ownership of a fragmented, undocumented Node.js backend for a social voice app. Re-architected into feature-scoped modules, stabilized real-time voice rooms with race-condition-free event handling, and shipped production-ready code — without touching production data.',
      tech: ['Node.js', 'MongoDB', 'Event-Driven Architecture', 'Agenda', 'AWS'],
    },
    projects: {
      sectionLabel: 'Selected Work',
      items: [
        {
          id: 'medjeex',
          name: 'Medjeex Edtech Platform',
          description: 'AI-powered edtech platform built from scratch — full product, full stack, solo.',
          tech: ['Node.js', 'React', 'MongoDB', 'LangChain'],
          url: 'https://medjeex.com/',
        },
        {
          id: 'trading',
          name: 'Market Data Pipeline',
          description: 'Live NSE futures feed into a MATLAB trading system via a WebSocket-to-TCP bridge.',
          tech: ['Python', 'WebSockets', 'MessagePack'],
          url: null,
        },
        {
          id: 'ayla',
          name: 'Ayla Voice Chat Backend',
          description: 'Stabilized and re-architected a broken production backend for a social voice app.',
          tech: ['Node.js', 'Event-Driven', 'MongoDB'],
          url: 'https://play.google.com/store/apps/details?id=com.aylavoice.chatapp&hl=en_IN',
        },
        {
          id: 'ecowell',
          name: 'ECOWELL Digital Infrastructure',
          description: 'Built the complete digital infrastructure for a multi-brand commerce group — performance engineering, analytics systems, and internal tooling.',
          tech: ['React', 'Shopify', 'Google Analytics'],
          url: 'https://www.ecowellonline.com/',
        },
        {
          id: 'curriculum',
          name: 'Curriculum Analytics Pipeline',
          description: 'Data analytics pipeline identifying historical CBSE exam patterns and topic recurrence across years.',
          tech: ['Python', 'SQLite', 'Pandas'],
          url: null,
        },
      ],
    },
    contact: {
      headline: "If you're building something real, let's talk.",
    },
  },
} as const;
```

---

## Phase 3 — Skeleton Sections

**Goal:** All 8 sections render with real content. No color, no typography styling — just layout, positioning, and content visible. This phase validates that the content config is wired correctly and the scroll structure works.

**Completion test:** Scroll through all 8 sections, every piece of text from `content/index.ts` is visible on screen in the correct position.

All section tasks in this phase are independent and can run in parallel after Phase 2 completes.

---

### Task 3.1 — Scroll container and page layout ⬜

**Inputs:** SRS.md §5, `src/app/page.tsx`
**Outputs:** Updated `src/app/page.tsx`, `src/app/layout.tsx`

**Instructions:**
`src/app/page.tsx`: Create the scroll container — a full-viewport `<div>` with `overflow-y: scroll` and `scroll-snap-type: y mandatory`. Each section component is a direct child. Import and render all 8 section components (they can be empty stubs for now).

`src/app/layout.tsx`: Set up Google Fonts (Inter + Fraunces), HTML meta charset/viewport, and the root body styles. Reference `src/design/tokens.ts` for font family values. Do not hardcode font names.

The `<html>` element must have `lang="en"`.

---

### Task 3.2 — Identity section skeleton ⬜

**Inputs:** SRS.md §7 Section 1, `src/content/index.ts`
**Outputs:** `src/components/sections/Identity.tsx`

**Instructions:**
Renders a full-viewport section (`100dvh`) with `scroll-snap-align: start`.
Content: headline (name), title, subtext, scroll hint arrow — all pulled from `content.sections.identity`.
No styling — use only structural HTML with minimal layout classes to position content center-screen.
The scroll hint arrow can be a simple `↓` character for now.

---

### Task 3.3 — Evidence section component (reusable) ⬜

**Inputs:** SRS.md §7 Sections 2, 4, 6, `src/content/index.ts`
**Outputs:** `src/components/sections/EvidenceSection.tsx`

**Instructions:**
Create a single reusable `EvidenceSection` component that accepts props:
```ts
interface EvidenceSectionProps {
  label: string;
  headline: string;
  stats?: string[];
  body: string;
  tech: string[];
}
```
It renders: label, headline, stats (inline), body, tech stack as a list.
All text comes from props — the parent page passes `content.sections.evidence1`, `.evidence2`, `.evidence3`.
No styling — structural layout only.

---

### Task 3.4 — Philosophy section component (reusable) ⬜

**Inputs:** SRS.md §7 Sections 3, 5, `src/content/index.ts`
**Outputs:** `src/components/sections/PhilosophySection.tsx`

**Instructions:**
Create a single reusable `PhilosophySection` component accepting:
```ts
interface PhilosophySectionProps {
  quote: string;
}
```
Renders the quote text centered. No styling — structural only.

---

### Task 3.5 — Projects section skeleton ⬜

**Inputs:** SRS.md §7 Section 7, `src/content/index.ts`
**Outputs:** `src/components/sections/Projects.tsx`, `src/components/ui/ProjectCard.tsx`

**Instructions:**
`ProjectCard.tsx`: Renders a card with project name, description, tech list, and optional URL link. Accepts typed props derived from `content.sections.projects.items[number]`.
`Projects.tsx`: Full-viewport section rendering the section label and a grid of `ProjectCard` components, one per item in `content.sections.projects.items`.
No styling — structural only.

---

### Task 3.6 — Contact section skeleton ⬜

**Inputs:** SRS.md §7 Section 8, `src/content/index.ts`
**Outputs:** `src/components/sections/Contact.tsx`

**Instructions:**
Full-viewport section. Renders headline from `content.sections.contact.headline`.
Below the headline: email (mailto link), LinkedIn link, GitHub link, resume download link.
All URLs and display text from `content.personal`.
No styling — structural only.

---

## Phase 4 — Full Styling

**Goal:** Design system fully applied. Each section looks as specified in SRS.md §7. Typography, color, spacing — all sourced from `tokens.ts` via Tailwind classes.

**Completion test:** Visual review of all 8 sections. Every color matches the palette. Typography scale is correct. Spacing feels editorial and intentional.

**Important rule:** All styling uses Tailwind classes that map to token values (set up in Phase 2). No raw hex values in components. No arbitrary Tailwind values (no `text-[#111111]`) — only named token classes.

---

### Task 4.1 — Style: Identity section ⬜

**Inputs:** SRS.md §4, §7 Section 1, `src/design/tokens.ts`, `src/components/sections/Identity.tsx`
**Outputs:** Updated `Identity.tsx`

**Instructions:**
- Background: `color.bg`
- Name: `font.display`, `size.hero`, `leading.tight`, `color.text`
- Title: `font.sans`, `size.subhead`, `color.textMuted`, uppercase, `tracking.wide`
- Subtext: `font.sans`, `size.body`, `color.text`, `leading.normal`, max-width ~520px
- Layout: vertically and horizontally centered
- Visual: a 1px horizontal rule in `color.border` between name and title
- Scroll hint: small `↓` arrow in `color.textMuted`, subtle CSS `translateY` animation (up-down, 1.5s loop)

---

### Task 4.2 — Style: Evidence sections ⬜

**Inputs:** SRS.md §4, §7 Sections 2/4/6, `src/design/tokens.ts`, `src/components/sections/EvidenceSection.tsx`
**Outputs:** Updated `EvidenceSection.tsx`, `src/components/ui/TechPill.tsx`, `src/components/ui/AccentLine.tsx`

**Instructions:**
`AccentLine.tsx`: A 2px × 48px vertical bar in `color.accent`. Positioned to the left of the text block.
`TechPill.tsx`: A small chip — `color.surface` background, `color.border` border, `font.sans`, `size.label`, `color.textMuted` text, `tracking.wide` uppercase.

`EvidenceSection.tsx` styling:
- Background: `color.bg`
- Left-aligned text block with `AccentLine` on the left
- Label: `size.label`, `color.textMuted`, `tracking.wide`, uppercase, `font.sans`
- Headline: `font.display`, `size.headline`, `leading.tight`, `color.text`
- Stats: inline separated by `·`, `size.label`, `color.textMuted`
- Body: `size.body`, `leading.normal`, `color.text`, max-width ~600px
- Tech stack: row of `TechPill` components
- Vertical centering: section content centered vertically in viewport

---

### Task 4.3 — Style: Philosophy sections ⬜

**Inputs:** SRS.md §4, §7 Sections 3/5, `src/design/tokens.ts`, `src/components/sections/PhilosophySection.tsx`
**Outputs:** Updated `PhilosophySection.tsx`

**Instructions:**
- Background: `color.bg`
- Quote: `font.display`, `size.headline`, `leading.tight`, `color.text`, centered
- Max-width: ~700px, centered horizontally
- Vertically centered in viewport
- No other elements

---

### Task 4.4 — Style: Projects section ⬜

**Inputs:** SRS.md §4, §7 Section 7, `src/design/tokens.ts`, `src/components/sections/Projects.tsx`, `src/components/ui/ProjectCard.tsx`
**Outputs:** Updated `Projects.tsx`, updated `ProjectCard.tsx`

**Instructions:**
`ProjectCard.tsx`:
- Background: `color.surface`
- Border: 1px `color.border`
- Padding: `space.md`
- Project name: `font.display`, `size.subhead`, `color.text`, `leading.tight`
- Description: `font.sans`, `size.body`, `color.textMuted`, `leading.normal`
- Tech: row of `TechPill` components
- If `url` is not null: project name links to URL, subtle `color.accent` underline on hover

`Projects.tsx`:
- Section label: `size.label`, `color.textMuted`, uppercase, `tracking.wide`
- Grid: 2 columns on desktop, 1 column on mobile, `gap: space.md`
- Section is taller than one viewport if needed — can scroll within it — but snap aligns to top

---

### Task 4.5 — Style: Contact section ⬜

**Inputs:** SRS.md §4, §7 Section 8, `src/design/tokens.ts`, `src/components/sections/Contact.tsx`
**Outputs:** Updated `Contact.tsx`

**Instructions:**
- Background: `color.bg`
- Headline: `font.display`, `size.headline`, `leading.tight`, `color.text`, centered
- Links: `font.sans`, `size.body`, `color.text`, `leading.normal`, centered, stacked vertically with `space.sm` gap
- Link hover: `color.accent` color, `motion.fast` transition
- "Full resume →" link: slightly different treatment — `color.accent` color at rest, bold

---

## Phase 5 — Scroll Behavior & Mobile

**Goal:** Scroll snapping works correctly on desktop and inside mobile WebViews (LinkedIn iOS/Android). Mobile layout is verified.

**Completion test:** Open site on an iPhone (or simulator) inside the LinkedIn app. All 8 sections snap correctly. No layout overflow. Text is readable without zooming.

---

### Task 5.1 — Scroll snap implementation ⬜

**Inputs:** SRS.md §5, `src/app/page.tsx`, `src/app/globals.css`
**Outputs:** Updated `page.tsx`, updated `globals.css`

**Instructions:**
Scroll container (the wrapper div in `page.tsx`):
```css
height: 100dvh;
overflow-y: scroll;
scroll-snap-type: y mandatory;
overscroll-behavior-y: contain;
-webkit-overflow-scrolling: touch;  /* iOS momentum scrolling */
```

Each section:
```css
height: 100dvh;
scroll-snap-align: start;
scroll-snap-stop: always;
```

Exception: Projects section (Section 7) — if its content exceeds one viewport, set `scroll-snap-align: start` only, remove `scroll-snap-stop: always` so the user can scroll through the cards within the section. Add `min-height: 100dvh` instead of fixed height.

**Test specifically:**
- Chrome desktop
- Safari iOS (WKWebView)
- LinkedIn in-app browser on iOS

---

### Task 5.2 — Mobile layout verification and fixes ⬜

**Inputs:** SRS.md §2, all section components
**Outputs:** Updated section components and `globals.css` as needed

**Instructions:**
Test all sections at 390px width (iPhone 14 viewport).

Check each section:
- [ ] No horizontal overflow
- [ ] Text is readable (min font size 16px for body)
- [ ] Headlines do not overflow their containers (use `overflow-wrap: break-word`)
- [ ] Tech pills wrap correctly and don't create horizontal scroll
- [ ] Vertical centering works (content not clipped at top or bottom)
- [ ] Contact links are tappable (min touch target 44px height)

Apply fixes directly. Document any deviations from desktop layout in a comment in the component.

---

## Phase 6 — Production Polish

**Goal:** Site is ready to deploy. Meta tags, fonts, performance, resume PDF linked.

**Completion test:** Lighthouse score ≥ 90 on mobile. OG tags render correctly in a link preview. No console errors.

Tasks 6.1, 6.2, 6.3 can run in parallel after Phase 5 completes.

---

### Task 6.1 — Meta tags and OG image ⬜

**Inputs:** SRS.md §10, `src/app/layout.tsx`
**Outputs:** Updated `layout.tsx`, `public/og-image.png`

**Instructions:**
In `src/app/layout.tsx`, export a `metadata` object (Next.js App Router convention):
```ts
export const metadata: Metadata = {
  title: 'Saahil Basak — Backend & Systems Engineer',
  description: 'Backend and systems engineer. I build real-time infrastructure, AI pipelines, and production backends.',
  openGraph: {
    title: 'Saahil Basak — Backend & Systems Engineer',
    description: 'Backend and systems engineer. I build real-time infrastructure, AI pipelines, and production backends.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};
```

For `og-image.png`: create a 1200×630 image. Off-white background (`#FAF9F6`). Name "Saahil Basak" in large serif. "Backend & Systems Engineer" in small sans below. No other elements. Can be generated with any tool or hand-crafted — place at `public/og-image.png`.

---

### Task 6.2 — Font optimization ⬜

**Inputs:** `src/app/layout.tsx`
**Outputs:** Updated `layout.tsx`

**Instructions:**
Use `next/font/google` to load Inter and Fraunces.
```ts
import { Inter, Fraunces } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });
const fraunces = Fraunces({ subsets: ['latin'], display: 'swap', variable: '--font-display' });
```
Apply CSS variables to `<html>` className.
Update `tailwind.config.ts` to use `var(--font-sans)` and `var(--font-display)` instead of string literals.
Verify fonts load with `display: swap` — no invisible text flash.

---

### Task 6.3 — Performance audit and cleanup ⬜

**Inputs:** All source files
**Outputs:** Any files requiring performance fixes

**Instructions:**
- Run `npm run build` — verify zero TypeScript errors, zero ESLint errors
- Check bundle size: `next build` output should show no page JS bundle > 150kb
- Verify no `<img>` tags without `width`/`height` (use `next/image` if any images are added)
- Check `globals.css` for any unused rules
- Verify no unused imports in any component
- Verify all external links have `rel="noopener noreferrer"` and `target="_blank"`
- Add `<link rel="canonical" href="https://[domain]" />` to layout (placeholder URL is fine)

---

## Dependency Graph

```
Phase 1
  1.1 → 1.2

Phase 2 (after Phase 1)
  2.1 ──┐
  2.2 ──┤ (2.2 depends on 2.1)
  2.3 ──┘ (independent)

Phase 3 (after Phase 2)
  3.1, 3.2, 3.3, 3.4, 3.5, 3.6 — all independent, all parallel

Phase 4 (after Phase 3)
  4.1, 4.2, 4.3, 4.4, 4.5 — all independent, all parallel

Phase 5 (after Phase 4)
  5.1 → 5.2

Phase 6 (after Phase 5)
  6.1, 6.2, 6.3 — all independent, all parallel
```

---

## Version notes

This is `site_v1`. Design variations or significant content changes go into `site_v2/` — a sibling directory at the same level. Never modify `site_v1/` files to experiment; always branch into a new version folder.

To start `site_v2`, copy `site_v1/` and modify only `SRS.md` (update design/content decisions), `src/design/tokens.ts` (change token values), and `src/content/index.ts` (update copy). The component architecture should be portable between versions.
