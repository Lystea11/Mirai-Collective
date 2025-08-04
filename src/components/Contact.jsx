import React from 'react';
import { motion } from 'framer-motion';
import ClickableTitle from './ClickableTitle';

export default function Contact({ id }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Thank you for your message!');
  };

  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <ClickableTitle to="/contact">
        <h2>Connect With Us</h2>
      </ClickableTitle>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--subtle-gray)' }}>
        Ready to bring your vision to Japan? Let's discuss how we can build the future together.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="name" name="name" className="form-input" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" className="form-input" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" className="form-textarea" placeholder="Your Message" required></textarea>
        </div>
        <motion.button 
          type="submit" 
          className="submit-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}