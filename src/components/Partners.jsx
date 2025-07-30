import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users2, CheckCircle } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const partnerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2 + 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Partners({ id }) {
  const partnerships = [
    { 
      icon: <Award size={24} />, 
      title: "Non-Profit Organizations",
      description: "International NGOs focused on social impact and global change"
    },
    { 
      icon: <Shield size={24} />, 
      title: "Government Relations",
      description: "Strategic partnerships with Japanese ministries and agencies"
    },
    { 
      icon: <Users2 size={24} />, 
      title: "Corporate Alliances",
      description: "Collaborations with leading Japanese corporations and foundations"
    },
    { 
      icon: <CheckCircle size={24} />, 
      title: "Academic Institutions",
      description: "Research partnerships with top universities and think tanks"
    }
  ];

  return (
    <motion.section 
      id={id}
      className="partners-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Strategic Partnerships</h2>
      
      <motion.div 
        className="partners-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {partnerships.map((partnership, index) => (
          <motion.div
            key={index}
            className="partner-card"
            custom={index}
            variants={partnerVariants}
          >
            <div className="partner-icon">{partnership.icon}</div>
            <h3>{partnership.title}</h3>
            <p>{partnership.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}