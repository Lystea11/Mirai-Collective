import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Target } from 'lucide-react';
import ClickableTitle from './ClickableTitle';

const sectionVariants = {
  hidden: { opacity: 0.8 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
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
    { icon: <Target size={24} />, text: "International Audience Engagement" }
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
      <ClickableTitle to="/about">
        <h2>About Mirai Collective</h2>
      </ClickableTitle>
      <p>
        Mirai Collective is a student-led platform based in Japan that partners with international nonprofits to bring their missions to life through youth-led action. By connecting global organizations with passionate student leaders, we make social impact accessible, localized, and community-driven—empowering the next generation to champion global change from Japan.
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