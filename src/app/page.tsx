import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import GitHubGraph from "@/components/sections/GitHubGraph";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { getGitHubRepos } from "@/lib/github";
import { getHashnodePosts } from "@/lib/hashnode";

export default async function Home() {
  const [githubRepos, blogPosts] = await Promise.all([
    getGitHubRepos(),
    getHashnodePosts(),
  ]);

  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects githubRepos={githubRepos} />
      <GitHubGraph />
      <Achievements />
      <Blog posts={blogPosts} />
      <Contact />
      <Footer />
    </main>
  );
}
