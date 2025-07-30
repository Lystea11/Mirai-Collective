import React from 'react';
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

export default function App() {
  return (
    <div className="main-container">
      <ParallaxBackground />
      <Navbar />
      <main>
        <Hero />
        <div className="hero-to-about-transition"></div>
        <About id="about" />
        <div className="about-to-mission-transition"></div>
        <Mission id="mission" />
        <div className="mission-to-partners-transition"></div>
        <Partners id="partners" />
        <div className="partners-to-works-transition"></div>
        <HowItWorks id="how-it-works" />
        <div className="works-to-contact-transition"></div>
        <Contact id="contact" />
        <div className="contact-to-footer-transition"></div>
      </main>
      <Footer />
    </div>
  );
}