import React from 'react';

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  icon,
  title,
  description
}) => {
  return (
    <div className="service-card fade-in">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button 
        className="btn-small" 
        onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: id }))}
      >
        Leer más
      </button>
    </div>
  );
};
