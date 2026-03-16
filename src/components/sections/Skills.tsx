"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with daily"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-neutral-200/60 bg-white/60 p-6 backdrop-blur-md transition-all hover:border-primary-300/60 hover:shadow-lg dark:border-neutral-700/60 dark:bg-neutral-900/60 dark:hover:border-primary-700/60"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-600 transition-colors group-hover:from-primary-500/20 group-hover:to-accent-500/20 dark:text-primary-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-primary-600 dark:hover:bg-primary-950/50 dark:hover:text-primary-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
