import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0.9 },
  visible: { opacity: 1 },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  hover: { 
    opacity: 1,
    transition: { 
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  hover: { 
    opacity: 0.6, 
    scale: 1.1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function ClickableSection({ children, to, className = "" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <motion.div
      className={`clickable-section ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      onClick={handleClick}
      style={{ 
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle glow effect */}
      <motion.div
        className="section-glow"
        variants={glowVariants}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      
      {/* Hover overlay */}
      <motion.div
        className="section-overlay"
        variants={overlayVariants}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
          pointerEvents: 'none',
          zIndex: 2
        }}
      />

      {/* Click indicator */}
      <motion.div
        className="click-indicator"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.3 }
        }}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#333',
          zIndex: 3,
          pointerEvents: 'none'
        }}
      >
        →
      </motion.div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </motion.div>
  );
}