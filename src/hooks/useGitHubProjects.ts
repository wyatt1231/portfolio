import { useCallback, useEffect, useState } from "react";
import GitHubService from "../services/github";
import { Project, ProjectLanguages } from "../types";

export interface UseGitHubProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  getProjectLanguages: (project: Project) => Promise<ProjectLanguages>;
}

export const useGitHubProjects = (username: string): UseGitHubProjectsReturn => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const githubService = GitHubService.getInstance();

  const fetchProjects = useCallback(async () => {
    if (!username) {
      setError("GitHub username is required");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await githubService.getUserRepositories(username);

      console.log(`response`, response);

      if (response.error) {
        setError(response.error);
        setProjects([]);
      } else {
        setProjects(response.data);
      }
    } catch (err) {
      console.error("Error in useGitHubProjects:", err);
      setError("An unexpected error occurred while fetching projects");
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }, [username, githubService]);

  const getProjectLanguages = useCallback(
    async (project: Project): Promise<ProjectLanguages> => {
      try {
        return await githubService.getRepositoryLanguages(project.languages_url);
      } catch (error) {
        console.error("Error fetching project languages:", error);
        return {};
      }
    },
    [githubService]
  );

  const refetch = useCallback(() => {
    fetchProjects();
  }, [fetchProjects]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    loading,
    error,
    refetch,
    getProjectLanguages,
  };
};

export default useGitHubProjects;
