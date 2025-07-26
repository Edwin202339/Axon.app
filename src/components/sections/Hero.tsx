import React from 'react';
import '../home/Hero.css'; // Importar los estilos desde la ubicación correcta

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Transformamos ideas en software poderoso</h1>
                <p>En Axon.app creamos aplicaciones inteligentes, rápidas y escalables. Innovación con propósito, diseño con alma.</p>
                <a href="#contacto" className="btn">Empecemos tu proyecto</a>
            </div>
        </section>
    );
};

export default Hero;
