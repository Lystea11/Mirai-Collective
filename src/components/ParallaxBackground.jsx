import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, 
  Network, 
  Zap, 
  Target, 
  Layers, 
  TrendingUp, 
  BarChart3, 
  Hexagon, 
  Triangle, 
  Diamond,
  Settings,
  Cpu,
  Wifi,
  Radio,
  Activity,
  Eye,
  Star,
  Circle
} from 'lucide-react';

const SmoothIcon = ({ icon: Icon, className, yRange, rotateRange, size = 64, delay = 0 }) => {
  const { scrollYProgress } = useScroll();
  
  // Smoother transforms without easing options (not supported in useTransform)
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange || [0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.8, 0.8, 0.3]);
  
  return (
    <motion.div 
      className={`parallax-icon ${className}`}
      style={{ y, rotate, opacity }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
      whileInView={{
        scale: [1, 1.1, 1],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <Icon 
        size={size} 
        strokeWidth={1.5}
        className="icon-glow"
      />
    </motion.div>
  );
};

export default function ParallaxBackground() {
  return (
    <div className="parallax-bg">
      {/* Layer 1 - Corporate Icons (Fastest) */}
      <SmoothIcon 
        icon={Globe} 
        className="icon-1" 
        yRange={[0, -400]} 
        rotateRange={[0, 180]} 
        size={80} 
        delay={0.1}
      />
      <SmoothIcon 
        icon={Network} 
        className="icon-2" 
        yRange={[0, 350]} 
        rotateRange={[0, -90]} 
        size={72} 
        delay={0.2}
      />
      <SmoothIcon 
        icon={Target} 
        className="icon-3" 
        yRange={[0, -280]} 
        rotateRange={[0, 360]} 
        size={68} 
        delay={0.3}
      />
      
      {/* Layer 2 - Tech Icons (Fast) */}
      <SmoothIcon 
        icon={Cpu} 
        className="icon-4" 
        yRange={[0, 220]} 
        rotateRange={[0, -180]} 
        size={64} 
        delay={0.4}
      />
      <SmoothIcon 
        icon={Zap} 
        className="icon-5" 
        yRange={[0, -180]} 
        rotateRange={[0, 90]} 
        size={60} 
        delay={0.5}
      />
      <SmoothIcon 
        icon={Settings} 
        className="icon-6" 
        yRange={[0, 160]} 
        rotateRange={[0, -270]} 
        size={76} 
        delay={0.6}
      />
      
      {/* Layer 3 - Data Icons (Medium) */}
      <SmoothIcon 
        icon={BarChart3} 
        className="icon-7" 
        yRange={[0, -120]} 
        rotateRange={[0, 45]} 
        size={56} 
        delay={0.7}
      />
      <SmoothIcon 
        icon={TrendingUp} 
        className="icon-8" 
        yRange={[0, 100]} 
        rotateRange={[0, -45]} 
        size={52} 
        delay={0.8}
      />
      <SmoothIcon 
        icon={Activity} 
        className="icon-9" 
        yRange={[0, -80]} 
        rotateRange={[0, 120]} 
        size={48} 
        delay={0.9}
      />
      
      {/* Layer 4 - Connection Icons (Medium-Slow) */}
      <SmoothIcon 
        icon={Wifi} 
        className="icon-10" 
        yRange={[0, 70]} 
        rotateRange={[0, -60]} 
        size={44} 
        delay={1.0}
      />
      <SmoothIcon 
        icon={Radio} 
        className="icon-11" 
        yRange={[0, -50]} 
        rotateRange={[0, 30]} 
        size={40} 
        delay={1.1}
      />
      <SmoothIcon 
        icon={Eye} 
        className="icon-12" 
        yRange={[0, 40]} 
        rotateRange={[0, -30]} 
        size={36} 
        delay={1.2}
      />
      
      {/* Layer 5 - Geometric Icons (Slow) */}
      <SmoothIcon 
        icon={Hexagon} 
        className="icon-13" 
        yRange={[0, -30]} 
        rotateRange={[0, 90]} 
        size={32} 
        delay={1.3}
      />
      <SmoothIcon 
        icon={Triangle} 
        className="icon-14" 
        yRange={[0, 25]} 
        rotateRange={[0, -90]} 
        size={28} 
        delay={1.4}
      />
      <SmoothIcon 
        icon={Diamond} 
        className="icon-15" 
        yRange={[0, -20]} 
        rotateRange={[0, 180]} 
        size={24} 
        delay={1.5}
      />
      
      {/* Layer 6 - Accent Icons (Slowest) */}
      <SmoothIcon 
        icon={Star} 
        className="icon-16" 
        yRange={[0, 15]} 
        rotateRange={[0, -45]} 
        size={20} 
        delay={1.6}
      />
      <SmoothIcon 
        icon={Circle} 
        className="icon-17" 
        yRange={[0, -10]} 
        rotateRange={[0, 60]} 
        size={16} 
        delay={1.7}
      />
      <SmoothIcon 
        icon={Layers} 
        className="icon-18" 
        yRange={[0, 8]} 
        rotateRange={[0, -30]} 
        size={18} 
        delay={1.8}
      />
    </div>
  );
}