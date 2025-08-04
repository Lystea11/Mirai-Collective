import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const words = ["Global Impact", "Social\u00A0Innovation", "Shared Purpose"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });
  
  // This hook listens for changes in scroll progress and updates the word.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Split into perfect thirds: 0-0.33, 0.33-0.66, 0.66-1.0
    let wordIndex;
    if (latest < 0.33) {
      wordIndex = 0;
    } else if (latest < 0.66) {
      wordIndex = 1;
    } else {
      wordIndex = 2;
    }
    
    if (words[wordIndex] !== currentWord) {
      setCurrentWord(words[wordIndex]);
    }
  });

  return (
    <section ref={heroRef} className="hero-container">
      <div className="hero-content-sticky">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title-wrapper">
            <span>Bridge</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ 
                  opacity: 0, 
                  y: -30, 
                  filter: "blur(10px)",
                  scale: 0.8
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  scale: 1
                }}
                exit={{ 
                  opacity: 0, 
                  y: 30, 
                  filter: "blur(10px)",
                  scale: 1.1
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeInOut",
                  opacity: { duration: 0.2 },
                  filter: { duration: 0.15 }
                }}
                className="hero-title-word"
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
            <span>to Japan</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}