import { motion } from "framer-motion";
import React, { useState } from "react";
import TypeWriter from "../common/TypeWriter";

interface HeroProps {
  onProjectsClick: () => void;
  onScrollToNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onProjectsClick, onScrollToNext }) => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleNameComplete = () => {
    setTimeout(() => setShowTypewriter(true), 500);
  };

  const handleTypewriterComplete = () => {
    setTimeout(() => setShowDescription(true), 300);
  };

  const FloatingElement = ({ className }: { className: string }) => (
    <motion.div
      className={`hero__floating-element ${className}`}
      animate={{
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-20"></div>
    </motion.div>
  );

  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <motion.div className="hero__content" variants={containerVariants} initial="hidden" animate="visible">
          <motion.p className="hero__greeting" variants={itemVariants}>
            Hi, my name is
          </motion.p>

          <motion.h1 className="hero__name" variants={itemVariants} onAnimationComplete={handleNameComplete}>
            Marc Montiveles.
          </motion.h1>

          <motion.h2 className="hero__title" initial={{ opacity: 0 }} animate={{ opacity: showTypewriter ? 1 : 0 }} transition={{ duration: 0.5 }}>
            {showTypewriter ? (
              <TypeWriter text="Crafting code with purpose" delay={80} onComplete={handleTypewriterComplete} />
            ) : (
              "Crafting code with purpose"
            )}
          </motion.h2>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: showDescription ? 1 : 0,
              y: showDescription ? 0 : 20,
            }}
            transition={{ duration: 0.8 }}
          >
            I'm a <b>Full Stack Developer</b> with several years of experience developing web applications for healthcare, accounting, and business
            management sectors. I specialize in building scalable solutions for both corporate and freelance environments.
            {/* I build web applications that solve complex business problems and deliver real-world impact. */}
          </motion.p>

          <motion.div className="hero__cta" variants={itemVariants}>
            <button className="hero__cta-button" onClick={onProjectsClick}>
              Check out my work!
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating background elements */}
      <FloatingElement className="top-20 left-10" />
      <FloatingElement className="top-60 right-15" />
      <FloatingElement className="bottom-30 left-20" />
      <FloatingElement className="top-30 right-30" />
    </section>
  );
};

export default Hero;
