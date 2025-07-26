import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const menuItems = [
    { href: '#inicio', icon: 'fa-home', text: 'Inicio' },
    { href: '#nosotros', icon: 'fa-users', text: 'Nosotros' },
    { href: '#servicios', icon: 'fa-cogs', text: 'Servicios' },
    { href: '#tecnologias', icon: 'fa-laptop-code', text: 'Tecnologías' },
    { href: '#portafolio', icon: 'fa-briefcase', text: 'Portafolio' },
    { href: '#blog', icon: 'fa-blog', text: 'Blog' },
    { href: '#testimonios', icon: 'fa-comments', text: 'Testimonios' },
    { href: '#contacto', icon: 'fa-envelope', text: 'Contacto' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
      }
    }
  };

  return (
    <>
      <nav className={`navbar${isScrolled ? ' scrolled' : ''}`}>
        <a href="#inicio" className="navbar-logo" onClick={handleNavClick}>
          <div className="logo-icon">
            <span>A</span>
          </div>
          <span className="logo-text">Axon.app</span>
        </a>

        <div className="navbar-menu">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-item" onClick={handleNavClick}>
              <i className={`fas ${item.icon}`}></i> {item.text}
            </a>
          ))}
        </div>

        <button
          className={`mobile-menu-button${isMobileMenuOpen ? ' open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`menu-overlay${isMobileMenuOpen ? ' active' : ''}`} onClick={closeMobileMenu}>
        <div className={`mobile-menu${isMobileMenuOpen ? ' active' : ''}`}>
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-item" onClick={handleNavClick}>
              <i className={`fas ${item.icon}`}></i> {item.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
