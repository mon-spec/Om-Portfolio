import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ommImage from '../assets/omm.webp';

const Hero = () => {
  return (
    <section id="home" className="section hero-section flex items-center">
      <div className="container grid grid-2 items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">
            Available for work
          </span>
          <h1 className="hero-title">
            Design <br /> 
            <span className="gradient-text">Experiences.</span> <br />
            Build Reality.
          </h1>
          <p className="hero-subtitle">
            I'm a full-stack developer specializing in building exceptional digital experiences that are fast, accessible, and visually stunning.
          </p>
          <div className="flex gap-2">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-image-container"
        >
          <div className="hero-glow"></div>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <motion.div 
               className="hero-placeholder flex-center" 
               style={{ overflow: 'hidden' }}
               animate={{ 
                 y: [0, -15, 0],
               }}
               transition={{ 
                 duration: 5, 
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
            >
               <img 
                 src={ommImage} 
                 alt="Om Nandre" 
                 style={{ 
                   width: '100%', 
                   height: '100%', 
                   objectFit: 'cover' 
                 }} 
               />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
