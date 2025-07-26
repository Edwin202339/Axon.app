import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Contáctanos</h2>
        </div>
        <div className="contact">
          <div className="contact-info">
            <h3>Estamos listos para tu proyecto</h3>
            <p>Nos encantaría escuchar sobre tu idea y cómo podemos ayudarte.</p>
            <p><i className="fas fa-envelope"></i> <strong>Email:</strong> hola@axon.app</p>
            <p><i className="fas fa-phone-alt"></i> <strong>Teléfono:</strong> +1 (555) 123-4567</p>
            <p><i className="fas fa-map-marker-alt"></i> <strong>Oficina:</strong> Madrid, España</p>
            <button 
              className="btn-contact-modal"
              onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: 'modal-contact-form' }))}
            >
              Enviar un Mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
