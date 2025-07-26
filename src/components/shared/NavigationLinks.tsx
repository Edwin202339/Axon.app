import React from 'react';

interface NavLinksProps {
  onItemClick?: () => void;
}

const NavigationLinks: React.FC<NavLinksProps> = ({ onItemClick }) => {
  const links = [
    { href: '#nosotros', icon: 'fas fa-users', text: 'Nosotros' },
    { href: '#servicios', icon: 'fas fa-cog', text: 'Servicios' },
    { href: '#tecnologias', icon: 'fas fa-microchip', text: 'Tecnologías' },
    { href: '#portafolio', icon: 'fas fa-folder-open', text: 'Portafolio' },
    { href: '#blog', icon: 'fas fa-blog', text: 'Blog' },
    { href: '#testimonios', icon: 'fas fa-comment-dots', text: 'Testimonios' },
    { href: '#contacto', icon: 'fas fa-envelope', text: 'Contacto' }
  ];

  return (
    <>
      {links.map(link => (
        <a 
          key={link.href} 
          href={link.href} 
          onClick={onItemClick}
        >
          <i className={link.icon}></i> {link.text}
        </a>
      ))}
    </>
  );
};

export default NavigationLinks;
