import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      description: 'A modern e-commerce solution with real-time inventory management and secure payments.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demo: '#',
    },
    {
      title: 'AI Image Generator',
      category: 'AI / Frontend',
      image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?w=800&q=80',
      description: 'Creative tool that leverages AI to generate stunning images from text prompts.',
      tags: ['React', 'OpenAI', 'Tailwind', 'Cloudinary'],
      demo: '#',
    },
    {
      title: 'Task Management App',
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80',
      description: 'Collaborative tool for teams to manage projects and track progress in real-time.',
      tags: ['React', 'Firebase', 'Framer Motion'],
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            My Projects
          </motion.h2>
          <div className="title-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card project-card"
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="project-overlay">
                  <a href={project.demo} className="flex-center" style={{ 
                    padding: '0.75rem', 
                    background: 'white', 
                    borderRadius: '50%', 
                    color: '#0f172a'
                  }}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div style={{ padding: '1.5rem', flexGrow: '1' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'white', textTransform: 'uppercase', letterSpacing: '0.1rem' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
                <div className="flex gap-1" style={{ flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
