"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function GitHubGraph() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-neutral-200/60 bg-white/60 p-6 backdrop-blur-md dark:border-neutral-700/60 dark:bg-neutral-900/60"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Github className="h-5 w-5 text-primary-500" />
              <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                GitHub Contributions
              </h3>
            </div>
            <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-950/50 dark:text-primary-300">
              {new Date().getFullYear()}
            </span>
          </div>
          <div className="overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ghchart.rshah.org/6366f1/Abhishek99M"
              alt="Abhishek Kumar's GitHub Contribution Graph"
              className="mx-auto w-full max-w-3xl dark:brightness-90 dark:contrast-125"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
