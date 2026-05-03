

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', background: 'var(--bg-main)' }}>
      <div className="container flex flex-between items-center" style={{ flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <a href="#home" className="nav-logo gradient-text">PORTFOLIO.</a>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>© {currentYear} Om Nandre. All rights reserved.</p>
        </div>
        
        <div className="flex gap-4">
          <a href="#about" style={{ fontSize: '0.9rem', color: 'inherit', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ fontSize: '0.9rem', color: 'inherit', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{ fontSize: '0.9rem', color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
        
        <div style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>
          Designed with metallic precision
        </div>
      </div>
    </footer>
  );
};

export default Footer;
