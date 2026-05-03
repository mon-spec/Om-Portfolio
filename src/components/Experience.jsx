import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Frontend Developer',
      period: '2022 - Present',
      description: 'Leading the frontend team in developing high-performance React applications. Implemented micro-frontend architecture reducing build times by 40%.',
    },
    {
      company: 'Digital Pulse',
      role: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Developed responsive user interfaces for various client projects using React and Tailwind CSS. Optimized application performance by 30%.',
    },
    {
      company: 'Startup Hub',
      role: 'Web Development Intern',
      period: '2019 - 2020',
      description: 'Assisted in building landing pages and integrating RESTful APIs. Gained hands-on experience with modern JavaScript frameworks.',
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            My Experience
          </motion.h2>
          <div className="title-line"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="glass-card">
                <div className="flex flex-between items-center gap-2" style={{ flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                    <p style={{ color: 'white', fontWeight: '500' }}>{exp.company}</p>
                  </div>
                  <div className="period-badge">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem' }}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
