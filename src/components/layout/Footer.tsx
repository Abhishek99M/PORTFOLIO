"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white/50 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-primary-600 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-primary-600 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-primary-600 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
            </p>
            <p className="mt-2 flex items-center justify-center gap-1 text-sm text-neutral-500 dark:text-neutral-500">
              &copy; {new Date().getFullYear()} Abhishek Kumar. Made with
              <Heart className="h-3 w-3 fill-red-500 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
