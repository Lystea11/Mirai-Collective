import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Users, Target, Heart, Lightbulb, Shield } from 'lucide-react';
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function AboutPage() {
  const features = [
    { 
      icon: <Globe size={32} />, 
      title: "Global Perspective",
      text: "We bring a unique international viewpoint to every partnership, understanding both global trends and local nuances.",
      details: "Our team consists of students from diverse international backgrounds, each bringing unique cultural insights and global perspectives to our work."
    },
    { 
      icon: <Users size={32} />, 
      title: "Dedicated Partnership",
      text: "Every collaboration is built on trust, transparency, and a shared commitment to creating lasting social impact.",
      details: "We believe in long-term relationships that go beyond simple transactions. Our partnerships are built on mutual respect and shared values."
    },
    { 
      icon: <Target size={32} />, 
      title: "Audience Engagement",
      text: "We excel at connecting international causes with Japanese communities through culturally-aware engagement strategies.",
      details: "Understanding Japanese culture is crucial for successful engagement. We leverage our local knowledge to create meaningful connections."
    },
    {
      icon: <Heart size={32} />,
      title: "Youth-Led Innovation",
      text: "Driven by passionate students who bring fresh perspectives and innovative approaches to social change.",
      details: "Our student-led approach ensures that we stay current with trends and maintain the energy needed for impactful change."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Creative Solutions",
      text: "We develop unique, culturally-sensitive approaches to overcome the challenges of cross-cultural nonprofit work.",
      details: "Every challenge is an opportunity for innovation. We pride ourselves on finding creative solutions to complex problems."
    },
    {
      icon: <Shield size={32} />,
      title: "Sustainable Impact",
      text: "Focus on building long-term, sustainable programs that create lasting change in communities.",
      details: "Sustainability is at the core of everything we do. We build programs designed to thrive long after our initial involvement."
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
          <div className="story-section">
            <h1>About Mirai Collective</h1>
            <p className="page-subtitle-inline">Building bridges between global impact and local action</p>
            <h2>Our Story</h2>
            <p className="story-text">
              Mirai Collective (未来, "future") was born from the observation that Japan is lacking much of the international awareness that other countries have, such as global non-profits helping third-world countries going unnoticed or completely unknown in Japan. 
            </p>
            <p className="story-text">
              Founded by 2 passionate students in Japan, we recognized the untapped potential for international nonprofits to create meaningful impact in Japanese communities. Our mission became clear: to serve as the dedicated bridge that aids nonprofits create national recognition and fundraising in Japan.
            </p>
          </div>

          <div className="features-expanded">
            <h2>What Sets Us Apart</h2>
            <div className="features-grid-expanded">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card-expanded"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="feature-icon-expanded">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p className="feature-description">{feature.text}</p>
                  <p className="feature-details">{feature.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="team-section">
            <h2>Who Are We</h2>
            <div className="team-grid">
              <motion.div
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="team-avatar">
                  <div className="avatar-placeholder ceo">CEO</div>
                </div>
                <div className="team-info">
                  <h3>Co-Founder & CEO</h3>
                  <p className="team-role">Chief Executive Officer</p>
                  <p className="team-description">
                    Visionary leader driving strategic partnerships and organizational growth. Passionate about bridging cultural gaps to create meaningful global impact.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="team-avatar">
                  <div className="avatar-placeholder coo">COO</div>
                </div>
                <div className="team-info">
                  <h3>Co-Founder & COO</h3>
                  <p className="team-role">Chief Operating Officer</p>
                  <p className="team-description">
                    Operations expert ensuring seamless execution of our mission. Specializes in building sustainable systems and maintaining operational excellence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="team-avatar">
                  <div className="avatar-placeholder comm">COM</div>
                </div>
                <div className="team-info">
                  <h3>Communications Officer</h3>
                  <p className="team-role">Strategic Communications</p>
                  <p className="team-description">
                    Creative communicator crafting compelling narratives that resonate across cultures. Expert in audience engagement and brand storytelling.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="vision-section">
            <h2>Our Vision</h2>
            <p className="vision-text">
              We envision a world where geographic boundaries don't limit the reach of positive change, as this has already been partially completed with the internet. There are still large communities that go unnoticed or completely unknown in Japan. Through strategic partnerships and culturally-aware implementation, we're creating a new model for international nonprofit collaboration that respects local contexts while achieving global impact.
            </p>
          </div>
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
}