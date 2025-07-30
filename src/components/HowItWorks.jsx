import React from 'react';
import { motion } from 'framer-motion';
import { Search, Handshake, TrendingUp } from 'lucide-react';

const stepVariants = {
  hidden: { opacity: 0.8 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

export default function HowItWorks({ id }) {
  const steps = [
    {
      icon: <Search size={48} />,
      title: 'Discovery & Strategy',
      description: 'We begin with a deep dive into your mission, goals, and operational model to develop a bespoke market-entry strategy for Japan.',
    },
    {
      icon: <Handshake size={48} />,
      title: 'Partnership & Localization',
      description: 'We connect you with key local stakeholders, adapt your messaging for cultural resonance, and navigate regulatory frameworks.',
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Growth & Impact',
      description: 'Our team provides ongoing support to ensure sustainable growth, helping you measure impact and expand your network.',
    },
  ];

  return (
    <section id={id}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>How We Work</h2>
        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="how-it-works-step"
              custom={index}
              variants={stepVariants}
            >
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}