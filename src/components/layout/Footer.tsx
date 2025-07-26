import { Link } from 'react-router-dom';
import logo from '../../assets/axon-logo.svg';

const navigation = {
  main: [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/services' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Acerca de', href: '/about' },
    { name: 'Contacto', href: '/contact' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 0H4.188C1.88 0 0 1.88 0 4.188v15.624C0 22.12 1.88 24 4.188 24h15.624C22.12 24 24 22.12 24 19.812V4.188C24 1.88 22.12 0 19.812 0zM8 19h-3V8h3v11zM6.5 6.732c-.97 0-1.75-.73-1.75-1.75 0-1.02.78-1.75 1.75-1.75s1.75.73 1.75 1.75c0 1.02-.779 1.75-1.75 1.75zM20 19h-3v-5.604c0-1.25-.027-2.856-1.74-2.856-1.741 0-2.008 1.36-2.008 2.766V19h-3V8h2.877v1.318h.041c.447-.848 1.536-1.74 3.166-1.74 3.383 0 4.006 2.224 4.006 5.113V19z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer style={{backgroundColor: 'var(--color-light)'}}>
      <div className="container-custom" style={{paddingTop: '3rem', paddingBottom: '4rem'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '2rem'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img
                style={{height: '2.5rem'}}
                src={logo}
                alt="Axon.app Logo"
              />
              <span style={{marginLeft: '0.75rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-dark)'}}>Axon.app</span>
            </div>
            <p style={{fontSize: '1rem', color: '#4b5563', maxWidth: '24rem'}}>
              Empresa de desarrollo de aplicaciones, páginas y automatización de procesos. Ofrecemos soluciones tecnológicas de alta calidad.
            </p>
            <div style={{display: 'flex', gap: '1.5rem'}}>
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} style={{color: '#6b7280', transition: 'color 0.2s'}}>
                  <span style={{position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0'}}>{item.name}</span>
                  <item.icon style={{height: '1.5rem', width: '1.5rem'}} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div style={{marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
            <div>
              <h3 style={{fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-dark)'}}>Navegación</h3>
              <ul style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} style={{fontSize: '1rem', color: '#4b5563', transition: 'color 0.2s'}}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-dark)'}}>Contacto</h3>
              <ul style={{marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <li>
                  <a href="mailto:info@axon.app" style={{fontSize: '1rem', color: '#4b5563', transition: 'color 0.2s'}}>
                    info@axon.app
                  </a>
                </li>
                <li style={{fontSize: '1rem', color: '#4b5563'}}>
                  +123 456 7890
                </li>
                <li style={{fontSize: '1rem', color: '#4b5563'}}>
                  Calle Principal #123, Ciudad
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{marginTop: '3rem', borderTopWidth: '1px', borderColor: '#e5e7eb', paddingTop: '2rem'}}>
          <p style={{fontSize: '1rem', color: '#6b7280', textAlign: 'center'}}>
            &copy; {new Date().getFullYear()} Axon.app. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
