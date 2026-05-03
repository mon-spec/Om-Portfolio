import { useState, useEffect } from 'react';
import { User, Send } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex flex-between items-center">
        <a href="#home" className="nav-logo gradient-text">
          PORTFOLIO.
        </a>

        <div className="flex items-center gap-4">
          <ul className="nav-links flex gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-2" style={{ marginLeft: '1rem' }}>
            <a href="#about" className="flex-center" style={{ color: 'inherit' }}><User size={20} /></a>
            <a href="#contact" className="flex-center" style={{ color: 'inherit' }}><Send size={20} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
