import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/wyatt1231",
      icon: FiGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mrmontiveles/",
      icon: FiLinkedin,
    },
  ];

  return (
    <>
      {/* Left sidebar - Social links */}
      <div className="social-sidebar social-sidebar--left">
        <ul className="social-sidebar__list">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <li key={name} className="social-sidebar__item">
              <a href={url} target="_blank" rel="noopener noreferrer" className="social-sidebar__link" aria-label={name}>
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
        <div className="social-sidebar__line"></div>
      </div>

      {/* Right sidebar - Email */}
      <div className="social-sidebar social-sidebar--right">
        <div className="social-sidebar__email">
          <a href="mailto:mrmontiveles@gmail.com" className="social-sidebar__email-link">
            mrmontiveles@gmail.com
          </a>
        </div>
        <div className="social-sidebar__line"></div>
      </div>
    </>
  );
};

export default SocialSidebar;
