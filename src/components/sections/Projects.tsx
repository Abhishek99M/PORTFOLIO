"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  Folder,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/lib/data";
import { GitHubRepo } from "@/types";
import { getLanguageColor } from "@/lib/github";

interface ProjectsProps {
  githubRepos: GitHubRepo[];
}

export default function Projects({ githubRepos }: ProjectsProps) {
  const allTechs = [
    "All",
    ...Array.from(
      new Set([
        ...featuredProjects.flatMap((p) => p.technologies),
        ...githubRepos
          .map((r) => r.language)
          .filter((l): l is string => l !== null),
      ])
    ),
  ];

  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredRepos = githubRepos.filter(
    (repo) => filter === "All" || repo.language === filter
  );

  const displayedRepos = showAll ? filteredRepos : filteredRepos.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Featured work and open source contributions"
        />

        {/* Featured Projects */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-xl border border-neutral-200/60 bg-gradient-to-br from-white/80 to-neutral-50/80 p-6 shadow-sm backdrop-blur-md transition-all hover:shadow-xl dark:border-neutral-700/60 dark:from-neutral-900/80 dark:to-neutral-800/80"
            >
              <div className="absolute right-4 top-4">
                <span className="rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-3 py-1 text-xs font-semibold text-white">
                  Featured
                </span>
              </div>

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                <Folder className="h-6 w-6 text-primary-500" />
              </div>

              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950/50 dark:text-primary-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repos */}
        {githubRepos.length > 0 && (
          <>
            <div className="mb-8">
              <h3 className="mb-4 text-center text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                GitHub Repositories
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {allTechs.slice(0, 10).map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setFilter(tech)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      filter === tech
                        ? "bg-primary-600 text-white shadow-md"
                        : "border border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-primary-600"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {displayedRepos.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col rounded-xl border border-neutral-200/60 bg-white/60 p-5 backdrop-blur-md transition-all hover:border-primary-300/60 hover:shadow-lg dark:border-neutral-700/60 dark:bg-neutral-900/60 dark:hover:border-primary-700/60"
                  >
                    <div className="mb-3 flex items-start justify-between">
                      <Folder className="h-5 w-5 text-primary-500" />
                      <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-500" />
                    </div>

                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {repo.name}
                    </h4>
                    <p className="mt-1 flex-1 text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">
                      {repo.description || "No description available"}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-neutral-500">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span
                              className="h-2.5 w-2.5 rounded-full"
                              style={{
                                backgroundColor: getLanguageColor(repo.language),
                              }}
                            />
                            {repo.language}
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {repo.stargazers_count}
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="flex items-center gap-1">
                            <GitFork className="h-3 w-3" />
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-500 transition-colors hover:text-primary-500"
                          aria-label="GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 transition-colors hover:text-primary-500"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredRepos.length > 6 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="rounded-full border border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-700 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-neutral-600 dark:text-neutral-300 dark:hover:border-primary-600 dark:hover:text-primary-400"
                >
                  {showAll ? "Show Less" : `View All (${filteredRepos.length})`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
