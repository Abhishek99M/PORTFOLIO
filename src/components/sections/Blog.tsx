"use client";

import { motion } from "framer-motion";
import { Pen, ArrowUpRight, Notebook } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { HashnodePost } from "@/lib/hashnode";

interface BlogProps {
  posts: HashnodePost[];
}

export default function Blog({ posts }: BlogProps) {
  // If no posts yet, show coming soon state
  if (posts.length === 0) {
    return (
      <section id="blog" className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Blog"
            subtitle="Thoughts on software engineering, architecture, and growth"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-md text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10">
              <Notebook className="h-8 w-8 text-primary-500" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              Posts coming soon
            </h3>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              I&apos;m working on articles about full-stack development, cloud
              architecture, and my engineering journey. Stay tuned!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on software engineering, architecture, and growth"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-xl border border-neutral-200/60 bg-white/60 p-6 backdrop-blur-md transition-all hover:border-primary-300/60 hover:shadow-lg dark:border-neutral-700/60 dark:bg-neutral-900/60 dark:hover:border-primary-700/60"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                  <Pen className="h-4 w-4 text-primary-500" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-500" />
              </div>

              <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <h3 className="mt-1 flex-1 text-base font-bold text-neutral-900 dark:text-neutral-100">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3">
                {post.brief}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag.name}
                      className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-neutral-500">
                  {post.readTimeInMinutes} min read
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
