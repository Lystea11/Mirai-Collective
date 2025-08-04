import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const titleVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const indicatorVariants = {
  rest: { opacity: 0, x: -10 },
  hover: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function ClickableTitle({ children, to, className = "" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <motion.div
      className={`clickable-title ${className}`}
      variants={titleVariants}
      initial="rest"
      whileHover="hover"
      onClick={handleClick}
      style={{ 
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-block',
        width: 'fit-content',
        margin: '0 auto'
      }}
    >
      {children}
      <motion.div
        className="click-indicator-title"
        variants={indicatorVariants}
        style={{
          position: 'absolute',
          right: '-30px',
          top: '0',
          bottom: '0',
          color: 'var(--highlight-blue)',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px'
        }}
      >
        <ArrowRight size={20} strokeWidth={2.5} />
      </motion.div>
    </motion.div>
  );
}