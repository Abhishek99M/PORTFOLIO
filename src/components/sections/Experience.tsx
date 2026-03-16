"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and contributions"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary-500 via-accent-500 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 hidden h-4 w-4 rounded-full border-4 border-primary-500 bg-white dark:bg-neutral-950 md:block ${
                    index % 2 === 0 ? "-right-2" : "-left-2"
                  }`}
                />

                <div className="group rounded-xl border border-neutral-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all hover:border-primary-300/60 hover:shadow-md dark:border-neutral-700/60 dark:bg-neutral-900/60 dark:hover:border-primary-700/60">
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                        {exp.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400">
                        <Building2 className="h-3.5 w-3.5" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-950/50 dark:text-primary-300">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
