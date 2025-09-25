import React, { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialSidebar from "./components/SocialSidebar";
import BackToTop from "./components/common/BackToTop";
import ScrollProgress from "./components/common/ScrollProgress";
import "./styles/main.scss";
import { NavigationItem, SectionRefs } from "./types";

const App: React.FC = () => {
  // Create refs for each section
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Section references for navigation
  const sectionRefs: SectionRefs = {
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef,
  };

  // Navigation items
  const navigationItems: NavigationItem[] = [
    { label: "About", href: "#about", ref: aboutRef },
    { label: "Skills", href: "#skills", ref: skillsRef },
    { label: "Experiences", href: "#experience", ref: experienceRef },
    { label: "Projects", href: "#projects", ref: projectsRef },
    { label: "Contact", href: "#contact", ref: contactRef },
  ];

  // Handler for scrolling to contact section
  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handler for scrolling to projects section
  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handler for scrolling to about section (from hero)
  const handleScrollToNext = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <ScrollProgress />
      <Navigation navigationItems={navigationItems} />
      <SocialSidebar />

      <main>
        <Hero onProjectsClick={handleProjectsClick} onScrollToNext={handleScrollToNext} />

        <About ref={aboutRef} onContactClick={handleContactClick} />

        <Skills ref={skillsRef} />

        <Experience ref={experienceRef} />

        <Projects ref={projectsRef} />

        <Contact ref={contactRef} />
      </main>

      <BackToTop />

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <p className="footer__text">© {new Date().getFullYear()} Marc Montiveles. All rights reserved.</p>
            {/* <p className="footer__text">Built with React, TypeScript, and SCSS. Hosted on Vercel.</p> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
