import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/axon-logo.svg';
import './Navbar.css';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/services' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Acerca de', href: '/about' },
  { name: 'Contacto', href: '/contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-fixed ${scrolled ? 'header-scrolled' : ''}`}>
      <nav className="container-custom navbar-container" aria-label="Global">
        <div className="navbar-logo-container">
          <Link to="/" className="navbar-logo-link">
            <img className="navbar-logo" src={logo} alt="Axon.app" />
            <span className="navbar-logo-text">Axon.app</span>
          </Link>
        </div>
        <div className="navbar-mobile-menu">
          <button
            type="button"
            className="navbar-mobile-button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon style={{height: '1.5rem', width: '1.5rem'}} aria-hidden="true" />
          </button>
        </div>
        <div className="navbar-links">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="navbar-link"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="navbar-cta-container">
          <Link
            to="/contact"
            className="btn btn-primary navbar-cta"
          >
            Contáctanos
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-dark px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Axon.app" />
              <span className="ml-2 text-xl font-bold text-dark dark:text-white">Axon.app</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-dark dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
