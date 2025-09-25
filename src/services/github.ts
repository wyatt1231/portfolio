import axios from "axios";
import { ApiResponse, Project, ProjectLanguages } from "../types";

const GITHUB_API_BASE = "https://api.github.com";

// GitHub API client
const githubApi = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

// Add auth token if available (for higher rate limits)
const GITHUB_TOKEN =
  import.meta.env.VITE_GITHUB_TOKEN || `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`;
if (GITHUB_TOKEN) {
  githubApi.defaults.headers.common["Authorization"] = `token ${GITHUB_TOKEN}`;
}

export class GitHubService {
  private static instance: GitHubService;
  private cache = new Map<string, { data: any; timestamp: number }>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  public static getInstance(): GitHubService {
    if (!GitHubService.instance) {
      GitHubService.instance = new GitHubService();
    }
    return GitHubService.instance;
  }

  private getCachedData<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data;
    }
    return null;
  }

  private setCachedData(key: string, data: any): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  private handleApiError(error: any): string {
    if (error.response?.status === 403) {
      return "GitHub API rate limit exceeded. Please try again later.";
    }
    if (error.response?.status === 404) {
      return "GitHub user not found.";
    }
    if (error.code === "NETWORK_ERROR") {
      return "Network error. Please check your internet connection.";
    }
    return "Failed to fetch data from GitHub. Please try again later.";
  }

  async getUserRepositories(username: string): Promise<ApiResponse<Project[]>> {
    const cacheKey = `repos-${username}`;
    const cached = this.getCachedData<Project[]>(cacheKey);

    if (cached) {
      return { data: cached, loading: false };
    }

    try {
      const response = await githubApi.get(`/users/${username}/repos`, {
        params: {
          type: "owner",
          sort: "updated",
          per_page: 100,
        },
      });

      // Filter out forks and archived repos, sort by stars and recent activity
      const repositories: Project[] = response.data
        .filter((repo: any) => !repo.fork && !repo.archived)
        .map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          full_name: repo.full_name,
          description: repo.description || "No description provided",
          html_url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          languages_url: repo.languages_url,
          topics: repo.topics || [],
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          pushed_at: repo.pushed_at,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          size: repo.size,
          open_issues_count: repo.open_issues_count,
          private: repo.private,
          archived: repo.archived,
          fork: repo.fork,
        }))
        .sort((a: Project, b: Project) => {
          // Sort by stars first, then by recent activity
          if (b.stargazers_count !== a.stargazers_count) {
            return b.stargazers_count - a.stargazers_count;
          }
          return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
        });

      this.setCachedData(cacheKey, repositories);
      return { data: repositories, loading: false };
    } catch (error: any) {
      console.error("Error fetching repositories:", error);
      return {
        data: [],
        loading: false,
        error: this.handleApiError(error),
      };
    }
  }

  async getRepositoryLanguages(languagesUrl: string): Promise<ProjectLanguages> {
    const cacheKey = `languages-${languagesUrl}`;
    const cached = this.getCachedData<ProjectLanguages>(cacheKey);

    if (cached) {
      return cached;
    }

    try {
      const response = await githubApi.get(languagesUrl.replace(GITHUB_API_BASE, ""));
      const languages = response.data;

      this.setCachedData(cacheKey, languages);
      return languages;
    } catch (error) {
      console.error("Error fetching repository languages:", error);
      return {};
    }
  }

  async getRepositoryReadme(owner: string, repo: string): Promise<string | null> {
    const cacheKey = `readme-${owner}-${repo}`;
    const cached = this.getCachedData<string>(cacheKey);

    if (cached) {
      return cached;
    }

    try {
      const response = await githubApi.get(`/repos/${owner}/${repo}/readme`);
      const content = atob(response.data.content);

      this.setCachedData(cacheKey, content);
      return content;
    } catch (error) {
      console.error("Error fetching repository readme:", error);
      return null;
    }
  }

  // Get user profile info
  async getUserProfile(username: string): Promise<any> {
    const cacheKey = `profile-${username}`;
    const cached = this.getCachedData(cacheKey);

    if (cached) {
      return cached;
    }

    try {
      const response = await githubApi.get(`/users/${username}`);
      const profile = response.data;

      this.setCachedData(cacheKey, profile);
      return profile;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }
  }

  // Calculate language percentages for a repository
  static calculateLanguagePercentages(languages: ProjectLanguages): Array<{
    name: string;
    percentage: number;
    bytes: number;
    color: string;
  }> {
    const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);

    if (totalBytes === 0) return [];

    return Object.entries(languages)
      .map(([name, bytes]) => ({
        name,
        bytes,
        percentage: Math.round((bytes / totalBytes) * 100),
        color: GitHubService.getLanguageColor(name),
      }))
      .sort((a, b) => b.bytes - a.bytes)
      .filter((lang) => lang.percentage >= 1); // Only show languages with 1% or more
  }

  // Get language color (GitHub style)
  static getLanguageColor(language: string): string {
    const colors: Record<string, string> = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      "C#": "#239120",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#ffac45",
      Kotlin: "#F18E33",
      Dart: "#00B4AB",
      HTML: "#e34c26",
      CSS: "#1572B6",
      SCSS: "#c6538c",
      Vue: "#2c3e50",
      React: "#61DAFB",
      Angular: "#DD0031",
      "Node.js": "#68a063",
    };

    return colors[language] || "#6e7681";
  }

  // Format repository topics for filtering
  static getUniqueTopics(repositories: Project[]): string[] {
    const allTopics = repositories.flatMap((repo) => repo.topics);
    return Array.from(new Set(allTopics)).sort();
  }

  // Format date for display
  static formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  // Check if repository is recently updated (within last 30 days)
  static isRecentlyUpdated(dateString: string): boolean {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return new Date(dateString) > thirtyDaysAgo;
  }
}

export default GitHubService;
