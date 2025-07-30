import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Partners from './components/Partners';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';
import './styles.css';

const sectionVariants = {
  hidden: { opacity: 0.8 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
};

export default function App() {
  return (
    <div className="main-container">
      <ParallaxBackground />
      <Navbar />
      <main>
        <Hero />
        <motion.div
          className="hero-to-about-transition"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>
        <About id="about" />
        <Mission id="mission" />
        <Partners id="partners" />
        <HowItWorks id="how-it-works" />
        <Contact id="contact" />
        <motion.div
          className="contact-to-footer-transition"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        ></motion.div>
      </main>
      <Footer />
    </div>
  );
}