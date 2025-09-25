import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import Button from "../common/Button";

interface AboutProps {
  onContactClick: () => void;
}

const About = forwardRef<HTMLElement, AboutProps>(({ onContactClick }, forwardedRef) => {
  const internalRef = useRef<HTMLElement>(null);
  const ref = forwardedRef || internalRef;
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__container">
        <motion.div className="about__content" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div className="about__text" variants={itemVariants}>
            <h2 className="about__title">About Me</h2>

            <div className="about__description">
              <p>
                I’m a results-driven Full Stack Developer with 7 years of experience building and deploying web applications across healthcare,
                accounting, and business management industries. My work bridges both corporate and freelance settings, where I’ve honed skills in
                client collaboration, project leadership, and end-to-end software delivery.
              </p>

              <p>
                I specialize in translating complex business needs into scalable, high-performance solutions. With a strong foundation in software
                architecture and user-centered design, I ensure that every project balances technical precision with real-world usability. My teaching
                background has sharpened my communication skills, enabling me to break down complex concepts, foster collaboration, and consistently
                deliver value to clients and stakeholders.
              </p>
            </div>

            <ul className="about__highlights">
              <li>Expert in React, Angular, TypeScript, and modern JavaScript frameworks</li>
              <li>Proficient in .NET technologies (ASP.NET MVC, Web API, Core) and Node.js</li>
              <li>Experience with healthcare, accounting, Fintech, and business management solutions</li>
              <li>Former university instructor with strong communication and leadership skills</li>
            </ul>

            <div className="about__cta">
              <Button variant="primary" onClick={onContactClick}>
                <FiMail style={{ marginRight: "8px" }} />
                Let's Work Together
              </Button>

              <Button variant="secondary" href={`${import.meta.env.BASE_URL}MarcMontivelesResume.pdf`} external>
                <FiDownload style={{ marginRight: "8px" }} />
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div className="about__image" variants={itemVariants}>
            <div className="about__photo">
              <img src={`${import.meta.env.BASE_URL}profile-photo.jpg`} alt="Marc Montiveles - Full Stack Developer" loading="lazy" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
