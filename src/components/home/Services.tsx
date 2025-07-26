import React from 'react';
import { ServiceCard } from '../shared/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      id: 'mobile',
      icon: '📱',
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas e híbridas para iOS y Android con diseño intuitivo y alto rendimiento.',
    },
    // ...más servicios
  ];

  return (
    <section id="servicios" className="fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
