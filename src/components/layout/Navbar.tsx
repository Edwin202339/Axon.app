import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/axon-logo.svg';

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
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
      boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
      backdropFilter: scrolled ? 'blur(8px)' : 'none'
    }}>
      <nav className="container-custom" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0'}} aria-label="Global">
        <div style={{display: 'flex', flex: '1'}}>
          <Link to="/" style={{margin: '-0.375rem', padding: '0.375rem', display: 'flex', alignItems: 'center'}}>
            <img style={{height: '2rem'}} src={logo} alt="Axon.app" />
            <span style={{marginLeft: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-dark)'}}>Axon.app</span>
          </Link>
        </div>
        <div style={{display: 'flex', '@media (min-width: 1024px)': {display: 'none'}}}>
          <button
            type="button"
            style={{
              margin: '-0.625rem', 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: '0.375rem', 
              padding: '0.625rem',
              color: 'var(--color-dark)'
            }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span style={{position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0'}}>Abrir menú principal</span>
            <Bars3Icon style={{height: '1.5rem', width: '1.5rem'}} aria-hidden="true" />
          </button>
        </div>
        <div style={{display: 'none', '@media (min-width: 1024px)': {display: 'flex', gap: '2rem'}}}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              style={{
                fontSize: '0.875rem', 
                fontWeight: '600', 
                lineHeight: '1.5rem', 
                color: 'var(--color-dark)',
                transition: 'color 0.2s'
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div style={{display: 'none', '@media (min-width: 1024px)': {display: 'flex', flex: 1, justifyContent: 'flex-end'}}}>
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{fontSize: '0.875rem', fontWeight: '600'}}
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
