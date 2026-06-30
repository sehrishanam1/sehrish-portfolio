# Sehrish Anam — Portfolio

A modern, high-end personal portfolio inspired by the Gerold theme. Dark, elegant aesthetic with neon-lime accents and buttery-smooth scroll animations.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for all animations
- **Lenis** for smooth scrolling
- **React Hook Form + Zod** for the contact form
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Sections

Hero (typing effect, parallax, animated counters) → Marquee → Services → Filterable Portfolio → Experience & Education timeline → Animated Skill bars → Testimonials carousel → Blog → Contact form → Footer.

## Customizing

All content lives in [`src/lib/data.ts`](src/lib/data.ts) — edit name, bio, stats, services, projects, experience, skills, testimonials and posts there. Theme colors are in [`tailwind.config.ts`](tailwind.config.ts).

Replace `public/cv.pdf` with a real résumé and swap the Unsplash image URLs for your own assets.
