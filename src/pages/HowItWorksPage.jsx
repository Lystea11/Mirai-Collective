import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Handshake, TrendingUp, FileCheck, Users, Target, BarChart3 } from 'lucide-react';
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

const stepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.3 + 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Search size={48} />,
      title: 'Research & Compatibility',
      description: 'We research and find valuable non-profits that align with our mission and values. We ensure that our partnerships are sustainable and long-term.',
      detailedProcess: [
        "Comprehensive mission alignment assessment",
        "Financial sustainability evaluation",
        "Cultural compatibility analysis",
        "Impact measurement capabilities review"
      ],
      timeline: "2-4 weeks",
      outcome: "Partnership viability report"
    },
    {
      icon: <Handshake size={48} />,
      title: 'Partnership & Planning',
      description: 'We create partnership agreements that provide a new chapter in the non-profit, in Japan.',
      detailedProcess: [
        "Legal framework establishment",
        "Strategic planning sessions",
        "Resource allocation planning",
        "Timeline and milestone setting"
      ],
      timeline: "3-6 weeks",
      outcome: "Signed partnership agreement"
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Growth & Impact',
      description: 'Our team then fundraises, raises awareness, and builds a community of donors. All income goes straight to the dedicated non-profit.',
      detailedProcess: [
        "Community outreach and engagement",
        "Fundraising campaign development",
        "Donor relationship management",
        "Impact tracking and reporting"
      ],
      timeline: "Ongoing",
      outcome: "Sustainable Japanese operations"
    }
  ];

  const supportServices = [
    {
      icon: <FileCheck size={32} />,
      title: "Legal & Compliance",
      description: "Navigate Japanese regulatory requirements and ensure full compliance for international nonprofit operations."
    },
    {
      icon: <Users size={32} />,
      title: "Community Building",
      description: "Develop authentic relationships with local communities and build networks of engaged supporters and volunteers."
    },
    {
      icon: <Target size={32} />,
      title: "Strategic Marketing",
      description: "Create culturally-aware marketing campaigns that resonate with Japanese audiences and drive meaningful engagement."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Impact Measurement",
      description: "Implement robust tracking systems to measure and report on the social impact of your Japanese operations."
    }
  ];

  const successMetrics = [
    { metric: "Partnership Success Rate", value: "95%", description: "Of our evaluated partnerships achieve their first-year goals" },
    { metric: "Community Engagement", value: "3x", description: "Average increase in local community involvement" },
    { metric: "Fundraising Growth", value: "250%", description: "Average growth in fundraising within first two years" },
    { metric: "Sustainability Rate", value: "90%", description: "Of partnerships continue beyond initial 3-year period" }
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
          <div className="process-overview">
            <h1>How We Work</h1>
            <p className="page-subtitle-inline">A proven process for international nonprofit success in Japan</p>
            <h2>Our Methodology</h2>
            <p className="overview-text">
              Our three-phase approach has been refined through years of experience working with international nonprofits. Each phase builds upon the previous one, ensuring a smooth transition from partnership to sustainable operations in Japan.
            </p>
          </div>

          <div className="detailed-steps">
            <h2>The Process</h2>
            <div className="steps-detailed-grid">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="step-card-detailed"
                  custom={index}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="step-header">
                    <div className="step-icon-detailed">{step.icon}</div>
                    <div className="step-number-badge">Phase {index + 1}</div>
                  </div>
                  
                  <h3>{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  
                  <div className="step-details">
                    <h4>Detailed Process:</h4>
                    <ul className="process-list">
                      {step.detailedProcess.map((process, idx) => (
                        <li key={idx}>{process}</li>
                      ))}
                    </ul>
                    
                    <div className="step-meta">
                      <div className="timeline">
                        <strong>Timeline:</strong> {step.timeline}
                      </div>
                      <div className="outcome">
                        <strong>Key Outcome:</strong> {step.outcome}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="support-services">
            <h2>Comprehensive Support Services</h2>
            <p>Beyond our core process, we provide ongoing support across all areas of nonprofit operations:</p>
            <div className="services-grid">
              {supportServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="success-metrics">
            <h2>Proven Results</h2>
            <div className="metrics-grid">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="metric-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="metric-value">{metric.value}</div>
                  <h3>{metric.metric}</h3>
                  <p>{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="next-steps">
            <h2>Ready to Get Started?</h2>
            <p>
              If you're an international nonprofit interested in expanding to Japan, we'd love to discuss how our proven process can help you achieve your goals.
            </p>
            <Link to="/contact" className="cta-button">
              Begin Your Journey
            </Link>
          </div>
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
}