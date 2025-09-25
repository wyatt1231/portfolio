import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import ContactForm from "./ContactForm";

const Contact = forwardRef<HTMLElement>((_, forwardedRef) => {
  const internalRef = useRef<HTMLElement>(null);
  const ref = forwardedRef || internalRef;
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "mrmontiveles@gmail.com",
      href: "mailto:mrmontiveles@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+63 929 955 0278",
      href: null,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Philippines",
      href: null,
    },
  ];


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

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };


  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact__title">Let's Work Together</h2>
          <p className="contact__subtitle">
            Ready to bring your project to life? I'm always interested in discussing new opportunities and innovative challenges. Let's connect and
            explore how we can collaborate.
          </p>
        </motion.div>

        <div className="contact__content">
          <motion.div className="contact__info" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h3 className="contact__info-title" variants={itemVariants}>
              Get in Touch
            </motion.h3>

            <motion.p className="contact__info-text" variants={itemVariants}>
              I'm available for freelance projects and full-time opportunities in web development. With experience in healthcare, accounting, and
              business management systems, I'm ready to help bring your project to life.
            </motion.p>

            <div className="contact__contact-methods">
              {contactInfo.map((item, index) => (
                <motion.div key={item.label} className={`contact__contact-item ${isInView ? "animate" : ""}`} variants={itemVariants}>
                  <div className="contact__contact-item-icon">
                    <item.icon />
                  </div>
                  <div className="contact__contact-item-content">
                    <div className="contact__contact-item-label">{item.label}</div>
                    <div className="contact__contact-item-value">
                      {item.href ? (
                        <a href={item.href} aria-label={`${item.label}: ${item.value}`}>
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <div className="contact__form">
            <ContactForm isVisible={isInView} />
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
