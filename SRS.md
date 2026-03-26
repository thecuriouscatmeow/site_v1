# SRS — Portfolio Website v1
**Subject:** Saahil Basak — Personal Portfolio Website
**Version:** 1.0
**Date:** 2026-03-13
**Status:** Authoritative specification for site_v1 build

---

## 1. Project Overview

A narrative-driven personal portfolio website for Saahil Basak, a backend and systems engineer. The site functions as an editorial landing experience — not a resume replacement. It tells a concise story about who the engineer is and what kinds of systems they build, leaving the visitor with a clear impression and a reason to reach out.

The site is **not** a full-stack showcase of technologies. It is a positioning document for a specific audience.

---

## 2. Target Audience

### Primary
- Startup founders
- CTOs and technical co-founders
- Startup engineers hiring peers

### Secondary
- Technical recruiters
- Hiring managers

### Delivery context
Most visitors arrive from LinkedIn messages on **mobile devices** inside the LinkedIn in-app browser (iOS WKWebView or Android WebView). Mobile experience is the primary design target. Desktop is an enhancement.

---

## 3. Positioning

**Engineer identity:**
> Backend and systems engineer who builds production-grade infrastructure — real-time systems, AI pipelines, and technical systems that serve business outcomes — typically as the primary or sole technical owner.

**Tone:** builder mindset · systems thinking · technical seriousness · calm confidence

**Avoid:** marketing language, buzzwords, claims not backed by the content in `portfolio.json`

---

## 4. Design System

All design values live in a single source-of-truth file: `src/design/tokens.ts`.
Components reference token names only — never raw hex values, never font family strings, never pixel values outside the token file.

### 4.1 Color Tokens

| Token Name | Value | Usage |
|---|---|---|
| `color.bg` | `#FAF9F6` | Page background |
| `color.text` | `#111111` | Primary text |
| `color.textMuted` | `#6B6B6B` | Secondary text, labels, metadata |
| `color.accent` | `#007F5F` | Accent — used sparingly (one element per section max) |
| `color.surface` | `#F0EFEB` | Card backgrounds, subtle borders |
| `color.border` | `#E0DED8` | Dividers, card outlines |

**Rule:** These six tokens cover 100% of the color surface. No additional named colors. No inline hex values in components.

### 4.2 Typography Tokens

| Token Name | Value | Usage |
|---|---|---|
| `font.sans` | `'Inter', system-ui, sans-serif` | Body, labels, metadata |
| `font.display` | `'Fraunces', Georgia, serif` | Section headlines only |
| `size.hero` | `clamp(3.5rem, 8vw, 7rem)` | Section 1 name |
| `size.headline` | `clamp(2rem, 5vw, 4rem)` | Evidence section headlines |
| `size.subhead` | `clamp(1.1rem, 2.5vw, 1.5rem)` | Section subtext |
| `size.body` | `1rem` | Body copy |
| `size.label` | `0.75rem` | Tech stack labels, metadata |
| `leading.tight` | `1.1` | Headlines |
| `leading.normal` | `1.6` | Body |
| `tracking.wide` | `0.08em` | Uppercase labels |

### 4.3 Spacing Tokens

| Token Name | Value |
|---|---|
| `space.xs` | `0.5rem` |
| `space.sm` | `1rem` |
| `space.md` | `2rem` |
| `space.lg` | `4rem` |
| `space.xl` | `8rem` |

### 4.4 Motion Tokens

| Token Name | Value | Usage |
|---|---|---|
| `motion.fast` | `150ms ease` | Hover states |
| `motion.base` | `300ms ease` | Standard transitions |
| `motion.slow` | `600ms ease-out` | Entrance animations |

---

## 5. Layout Model

- Each section occupies one viewport height (`100dvh`)
- Scroll snapping: `scroll-snap-type: y mandatory` on the scroll container
- Each section: `scroll-snap-align: start` + `scroll-snap-stop: always`
- `overscroll-behavior-y: contain` on the container (prevents browser navigation interference)
- No JavaScript scroll hijacking
- Sections are full-width, centered content column, max-width `860px` on desktop

---

## 6. Content Architecture

### Source of truth
All content lives in `src/content/index.ts`. Components never contain hardcoded strings. Every visible text string, URL, and label is imported from this file.

### Content file structure
```ts
export const content = {
  personal: { ... },      // name, title, links
  sections: {
    identity: { ... },
    evidence1: { ... },
    philosophy1: { ... },
    evidence2: { ... },
    philosophy2: { ... },
    evidence3: { ... },
    projects: { ... },
    contact: { ... },
  }
}
```

