import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Map, User, Share, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
          <div className="title-line"></div>
        </div>

        <div className="grid grid-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ paddingRight: '2rem' }}
          >
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Let's discuss your project</h3>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="contact-icon-box">
                   <Mail size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem' }}>Email me at</p>
                  <p style={{ fontWeight: 'bold', color: 'white' }}>contact@omnandre.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem' }}>Call me</p>
                  <p style={{ fontWeight: 'bold', color: 'white' }}>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="contact-icon-box">
                  <Map size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem' }}>Location</p>
                  <p style={{ fontWeight: 'bold', color: 'white' }}>Shirpur, Dhule</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }} className="flex gap-2">
              <a href="#" className="contact-icon-box" style={{ width: '2.5rem', height: '2.5rem', border: '1px solid var(--border-color)', color: 'inherit' }}>
                <User size={18} />
              </a>
              <a href="#" className="contact-icon-box" style={{ width: '2.5rem', height: '2.5rem', border: '1px solid var(--border-color)', color: 'inherit' }}>
                <Share size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <form className="flex flex-col gap-2">
              <div className="grid grid-2 gap-2 form-row">
                <div className="flex flex-col gap-1">
                  <label style={{ fontSize: '0.85rem', fontWeight: '500' }}>Full Name</label>
                  <input type="text" placeholder="Om Nandre" className="form-input" />
                </div>
                <div className="flex flex-col gap-1">
                  <label style={{ fontSize: '0.85rem', fontWeight: '500' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" className="form-input" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label style={{ fontSize: '0.85rem', fontWeight: '500' }}>Subject</label>
                <input type="text" placeholder="How can I help you?" className="form-input" />
              </div>
              <div className="flex flex-col gap-1">
                <label style={{ fontSize: '0.85rem', fontWeight: '500' }}>Message</label>
                <textarea rows="5" placeholder="Tell me about your project..." className="form-input" style={{ resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary flex-center">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
