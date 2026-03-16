"use client";

import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const highlights = [
    { icon: GraduationCap, label: "B.Tech CSE" },
    { icon: Briefcase, label: "Software Engineer" },
    { icon: MapPin, label: "India" },
    { icon: User, label: "Full-Stack Dev" },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me and my background"
        />

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 md:col-span-2"
          >
            <div className="rounded-xl border border-neutral-200/60 bg-white/60 p-6 backdrop-blur-md dark:border-neutral-700/60 dark:bg-neutral-900/60">
              <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                Full-stack developer with experience building production web
                applications using{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  React.js, Next.js, Node.js, and TypeScript.
                </span>{" "}
                Skilled in designing RESTful APIs, database schemas, and
                cloud-native systems with secure authentication flows.
                Proficient in{" "}
                <span className="font-semibold text-accent-600 dark:text-accent-400">
                  PostgreSQL, AWS (S3, ECS, SES), Redis, and CI/CD pipelines.
                </span>
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                B.Tech in Computer Science and Engineering from Noida Institute
                of Engineering and Technology (2021–2025). Currently working as a
                Software Engineer building a full-stack LMS with real-time
                features, video streaming, and cloud-native deployment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-neutral-200/60 bg-white/60 p-4 text-center backdrop-blur-md transition-colors hover:border-primary-300 dark:border-neutral-700/60 dark:bg-neutral-900/60 dark:hover:border-primary-700"
              >
                <item.icon className="h-5 w-5 text-primary-500" />
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
