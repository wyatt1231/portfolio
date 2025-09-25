import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiGitBranch, FiExternalLink, FiGithub, FiCalendar } from 'react-icons/fi';
import { Project, ProjectLanguages } from '../../types';
import GitHubService from '../../services/github';

interface ProjectCardProps {
  project: Project;
  onLanguagesFetch: (project: Project) => Promise<ProjectLanguages>;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onLanguagesFetch, isVisible }) => {
  const [languages, setLanguages] = useState<ProjectLanguages>({});
  const [languageStats, setLanguageStats] = useState<Array<{
    name: string;
    percentage: number;
    bytes: number;
    color: string;
  }>>([]);

  useEffect(() => {
    if (isVisible) {
      const fetchLanguages = async () => {
        try {
          const langs = await onLanguagesFetch(project);
          setLanguages(langs);
          setLanguageStats(GitHubService.calculateLanguagePercentages(langs));
        } catch (error) {
          console.error('Error fetching languages for', project.name, error);
        }
      };

      fetchLanguages();
    }
  }, [project, onLanguagesFetch, isVisible]);

  const formatDate = (dateString: string) => {
    return GitHubService.formatDate(dateString);
  };


  return (
    <motion.div
      className={`project-card ${isVisible ? 'animate' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <div className="project-card__header">
        <div className="project-card__title-wrapper">
          <h3 className="project-card__title">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} repository on GitHub`}
            >
              {project.name}
            </a>
          </h3>
        </div>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="project-card__meta">
          <div className="project-card__meta-item">
            <FiCalendar size={14} />
            <span>Updated {formatDate(project.updated_at)}</span>
          </div>
          {project.language && (
            <div className="project-card__meta-item">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: GitHubService.getLanguageColor(project.language) }}
              />
              <span>{project.language}</span>
            </div>
          )}
        </div>
      </div>

      {languageStats.length > 0 && (
        <div className="project-card__languages">
          <div className="project-card__language-bar">
            {languageStats.map((lang) => (
              <div
                key={lang.name}
                className="project-card__language-bar-segment"
                style={{
                  backgroundColor: lang.color,
                  width: `${lang.percentage}%`,
                }}
              />
            ))}
          </div>
          <div className="project-card__language-list">
            {languageStats.slice(0, 4).map((lang) => (
              <div key={lang.name} className="project-card__language-tag">
                <div
                  className="project-card__language-tag-dot"
                  style={{ backgroundColor: lang.color }}
                />
                <span>{lang.name} {lang.percentage}%</span>
              </div>
            ))}
            {languageStats.length > 4 && (
              <span className="project-card__language-tag">
                +{languageStats.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}

      {project.topics.length > 0 && (
        <div className="project-card__topics">
          <div className="project-card__topics-list">
            {project.topics.slice(0, 6).map((topic) => (
              <span key={topic} className="project-card__topics-tag">
                {topic}
              </span>
            ))}
            {project.topics.length > 6 && (
              <span className="project-card__topics-tag">
                +{project.topics.length - 6}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="project-card__footer">
        <div className="project-card__stats">
          {project.stargazers_count > 0 && (
            <div className="project-card__stats-item">
              <FiStar size={14} />
              <span>{project.stargazers_count}</span>
            </div>
          )}
          {project.forks_count > 0 && (
            <div className="project-card__stats-item">
              <FiGitBranch size={14} />
              <span>{project.forks_count}</span>
            </div>
          )}
        </div>

        <div className="project-card__links">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            aria-label={`View ${project.name} source code`}
          >
            <FiGithub size={18} />
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--primary"
              aria-label={`View ${project.name} live demo`}
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;