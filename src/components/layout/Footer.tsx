import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <a href="#inicio" className="footer-logo">
              <div className="logo">A</div>
              <span className="logo-text">Axon.app</span>
            </a>
            <p className="footer-description">
              Innovando el futuro, uno de código a la vez. Especialistas en desarrollo de software,
              aplicaciones y experiencias digitales de alto impacto.
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              {/* ...más enlaces sociales... */}
            </div>
          </div>

          <div className="footer-column">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              {/* ...más enlaces... */}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contacto</h4>
            <div className="footer-info">
              <p><i className="fas fa-map-marker-alt"></i> Madrid, España</p>
              <p><i className="fas fa-envelope"></i> hola@axon.app</p>
              <p><i className="fas fa-phone-alt"></i> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p>&copy; 2025 Axon.app. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