---

## 7. Section Specifications

### Section 1 — Identity

**Purpose:** Establish who this person is within 3 seconds.

**Layout:** Vertically and horizontally centered. Name large. Title below. Subtext below that.

**Content:**
```
[HERO] Saahil Basak
[TITLE] Backend & Systems Engineer
[SUBTEXT] I build systems that survive real users —
           from real-time infrastructure to AI pipelines
           to production backends.
[SCROLL HINT] small downward arrow, animated gently
```

**Visual gesture:** Minimal — a single thin horizontal rule (1px, `color.border`) between name and title, or none. No illustration.

---

### Section 2 — Evidence: EdTech Platform (Medjeex)

**Purpose:** First credibility anchor. Largest scope project — full product built by one engineer.

**Layout:** Left-aligned text block, headline large, stats as a metadata line, body concise, tech stack as pills below.

**Content:**
```
[LABEL] Medjeex Edutech · Delhi, India · Nov 2024 – Nov 2025
[HEADLINE] Built an edtech platform from scratch.
[STATS] 30+ screens · 1,000 concurrent users · sub-180ms API responses
[BODY] Full-stack product owned entirely by one engineer — authentication,
       test engine, AI tutoring, live class system, behavioral analytics,
       and community platform — deployed within AWS free-tier constraints.
[TECH] Node.js · React · MongoDB · LangChain · Google AI · AWS
```

**Visual gesture:** A single vertical accent line (2px, `color.accent`) on the left edge of the text block.

---

### Section 3 — Philosophy 1

**Purpose:** After evidence, articulate the underlying principle.

**Layout:** Centered, single large sentence. No metadata.

**Content:**
```
[QUOTE] I design systems under real constraints —
        not ideal infrastructure, but production-grade
        results with what's actually available.
```

**Visual gesture:** None. White space is the design.

---

### Section 4 — Evidence: Trading Data Pipeline

**Purpose:** Second credibility anchor. Most technically exotic — hedge fund, live market data.

**Layout:** Same as Section 2 (left-aligned, metadata, headline, body, tech pills).

**Content:**
```
[LABEL] Freelance · Hedge Fund · NSE Futures Trading System
[HEADLINE] Engineered a live market data pipeline.
[STATS] Millions of market ticks · zero data loss under sustained load
[BODY] A Python WebSocket-to-TCP bridge delivering live NSE futures into
       a MATLAB trading system — decoupled, binary-serialized, and
       sub-millisecond accessible via in-memory O(1) snapshot reads.
[TECH] Python · WebSockets · TCP/IP · MessagePack · MATLAB
```

**Visual gesture:** Same vertical accent line as Section 2 — consistent across all evidence sections.

---

### Section 5 — Philosophy 2

**Purpose:** Deepen the engineering mindset narrative.

**Layout:** Centered, single sentence. Slightly different from Section 3 to avoid repetition — consider right-aligned or slightly smaller.

**Content:**
```
[QUOTE] Reliability is a design choice.
        I build systems that are predictable
        when it matters most.
```

**Visual gesture:** None.

---

### Section 6 — Evidence: Ayla Voice Chat

**Purpose:** Third credibility anchor. Demonstrates ability to take ownership of broken systems under pressure.

**Layout:** Same as Sections 2 and 4.

**Content:**
```
[LABEL] Ayla Voice Chat · Remote · Sep 2025 – Dec 2025
[HEADLINE] Inherited a broken production backend.
           Fixed it in one month.
[BODY] Took ownership of a fragmented, undocumented Node.js backend
       for a social voice app. Re-architected into feature-scoped modules,
       stabilized real-time voice rooms with race-condition-free event handling,
       and shipped production-ready code — without touching production data.
[TECH] Node.js · MongoDB · Event-Driven Architecture · Agenda · AWS
```

**Visual gesture:** Same vertical accent line.

---

### Section 7 — Projects Overview

**Purpose:** Full inventory of selected work. Not a repeat of the evidence sections — this is the "table of contents" moment where the visitor sees the breadth.

**Layout:** Grid of compact cards — 2 columns desktop, 1 column mobile. Each card: project name, one sentence, tech stack.

**Cards (5 total):**

