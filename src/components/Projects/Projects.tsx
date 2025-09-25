import { motion, useInView } from "framer-motion";
import { forwardRef, useMemo, useRef, useState } from "react";
import { FiAlertCircle, FiFolder, FiRefreshCw } from "react-icons/fi";
import useGitHubProjects from "../../hooks/useGitHubProjects";
import Button from "../common/Button";
import ProjectCard from "./ProjectCard";

// Get GitHub username from environment variables
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || "wyatt1231";

const Projects = forwardRef<HTMLElement>((_, forwardedRef) => {
  const internalRef = useRef<HTMLElement>(null);
  const ref = forwardedRef || internalRef;
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const { projects, loading, error, refetch, getProjectLanguages } = useGitHubProjects(GITHUB_USERNAME);

  // Get unique topics for filtering
  const availableFilters = useMemo(() => {
    const allTopics = projects.flatMap((project) => project.topics);
    const uniqueTopics = Array.from(new Set(allTopics)).sort();
    return ["all", ...uniqueTopics];
  }, [projects]);

  // Filter projects based on selected filter
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") {
      return projects;
    }
    return projects.filter((project) => project.topics.includes(selectedFilter) || project.language?.toLowerCase() === selectedFilter.toLowerCase());
  }, [projects, selectedFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const LoadingSpinner = () => (
    <div className="projects__loading">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
        <FiRefreshCw size={32} />
      </motion.div>
      <p>Fetching projects from GitHub...</p>
    </div>
  );

  const ErrorState = () => (
    <div className="projects__error">
      <div className="projects__error-icon">
        <FiAlertCircle />
      </div>
      <div className="projects__error-message">{error}</div>
      <div className="projects__error-details">
        <Button onClick={refetch} variant="primary">
          <FiRefreshCw className="mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="projects__empty">
      <div className="projects__empty-icon">
        <FiFolder />
      </div>
      <div className="projects__empty-message">
        {selectedFilter === "all" ? "No projects found" : `No projects found with "${selectedFilter}" filter`}
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="projects" id="projects" ref={ref}>
        <div className="projects__container">
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="projects" id="projects" ref={ref}>
        <div className="projects__container">
          <ErrorState />
        </div>
      </section>
    );
  }

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects__container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            A showcase of my recent work and contributions, automatically fetched from my GitHub repositories. Each project demonstrates different
            aspects of my technical skills and problem-solving approach.
          </p>
        </motion.div>

        {availableFilters.length > 1 && (
          <motion.div
            className="projects__filters"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {availableFilters.map((filter) => (
              <button
                key={filter}
                className={`projects__filter ${selectedFilter === filter ? "projects__filter--active" : ""}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter === "all" ? "All Projects" : filter}
              </button>
            ))}
          </motion.div>
        )}

        {filteredProjects.length === 0 ? (
          <EmptyState />
        ) : (
          <motion.div className="projects__grid" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} onLanguagesFetch={getProjectLanguages} isVisible={isInView} />
            ))}
          </motion.div>
        )}

        <motion.div
          className="text-center projects__view-all mt-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} external variant="secondary">
            <FiFolder className="mr-2 " />
            View All Repositories
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
