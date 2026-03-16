import { Experience, Skill, Project, Achievement, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "The Design Factorie",
    period: "Feb 2026 – Present",
    description: [
      "Building a full-stack LMS using Next.js 14, NestJS, TypeScript, Prisma, and PostgreSQL",
      "Implementing admin panel with 6 user roles, Google SSO, MFA, and JWT-based session management",
      "Developing HLS video streaming, LiveKit live-classes, and auto-graded assessments",
      "Deploying on AWS ECS Fargate with Terraform IaC, Redis caching, and GitHub Actions CI/CD",
    ],
    technologies: [
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "AWS",
      "Redis",
      "Terraform",
      "LiveKit",
    ],
  },
  {
    title: "Junior Developer Intern",
    company: "Psypher AI Pvt. Ltd.",
    period: "Aug 2025 – Feb 2026",
    description: [
      "Built an AI-powered event showcase platform using Next.js, Supabase, and Tailwind CSS, serving 500+ events with SSR",
      "Implemented Google authentication and role-based access control for user roles across the platform",
      "Developed 15+ responsive UI components with React.js and Framer Motion, improving user engagement by 30%",
      "Designed 3+ database tables in Supabase (PostgreSQL) and integrated RESTful APIs for event management workflows",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Languages & Fundamentals",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "OOPs", "DSA", "MVC Architecture"],
    icon: "code",
  },
  {
    category: "Frameworks, Backend & APIs",
    items: ["React.js", "Next.js", "NestJS", "Node.js", "Express.js", "Prisma", "REST APIs"],
    icon: "layout",
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (S3, ECS, SES, CloudFront)", "Docker", "Terraform", "GitHub Actions", "Redis"],
    icon: "cloud",
  },
  {
    category: "Tools & Database",
    items: ["Git", "GitHub", "Postman", "Firebase", "Supabase", "MySQL", "MongoDB"],
    icon: "database",
  },
];

export const featuredProjects: Project[] = [
  {
    name: "Real Estate Platform",
    description:
      "Full-stack property management system with JWT authentication, property listings, and responsive UI for seamless real estate browsing.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/Abhishek99M/Real-EState",
    live: "https://real-e-state-frontend.vercel.app/",
    featured: true,
  },
  {
    name: "AI Travel Planner",
    description:
      "AI-powered itinerary generator using Google Places API for smart travel recommendations with real-time suggestions and Firebase backend.",
    technologies: [
      "React.js",
      "Firebase",
      "Google Places API",
      "Tailwind CSS",
      "Axios",
    ],
    github: "https://github.com/Abhishek99M/Voyage-AI-The-Smart-and-AI-Driven-Navigation-Companion",
    live: "https://ai-travel-planner-kappa.vercel.app/",
    featured: true,
  },
  {
    name: "Event Tier Showcase",
    description:
      "Dynamic platform to display and manage event tiers with clear, interactive categorization and visual appeal.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Abhishek99M/EventTierShowCase",
    live: "https://event-tier-show-case.vercel.app",
    featured: true,
  },
  {
    name: "Personal Finance Visualizer",
    description:
      "Track, manage, and visualize your expenses with interactive charts and summaries for better financial insights.",
    technologies: ["React.js", "Chart.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Abhishek99M/Personal-Finance-Visualizer",
    live: "https://personal-finance-visualizer-fronten.vercel.app/",
    featured: true,
  },
];

export const achievements: Achievement[] = [
  {
    title: "Microsoft AI Skills Challenge",
    description:
      "Awarded Completion for Microsoft AI Skills Challenge — Jan 2024.",
    icon: "trophy",
  },
  {
    title: "Dynamic Programming Samurai Badge",
    description:
      "Earned the Samurai Badge on Coding Ninjas for mastering dynamic programming — Dec 2023.",
    icon: "award",
  },
  {
    title: "Accenture Data Analytics Simulation",
    description:
      "Completed Accenture North America Data Analytics and Visualization Job Simulation on Forage — July 2024.",
    icon: "chart",
  },
  {
    title: "Fullstack Web Development Bootcamp",
    description:
      "Certificate of 'The Ultimate 2022 Fullstack Web Development Bootcamp' from Udemy — Sep 2022.",
    icon: "award",
  },
];

export const socialLinks = {
  github: "https://github.com/Abhishek99M",
  linkedin: "https://linkedin.com/in/abhishek-kumar",
  email: "abhishek990103@gmail.com",
  instagram: "https://instagram.com/ig._.abhi172",
};
