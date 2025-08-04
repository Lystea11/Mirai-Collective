import React from 'react';
import { motion } from 'framer-motion';
import { Search, Handshake, TrendingUp } from 'lucide-react';
import ClickableTitle from './ClickableTitle';

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
      title: 'Research & Compatiblity',
      description: 'We research and find valuable non-profits that align with our mission and values. We ensure that our partnerships are sustainable and long-term.',
    },
    {
      icon: <Handshake size={48} />,
      title: 'Partnership & Planning',
      description: 'We create partnership agreements that provide a new chapter in the non-profit, in Japan.',
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Growth & Impact',
      description: 'Our team then fundraises, raises awareness, and builds a community of donors. All income goes straight to the dedicated non-profit.',
    },
  ];

  return (
    <section id={id}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ClickableTitle to="/how-it-works">
          <h2>How We Work</h2>
        </ClickableTitle>
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