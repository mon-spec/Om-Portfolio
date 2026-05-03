import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code />, label: 'Experience', value: '2+ Years' },
    { icon: <Palette />, label: 'Projects', value: '20+' },
    { icon: <Zap />, label: 'Performance', value: '100%' },
  ];

  return (
    <section id="about" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            About Me
          </motion.h2>
          <div className="title-line"></div>
        </div>

        <div className="grid grid-2 gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              I am a passionate developer with a keen eye for detail and a love for creating intuitive user interfaces. My journey in tech started with a simple "Hello World" and has evolved into building complex web applications.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              I thrive in collaborative environments and enjoy solving challenging problems with elegant solutions.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-box">
                  <div style={{ color: 'white', marginBottom: '0.5rem' }} className="flex-center">{stat.icon}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ paddingLeft: '2rem' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <User style={{ color: 'white' }} /> Personal Info
            </h3>
            <div className="flex flex-col gap-2">
              <div className="info-row">
                <span className="info-label">Name:</span>
                <span>Om Nandre</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span>omnandre123@gmail.com</span>
              </div>
              <div className="info-row">
                <span className="info-label">Education:</span>
                <span>B.Tech in Computer Engineering</span>
              </div>
              <div className="info-row">
                <span className="info-label">Location:</span>
                <span>Shirpur, Dhule</span>
              </div>
            </div>
            <div style={{ marginTop: '2.5rem' }}>
               <button className="btn btn-outline">
                 Download CV
               </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
