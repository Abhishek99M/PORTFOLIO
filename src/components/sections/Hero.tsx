"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/5" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-500/5" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 py-20 md:grid-cols-2 md:gap-16">
        {/* Left — Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/80 px-4 py-1.5 text-sm font-medium text-primary-700 backdrop-blur-sm dark:border-primary-800 dark:bg-primary-950/50 dark:text-primary-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <AnimatedText
              text="Hi, I'm"
              className="text-neutral-800 dark:text-neutral-200"
            />
            <br />
            <AnimatedText
              text="Abhishek Kumar"
              className="bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-300% animate-gradient bg-clip-text text-transparent"
              delay={0.3}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 text-lg font-medium text-primary-600 dark:text-primary-400 sm:text-xl"
          >
            Full-Stack Developer | Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 max-w-lg text-base text-neutral-600 dark:text-neutral-400 sm:text-lg"
          >
            Building production web applications with React.js, Next.js,
            Node.js & Cloud technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/30 hover:brightness-110"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-6 py-3 text-sm font-semibold text-neutral-700 backdrop-blur-sm transition-all hover:border-primary-300 hover:text-primary-600 dark:border-neutral-600 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:border-primary-600 dark:hover:text-primary-400"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-6 py-3 text-sm font-semibold text-neutral-700 backdrop-blur-sm transition-all hover:border-primary-300 hover:text-primary-600 dark:border-neutral-600 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:border-primary-600 dark:hover:text-primary-400"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right — Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Gradient glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-500/25 via-accent-500/25 to-primary-500/25 blur-2xl" />

            {/* Photo container */}
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200/40 shadow-2xl dark:border-neutral-700/40">
              {/* Gradient top bar */}
              <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

              <div className="relative h-[420px] w-[320px] sm:h-[480px] sm:w-[360px]">
                <Image
                  src="/profile.jpeg"
                  alt="Abhishek Kumar"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
