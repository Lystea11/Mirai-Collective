import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users2, CheckCircle } from 'lucide-react';
import ClickableTitle from './ClickableTitle';

const sectionVariants = {
  hidden: { opacity: 0.8 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
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
      title: "WAFAA",
      description: "The Women and Families Ascending Association provides all individuals and families with social programs that vary from hotlines, career developments courses, and therapy to name a few."
    },
    { 
      icon: <Shield size={24} />, 
      title: "Reach for Uganda",
      description: "Reach for Uganda is an organization that partners with communities in rural eastern uganda to enhance quality of life and individual potential through sustainable education, healthcare, and community development initiatives."
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
      <ClickableTitle to="/partners">
        <h2>Strategic Partnerships</h2>
      </ClickableTitle>
      
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