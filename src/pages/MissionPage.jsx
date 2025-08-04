import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Globe2, GitBranch, Compass } from 'lucide-react';
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

const valueVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2 + 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function MissionPage() {
  const coreValues = [
    {
      icon: <Target size={40} />,
      title: "Purposeful Impact",
      description: "Every partnership we forge is driven by a clear purpose: creating measurable, sustainable change that improves lives and strengthens communities.",
      principles: [
        "Data-driven approach to measuring success",
        "Long-term sustainability over short-term gains",
        "Community-centered solution design"
      ]
    },
    {
      icon: <GitBranch size={40} />,
      title: "Cultural Bridge",
      description: "We serve as more than translators; we're cultural interpreters who understand the nuances of both international nonprofit work and Japanese society.",
      principles: [
        "Deep respect for cultural differences",
        "Authentic relationship building",
        "Context-aware program adaptation"
      ]
    },
    {
      icon: <Globe2 size={40} />,
      title: "Global Collaboration",
      description: "We believe that the world's challenges require collective action that transcends borders, bringing together diverse perspectives for innovative solutions.",
      principles: [
        "Inclusive partnership models",
        "Cross-cultural knowledge sharing",
        "Collaborative problem-solving approaches"
      ]
    },
    {
      icon: <Compass size={40} />,
      title: "Ethical Leadership",
      description: "Our student-led approach ensures fresh perspectives while maintaining the highest standards of integrity and accountability in all our work.",
      principles: [
        "Transparent communication and reporting",
        "Ethical fundraising and resource allocation",
        "Continuous learning and improvement"
      ]
    }
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
          <div className="mission-statement-expanded">
            <h1>Our Mission</h1>
            <p className="page-subtitle-inline">Forging connections that shape the future</p>
            <h2>Mission Statement</h2>
            <p className="mission-text-large">
              Mirai Collective (未来, "future") exists to forge powerful connections between international nonprofits and Japanese communities. We believe that the world's most pressing challenges require global collaboration, and our mission is to act as the dedicated bridge providing strategic guidance, cultural insight, and operational support necessary to successfully establish and scale vital work within Japan.
            </p>
          </div>

          <div className="approach-section">
            <h2>Our Approach</h2>
            <div className="approach-grid">
              <div className="approach-item">
                <h3>Research & Analysis</h3>
                <p>We conduct thorough research to understand both the nonprofit's mission and the Japanese market landscape, ensuring perfect alignment before partnership begins.</p>
              </div>
              <div className="approach-item">
                <h3>Cultural Integration</h3>
                <p>Our team works to adapt international programs to Japanese cultural contexts while preserving the core mission and values.</p>
              </div>
              <div className="approach-item">
                <h3>Community Building</h3>
                <p>We focus on building authentic relationships within Japanese communities, creating sustainable networks of support and engagement.</p>
              </div>
              <div className="approach-item">
                <h3>Continuous Support</h3>
                <p>Our partnerships extend beyond initial setup, providing ongoing support to ensure long-term success and impact.</p>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2>Core Values</h2>
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  custom={index}
                  variants={valueVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                  <ul className="value-principles">
                    {value.principles.map((principle, idx) => (
                      <li key={idx}>{principle}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="impact-vision">
            <h2>Our Vision for Impact</h2>
            <p className="impact-text">
              We envision a future where international nonprofit work seamlessly integrates with local communities, creating a global network of collaboration that addresses challenges both locally and internationally. Through our work, we're not just facilitating partnerships—we're building a new model for cross-cultural social impact that can be replicated worldwide.
            </p>
          </div>
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
}