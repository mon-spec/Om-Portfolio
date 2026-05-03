import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Layout, Shield } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Layout />,
      skills: ['React', 'Next.js', 'TypeScript', 'CSS', 'Redux', 'Framer Motion'],
    },
    {
      title: 'Other',
      icon: <Shield />,
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Agile', 'Unit Testing'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Skills & Expertise
          </motion.h2>
          <div className="title-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
            >
              <div className="flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', color: 'white' }} className="flex-center">
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem' }}>{category.title}</h3>
              </div>
              <div className="flex gap-1" style={{ flexWrap: 'wrap' }}>
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
