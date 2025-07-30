import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Determine current section for adaptive styling
      const heroSection = document.querySelector('.hero-container');
      const aboutSection = document.querySelector('#about');
      const missionSection = document.querySelector('#mission');
      const partnersSection = document.querySelector('#partners');
      const worksSection = document.querySelector('#how-it-works');
      const contactSection = document.querySelector('#contact');
      
      if (heroSection && scrollY < heroSection.offsetHeight) {
        setCurrentSection('hero');
      } else if (aboutSection && scrollY >= aboutSection.offsetTop - 100 && scrollY < (missionSection?.offsetTop || Infinity) - 100) {
        setCurrentSection('about');
      } else if (missionSection && scrollY >= missionSection.offsetTop - 100 && scrollY < (partnersSection?.offsetTop || Infinity) - 100) {
        setCurrentSection('mission');
      } else if (partnersSection && scrollY >= partnersSection.offsetTop - 100 && scrollY < (worksSection?.offsetTop || Infinity) - 100) {
        setCurrentSection('partners');
      } else if (worksSection && scrollY >= worksSection.offsetTop - 100 && scrollY < (contactSection?.offsetTop || Infinity) - 100) {
        setCurrentSection('works');
      } else if (contactSection && scrollY >= contactSection.offsetTop - 100) {
        setCurrentSection('contact');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} navbar-${currentSection}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-logo">
            <span className="logo-m">M</span>
          </div>
          <span className="brand-text">Mirai Collective</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="navbar-links desktop-nav">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About Us
          </button>
          <button onClick={() => scrollToSection('mission')} className="nav-link">
            Our Mission
          </button>
          <button onClick={() => scrollToSection('partners')} className="nav-link">
            Partners
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="nav-link">
            How It Works
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <motion.div
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="hamburger-line"
          />
          <motion.div
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="hamburger-line"
          />
          <motion.div
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="hamburger-line"
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-nav-links">
              <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
                About Us
              </button>
              <button onClick={() => scrollToSection('mission')} className="mobile-nav-link">
                Our Mission
              </button>
              <button onClick={() => scrollToSection('partners')} className="mobile-nav-link">
                Partners
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="mobile-nav-link">
                How It Works
              </button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}