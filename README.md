# Abhishek Kumar — Developer Portfolio

A modern, production-level developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes (Dark/Light mode)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Features

- Responsive design (mobile, tablet, desktop)
- Dark/Light mode toggle with system preference detection
- Smooth scroll navigation with active section highlighting
- Animated section reveals on scroll
- GitHub repositories fetched live from the API
- Project filtering by technology
- GitHub contribution graph
- Glassmorphism card effects
- SEO optimized with OpenGraph & Twitter meta tags
- Contact form with mailto integration
- Resume download button
- Blog section placeholder

## Sections

1. **Hero** — Animated introduction with CTA buttons
2. **About** — Professional summary with highlight cards
3. **Experience** — Timeline layout with company details
4. **Skills** — Categorized technology grid
5. **Projects** — Featured projects + live GitHub repos with filtering
6. **GitHub Graph** — Contribution activity visualization
7. **Achievements** — Certifications and accomplishments
8. **Blog** — Placeholder for future posts
9. **Contact** — Form + social links
10. **Footer** — Social icons, copyright, tech stack

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Deployment

This project is ready for deployment on [Vercel](https://vercel.com):

1. Push the repository to GitHub
2. Import the project on Vercel
3. Deploy — no additional configuration needed

## Resume

Place your resume PDF at `public/resume.pdf` to enable the download button.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, theme
│   ├── page.tsx            # Home page (server component)
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── layout/             # Navbar, Footer, ThemeProvider
│   ├── sections/           # All page sections
│   └── ui/                 # Reusable components
├── lib/
│   ├── data.ts             # Static content data
│   └── github.ts           # GitHub API integration
└── types/
    └── index.ts            # TypeScript interfaces
```

## License

MIT
