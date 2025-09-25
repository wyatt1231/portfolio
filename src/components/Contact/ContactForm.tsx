import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiCheck, FiLoader, FiSend, FiX } from "react-icons/fi";
import { ContactForm as ContactFormType } from "../../types";

interface ContactFormProps {
  isVisible: boolean;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactForm: React.FC<ContactFormProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Simulate form submission - replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demonstration purposes, we'll simulate success
      // In a real application, you would send the data to your backend
      console.log("Form submitted:", formData);

      setStatus("success");
      setMessage("Thank you! Your message has been sent successfully. I'll get back to you soon.");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setMessage("Oops! Something went wrong. Please try again or contact me directly via email.");

      // Reset status after error
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const getSubmitContent = () => {
    switch (status) {
      case "loading":
        return (
          <>
            <motion.div
              className="contact-form__submit-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <FiLoader size={20} />
            </motion.div>
            <span className="contact-form__submit-text">Sending...</span>
          </>
        );
      case "success":
        return (
          <>
            <FiCheck size={20} />
            <span>Sent Successfully!</span>
          </>
        );
      case "error":
        return (
          <>
            <FiX size={20} />
            <span>Try Again</span>
          </>
        );
      default:
        return (
          <>
            <FiSend size={20} />
            <span>Send Message</span>
          </>
        );
    }
  };

  const getSubmitClassName = () => {
    let className = "contact-form__submit";
    if (status === "loading") className += " contact-form__submit--loading";
    if (status === "success") className += " contact-form__submit--success";
    if (status === "error") className += " contact-form__submit--error";
    return className;
  };

  return (
    <motion.form
      className={`contact-form ${isVisible ? "animate" : ""}`}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onSubmit={handleSubmit}
    >
      <motion.h3 className="contact-form__title" variants={fieldVariants}>
        Send me a message
      </motion.h3>

      <motion.div className="contact-form__field contact-form__field--full" variants={fieldVariants}>
        <label htmlFor="name" className="contact-form__label">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact-form__input"
          placeholder="Enter your full name"
          required
        />
      </motion.div>

      <motion.div className="contact-form__field contact-form__field--full" variants={fieldVariants}>
        <label htmlFor="email" className="contact-form__label">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact-form__input"
          placeholder="your.email@example.com"
          required
        />
      </motion.div>

      <motion.div className="contact-form__field contact-form__field--full" variants={fieldVariants}>
        <label htmlFor="subject" className="contact-form__label">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="contact-form__input"
          placeholder="What's this about?"
          required
        />
      </motion.div>

      <motion.div className="contact-form__field contact-form__field--full" variants={fieldVariants}>
        <label htmlFor="message" className="contact-form__label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-form__textarea"
          placeholder="Tell me about your project or how I can help you..."
          rows={5}
          required
        />
      </motion.div>

      <motion.div variants={fieldVariants}>
        <button type="submit" className={getSubmitClassName()} disabled={!isFormValid || status === "loading"}>
          <div className="contact-form__submit-content">{getSubmitContent()}</div>
        </button>

        {message && (
          <motion.div
            className={`contact-form__message ${status === "success" ? "contact-form__message--success" : "contact-form__message--error"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {message}
          </motion.div>
        )}
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
