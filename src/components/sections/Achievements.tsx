"use client";

import { motion } from "framer-motion";
import { Trophy, Award, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  award: Award,
  chart: BarChart3,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Achievements"
          subtitle="Certifications and accomplishments"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-neutral-200/60 bg-white/60 p-6 backdrop-blur-md transition-all hover:border-amber-300/60 hover:shadow-lg dark:border-neutral-700/60 dark:bg-neutral-900/60 dark:hover:border-amber-700/60"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-600 transition-colors group-hover:from-amber-500/20 group-hover:to-orange-500/20 dark:text-amber-400">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
