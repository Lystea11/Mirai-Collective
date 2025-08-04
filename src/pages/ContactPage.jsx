import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: -100 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8
};

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      info: "hello@miraicollective.org",
      description: "Get in touch for partnerships, questions, or collaboration opportunities"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      info: "+81 (0)3-XXXX-XXXX",
      description: "Available Monday-Friday, 9:00-18:00 JST"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      info: "Tokyo, Japan",
      description: "Schedule a meeting at our Tokyo office"
    }
  ];

  const inquiryTypes = [
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'press', label: 'Press & Media' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'support', label: 'Technical Support' }
  ];

  return (
    <motion.div
      className="page-container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Navbar />
      <div className="detailed-page">
        

        <motion.section 
          className="detailed-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="contact-intro-section">
            <h1>Connect With Us</h1>
            <p className="page-subtitle-inline">Ready to bring your vision to Japan? Let's discuss how we can build the future together.</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send us a message</h2>
              <motion.form 
                className="contact-form-detailed" 
                onSubmit={handleSubmit}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="organization">Organization</label>
                    <input 
                      type="text" 
                      id="organization" 
                      name="organization" 
                      value={formData.organization}
                      onChange={handleChange}
                      className="form-input" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Inquiry Type</label>
                    <select 
                      id="type" 
                      name="type" 
                      value={formData.type}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea" 
                    rows="6"
                    placeholder="Tell us about your organization and how we might work together..."
                    required
                  ></textarea>
                </div>

                <motion.button 
                  type="submit" 
                  className="submit-button-detailed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>

            <div className="contact-info-section">
              <h2>Get in touch</h2>
              <p className="contact-intro">
                We're here to help international nonprofits expand their impact to Japan. Whether you're exploring a partnership or have questions about our process, we'd love to hear from you.
              </p>

              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-card"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <h3>{info.title}</h3>
                    <p className="contact-detail">{info.info}</p>
                    <p className="contact-description">{info.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="response-time">
                <h3>Response Time</h3>
                <p>We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please mention "URGENT" in your subject line.</p>
              </div>

              <div className="meeting-cta">
                <h3>Prefer to meet in person?</h3>
                <p>We're always happy to meet face-to-face to discuss potential partnerships. Schedule a coffee meeting or visit our Tokyo office.</p>
                <button className="schedule-button">Schedule a Meeting</button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
}