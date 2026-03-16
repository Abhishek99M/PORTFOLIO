import { GitHubRepo } from "@/types";

const GITHUB_USERNAME = "Abhishek99M";
const GITHUB_API = "https://api.github.com";

// Repos to exclude from display
const EXCLUDED_REPOS = [
  "Abhishek99M",                // GitHub profile README
  "PORTFOLIO",                  // Deleted repo (cached)
  "cazgi-IBM-Watson-NLU-Project", // Not relevant
  "Quiz-app",                   // Not relevant
  "spec",                       // Not relevant
  "Web-Project",                // Not relevant
];

// Fallback descriptions for repos without one
const REPO_DESCRIPTIONS: Record<string, string> = {
  "Real-EState":
    "Full-stack property management platform with JWT auth, real-time updates, and responsive UI",
  "Voyage-AI-The-Smart-and-AI-Driven-Navigation-Companion":
    "AI-powered travel itinerary generator with Google Places API and real-time recommendations",
  "TicTacToe_Project":
    "Interactive Tic Tac Toe game with clean UI and game logic",
  "Currency-Converter":
    "Real-time currency converter with live exchange rates and clean interface",
  "EventTierShowCase":
    "Dynamic platform to display and manage event tiers with interactive categorization",
  "My-Portfolio":
    "Modern developer portfolio built with Next.js 14, TypeScript, Tailwind CSS & Framer Motion",
};

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=public`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 600 },
      }
    );

    if (!response.ok) {
      console.error("GitHub API error:", response.status);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    return repos
      .filter(
        (repo) =>
          !repo.name.includes(".github") &&
          !EXCLUDED_REPOS.includes(repo.name)
      )
      .map((repo) => ({
        ...repo,
        description: repo.description || REPO_DESCRIPTIONS[repo.name] || null,
      }))
      .sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
}

export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Go: "#00ADD8",
    Rust: "#dea584",
    Shell: "#89e051",
    Dockerfile: "#384d54",
    Dart: "#00B4AB",
  };
  return colors[language] || "#6b7280";
}
