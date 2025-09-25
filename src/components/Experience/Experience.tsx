import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { experienceData, formatDateRange, calculateDuration } from '../../data/experience';

const Experience = forwardRef<HTMLElement>((_, forwardedRef) => {
  const internalRef = useRef<HTMLElement>(null);
  const ref = forwardedRef || internalRef;
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [animatedItems, setAnimatedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isInView) {
      experienceData.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => new Set(prev).add(index.toString()));
        }, index * 200);
      });
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="experience__container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="experience__title">Work Experience</h2>
          <p className="experience__subtitle">
            My professional journey showcasing progressive growth in full-stack development,
            team leadership, and delivering scalable solutions for diverse industries.
          </p>
        </motion.div>

        <div className="experience__timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience__item ${
                !exp.endDate ? 'experience__item--current' : ''
              } ${animatedItems.has(index.toString()) ? 'animate' : ''}`}
              variants={itemVariants}
              initial="hidden"
              animate={animatedItems.has(index.toString()) ? "visible" : "hidden"}
            >
              <div className="experience__marker"></div>

              <div className="experience__content">
                <div className="experience__period">
                  <FiCalendar />
                  <span>
                    {formatDateRange(exp.startDate, exp.endDate)}
                    <span style={{ marginLeft: '8px', fontSize: '0.75rem' }}>
                      ({calculateDuration(exp.startDate, exp.endDate)})
                    </span>
                  </span>
                </div>

                <h3 className="experience__company">{exp.company}</h3>
                <h4 className="experience__position">{exp.position}</h4>

                <p className="experience__location">
                  <FiMapPin />
                  <span>{exp.location}</span>
                </p>

                <p className="experience__description">
                  {exp.description}
                </p>

                <ul className="experience__achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={animatedItems.has(index.toString()) ?
                        { opacity: 1, x: 0 } :
                        { opacity: 0, x: -20 }
                      }
                      transition={{
                        delay: achIndex * 0.1 + 0.3,
                        duration: 0.5
                      }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                <div className="experience__technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="experience__tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={animatedItems.has(index.toString()) ?
                        { opacity: 1, scale: 1 } :
                        { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: techIndex * 0.05 + 0.5,
                        duration: 0.4
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;