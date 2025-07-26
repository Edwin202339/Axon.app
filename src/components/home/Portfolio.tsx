import React from 'react';
import { useModal } from '../../hooks/useModal';

interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 'project-1',
      image: 'https://placehold.co/600x400/4361ee/ffffff?text=FinTrack+Pro',
      title: 'FinTrack Pro',
      description: 'App de finanzas personales para iOS y Android'
    },
    // ...más proyectos
  ];

  return (
    <section id="portafolio" className="fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Proyectos Destacados</h2>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map(item => (
            <div key={item.id} className="portfolio-item fade-in">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <button 
                  className="btn-small"
                  onClick={() => window.dispatchEvent(new CustomEvent('openModal', { detail: item.id }))}
                >
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
