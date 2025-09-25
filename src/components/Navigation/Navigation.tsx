import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavigationItem } from "../../types";

interface NavigationProps {
  navigationItems: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ navigationItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const scrollPosition = window.scrollY + 100;
      for (const item of navigationItems) {
        const element = item.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.href.slice(1)); // Remove #
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigationItems]);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navigation ${isScrolled ? "navigation--scrolled" : ""}`}>
      <div className="navigation__container">
        <a href="#home" className="navigation__logo">
          Marc Montiveles
        </a>

        <ul className="navigation__menu">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.ref)}
                className={`navigation__link ${activeSection === item.href.slice(1) ? "navigation__link--active" : ""}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`navigation__mobile-menu ${isOpen ? "navigation__mobile-menu--open" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="navigation__mobile-menu-icon"></span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`navigation__mobile-overlay ${isOpen ? "navigation__mobile-overlay--open" : ""}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.ref)}
                className="navigation__mobile-link"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