| Project | One-liner | Tech |
|---|---|---|
| Medjeex Edtech Platform | AI-powered edtech platform built from scratch — full product, full stack, solo. | Node.js, React, MongoDB, LangChain |
| Market Data Pipeline | Live NSE futures feed into a MATLAB trading system via a WebSocket-to-TCP bridge. | Python, WebSockets, MessagePack |
| Ayla Voice Chat Backend | Stabilized and re-architected a broken production backend for a social voice app. | Node.js, Event-Driven, MongoDB |
| ECOWELL Digital Systems | Built the complete digital infrastructure for a multi-brand commerce group — performance, analytics, and internal tooling. | React, Shopify, Google Analytics |
| Curriculum Analytics | Data analytics pipeline to identify historical CBSE exam patterns and topic recurrence. | Python, SQLite, Pandas |

**Visual gesture:** Card borders using `color.border`, `color.surface` card background.

---

### Section 8 — Contact

**Purpose:** Clear, low-friction call to action.

**Layout:** Centered. Single statement. Contact links below as clean text links (not buttons).

**Content:**
```
[HEADLINE] If you're building something real,
           let's talk.
[LINKS]
  saahilbasak@gmail.com
  linkedin.com/in/saahilbasak
  github.com/thecuriouscatmeow
  Full resume →   [links to /resume PDF]
```

**Visual gesture:** None. Clean close.

---

## 8. Navigation

No top navigation bar. The scroll itself is the navigation. An optional minimal fixed indicator (8 dots on the right side, one per section, active dot highlighted) is acceptable but not required in v1.

---

## 9. Resume PDF

A PDF of the resume should be placed at `public/resume.pdf`. The contact section links to `/resume.pdf`. Generating this PDF is outside the scope of the website build — placeholder link is acceptable in v1.

---

## 10. Meta / Open Graph

Required for every deployment:

```html
<title>Saahil Basak — Backend & Systems Engineer</title>
<meta name="description" content="Backend and systems engineer. I build real-time infrastructure, AI pipelines, and production backends." />
<meta property="og:title" content="Saahil Basak — Backend & Systems Engineer" />
<meta property="og:description" content="Backend and systems engineer. I build real-time infrastructure, AI pipelines, and production backends." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://[domain]" />
<meta name="twitter:card" content="summary_large_image" />
```

OG image: 1200×630px, off-white background, name in display font, title in sans. Generated statically.

---

## 11. Performance Requirements

| Metric | Target |
|---|---|
| LCP | < 1.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |
| Bundle size (JS) | < 150kb gzipped |
| Fonts | Preloaded, subset, display:swap |
| Images | None in v1 (typography-only) |

---

## 12. Technical Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSG, OG support, Vercel deploy |
| Styling | TailwindCSS v3 | Utility classes, no runtime overhead |
| Design tokens | `src/design/tokens.ts` + Tailwind config | Single source of truth |
| Content | `src/content/index.ts` | Single source of truth |
| Fonts | Google Fonts (Inter + Fraunces) | Free, subset-able |
| Deployment | Vercel | Zero-config Next.js |
| Analytics | None in v1 | Phase 5 |

---

## 13. File Structure

```
site_v1/
├── SRS.md                    ← This document (authoritative spec)
├── PLAN.md                   ← Phase-by-phase implementation plan
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── resume.pdf            ← Placeholder or real PDF
│   └── og-image.png          ← OG image (1200×630)
└── src/
    ├── design/
    │   └── tokens.ts         ← ALL design tokens (colors, type, spacing, motion)
    ├── content/
    │   └── index.ts          ← ALL visible text and link content
    ├── app/
    │   ├── layout.tsx        ← Root layout (meta, fonts, body class)
    │   ├── page.tsx          ← Scroll container + section orchestration
    │   └── globals.css       ← CSS custom properties from tokens, base resets
    └── components/
        ├── sections/
        │   ├── Identity.tsx
        │   ├── EvidenceMedjeex.tsx
        │   ├── Philosophy1.tsx
        │   ├── EvidenceTrading.tsx
        │   ├── Philosophy2.tsx
        │   ├── EvidenceAyla.tsx
        │   ├── Projects.tsx
        │   └── Contact.tsx
        └── ui/
            ├── TechPill.tsx       ← Reusable tech stack label
            ├── AccentLine.tsx     ← Left vertical accent line for evidence sections
            ├── ProjectCard.tsx    ← Card component for Section 7
            └── ScrollHint.tsx    ← Animated down arrow for Section 1
```

---

## 14. Content Not in Scope for v1

- Blog / writing section
- Case study deep-dives
- Dark mode
- Animations beyond scroll snap and subtle entrance fades
- Contact form (links only)
- Analytics
- i18n
