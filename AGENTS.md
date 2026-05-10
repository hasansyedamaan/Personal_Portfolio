<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project

Next.js 16 App Router + TypeScript + Tailwind CSS v4 + Framer Motion portfolio site.

## Commands

```sh
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint (flat config: eslint.config.mjs)
```

## Source Layout

```
src/
  app/             # App Router: layout.tsx, page.tsx, globals.css
  components/      # Page sections (Navbar, Hero, About, Skills, Projects, Contact, Footer)
    ui/            # Reusable primitives (Button, CustomCursor, Skeleton, SectionHeading, etc.)
  constants/
    data.ts        # ALL site content — personal info, projects, skills, experience, education
public/            # Static assets, resume.pdf, images
old-site/          # Archived static HTML/CSS/JS version (not active)
```

Path alias: `@/*` → `./src/*`

## Important

- **Editing site content** → edit `src/constants/data.ts`. That is the single source of truth for name, bio, projects, skills, etc.
- **Contact form** is client-side only — simulated API call, no actual backend or form handler.
- **Projects section** has a 1.5s simulated loading skeleton (for demo purposes).
- **Custom cursor** activates only on non-touch devices (checks `pointer: coarse`). Add `hover-target` class to elements that should trigger the hover state.
- **Light theme only** — dark mode `prefers-color-scheme` is explicitly overridden to light values in `globals.css`.
