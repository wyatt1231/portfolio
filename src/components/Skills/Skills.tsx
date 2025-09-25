import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Skill } from '../../types';
import { skillsData, skillCategories, getSkillLevel } from '../../data/skills';

const Skills = forwardRef<HTMLElement>((_, forwardedRef) => {
  const internalRef = useRef<HTMLElement>(null);
  const ref = forwardedRef || internalRef;
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimateSkills(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const SkillBar = ({ skill, delay = 0 }: { skill: Skill; delay?: number }) => {
    return (
      <div className="skills__skill">
        <div className="skills__skill-header">
          <span className="skills__skill-name">
            {skill.icon} {skill.name}
          </span>
          <span className="skills__skill-level">
            {getSkillLevel(skill.proficiency)}
          </span>
        </div>
        <div className="skills__skill-bar">
          <motion.div
            className="skills__skill-bar-fill"
            style={{ '--skill-level': `${skill.proficiency}%` } as React.CSSProperties}
            initial={{ width: '0%' }}
            animate={animateSkills ? { width: `${skill.proficiency}%` } : { width: '0%' }}
            transition={{ duration: 1.5, delay, ease: 'easeOut' }}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills__container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="skills__title">Technical Expertise</h2>
          <p className="skills__subtitle">
            A comprehensive overview of my technical skills and proficiency levels,
            built through years of hands-on experience and continuous learning.
          </p>
        </motion.div>

        <motion.div
          className="skills__categories"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(skillCategories).map(([categoryKey, categoryInfo]) => {
            const categorySkills = groupedSkills[categoryKey] || [];
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={categoryKey}
                className={`skills__category skills__category--${categoryKey}`}
                variants={categoryVariants}
              >
                <div className="skills__category-header">
                  <div className="skills__category-icon">
                    {categoryInfo.icon}
                  </div>
                  <h3 className="skills__category-title">
                    {categoryInfo.title}
                  </h3>
                </div>

                <div className="skills__category-skills">
                  {categorySkills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.id}
                      skill={skill}
                      delay={skillIndex * 0.1 + 0.3}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;