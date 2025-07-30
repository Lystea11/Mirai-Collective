import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Mission({ id }) {
  return (
    <motion.section 
      id={id}
      className="mission-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Our Mission</h2>
      <div className="mission-content">
        <p className="mission-statement">
          Mirai Collective (未来, "future") exists to forge powerful connections. We believe that the world's most pressing challenges require global collaboration. Our mission is to act as the dedicated bridge for international non-profits, providing the strategic guidance, cultural insight, and operational support necessary to successfully establish and scale their vital work within Japan.
        </p>
        
        <div className="mission-values">
          <div className="value-item">
            <h3>Global Impact</h3>
            <p>Amplifying international non-profit missions through strategic Japanese market entry</p>
          </div>
          <div className="value-item">
            <h3>Cultural Bridge</h3>
            <p>Navigating complex cultural and regulatory landscapes with deep local expertise</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}