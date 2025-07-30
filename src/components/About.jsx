import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Target } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const featureVariants = {
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

export default function About({ id }) {
  const features = [
    { icon: <Globe size={24} />, text: "Global perspective with local expertise" },
    { icon: <Users size={24} />, text: "Dedicated partnership approach" },
    { icon: <Target size={24} />, text: "Strategic market entry solutions" }
  ];

  return (
    <motion.section 
      id={id}
      className="about-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>About Mirai Collective</h2>
      <p>
        As Japan's premier consultancy for international non-profits, we specialize in bridging the gap between global organizations and the Japanese market. With deep cultural understanding and extensive local networks, we transform complex market entry challenges into strategic opportunities for social impact.
      </p>
      
      <motion.div 
        className="about-features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="about-feature"
            custom={index}
            variants={featureVariants}
          >
            <div className="feature-icon">{feature.icon}</div>
            <span>{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}