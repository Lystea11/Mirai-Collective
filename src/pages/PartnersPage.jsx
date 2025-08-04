import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Shield, Users2, CheckCircle, ExternalLink, Heart, Globe } from 'lucide-react';
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

const partnerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 + 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function PartnersPage() {
  const partnerships = [
    { 
      icon: <Award size={32} />, 
      title: "WAFAA",
      fullName: "Women and Families Ascending Association",
      description: "The Women and Families Ascending Association provides all individuals and families with social programs that vary from hotlines, career developments courses, and therapy to name a few.",
      detailedDescription: "WAFAA represents our commitment to supporting organizations that empower women and families. Their comprehensive approach to social support aligns perfectly with our mission of creating sustainable community impact.",
      impact: [
        "24/7 support hotlines for families in crisis",
        "Career development programs for women",
        "Mental health and therapy services",
        "Community workshops and educational programs"
      ],
      location: "International",
      focus: "Women's Empowerment & Family Support",
      website: "#"
    },
    { 
      icon: <Shield size={32} />, 
      title: "Reach for Uganda",
      fullName: "Reach for Uganda Foundation",
      description: "Reach for Uganda is an organization that partners with communities in rural eastern uganda to enhance quality of life and individual potential through sustainable education, healthcare, and community development initiatives.",
      detailedDescription: "Our partnership with Reach for Uganda demonstrates our commitment to international development and education. Their grassroots approach to community development serves as a model for sustainable impact.",
      impact: [
        "Sustainable education programs in rural communities",
        "Healthcare access and medical support",
        "Community development initiatives",
        "Youth leadership and mentorship programs"
      ],
      location: "Eastern Uganda",
      focus: "Education & Community Development",
      website: "#"
    }
  ];

  const partnershipProcess = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "We evaluate potential partners based on mission alignment, sustainability, and impact potential."
    },
    {
      step: "02",
      title: "Cultural Analysis",
      description: "We analyze how the organization's work can be adapted and integrated into Japanese cultural contexts."
    },
    {
      step: "03",
      title: "Strategic Planning",
      description: "Together, we develop comprehensive plans for establishing and scaling operations in Japan."
    },
    {
      step: "04",
      title: "Implementation",
      description: "We provide ongoing support for fundraising, awareness campaigns, and community building."
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
          <div className="partnership-philosophy">
            <h1>Strategic Partnerships</h1>
            <p className="page-subtitle-inline">Building bridges to global impact</p>
            <h2>Our Partnership Philosophy</h2>
            <p className="philosophy-text">
              At Mirai Collective, partnerships aren't just collaborations—they're deep, meaningful relationships built on shared values and mutual respect. We carefully select organizations whose missions resonate with our commitment to creating sustainable, community-driven change.
            </p>
          </div>

          <div className="current-partners">
            <h2>Current Partners</h2>
            <div className="partners-detailed-grid">
              {partnerships.map((partner, index) => (
                <motion.div
                  key={index}
                  className="partner-card-detailed"
                  custom={index}
                  variants={partnerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="partner-header">
                    <div className="partner-icon-detailed">{partner.icon}</div>
                    <div className="partner-title-section">
                      <h3>{partner.title}</h3>
                      <p className="partner-full-name">{partner.fullName}</p>
                      <div className="partner-meta">
                        <span className="partner-location">
                          <Globe size={16} />
                          {partner.location}
                        </span>
                        <span className="partner-focus">
                          <Heart size={16} />
                          {partner.focus}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="partner-description">{partner.description}</p>
                  <p className="partner-detailed-description">{partner.detailedDescription}</p>
                  
                  <div className="partner-impact">
                    <h4>Key Impact Areas:</h4>
                    <ul>
                      {partner.impact.map((impact, idx) => (
                        <li key={idx}>
                          <CheckCircle size={16} />
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="partner-actions">
                    <button className="partner-link">
                      <span>Learn More</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="partnership-process">
            <h2>Our Partnership Process</h2>
            <div className="process-grid">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className="process-step"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="step-number">{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="partnership-call-to-action">
            <h2>Interested in Partnering?</h2>
            <p>
              We're always looking for innovative nonprofit organizations that share our commitment to creating positive change. If you're interested in expanding your impact to Japan, we'd love to hear from you.
            </p>
            <Link to="/contact" className="cta-button">
              Start a Conversation
            </Link>
          </div>
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
}