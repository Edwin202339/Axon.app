import React from 'react';
import './About.css';

const About: React.FC = () => {
    
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-title">
                    <h2>Sobre Axon.app</h2>
                    <div className="title-underline"></div>
                </div>
                
                <div className="about-content">
                    <div className="about-image">
                        <img src="/images/about-team.jpg" alt="Equipo Axon.app" />
                    </div>
                    <div className="about-text">
                        <p>
                            En Axon.app, fusionamos creatividad, tecnología y estrategia para construir soluciones digitales que transforman negocios. Nuestro enfoque ágil y centrado en el usuario nos permite entregar productos de alto impacto. Lideramos proyectos desde la idea hasta el lanzamiento, con equipos expertos en desarrollo, diseño y crecimiento digital. Nos apasiona resolver desafíos complejos y convertir visiones en realidades funcionales y estéticamente atractivas.
                        </p>
                        <p>
                            Creemos firmemente en la colaboración transparente y en mantener una comunicación constante con nuestros clientes. Tu éxito es nuestro éxito, y trabajamos incansablemente para superar tus expectativas.
                        </p>
                    </div>
                </div>

                <div className="mission-vision">
                    <div className="mv-card">
                        <span className="icon">
                            <i className="fas fa-rocket"></i>
                        </span>
                        <h3>Misión</h3>
                        <p>Conectar tecnología e innovación para impulsar el crecimiento sostenible de empresas visionarias.</p>
                    </div>
                    <div className="mv-card">
                        <span className="icon">
                            <i className="fas fa-lightbulb"></i>
                        </span>
                        <h3>Visión</h3>
                        <p>Ser la plataforma de desarrollo digital de referencia global para startups y corporaciones.</p>
                    </div>
                </div>

                <div className="values-section">
                    <h2>Nuestros Valores</h2>
                    <div className="title-underline"></div>
                    
                    <div className="values-grid">
                        <div className="value-card">
                            <span className="icon">
                                <i className="fas fa-handshake"></i>
                            </span>
                            <h3>Colaboración</h3>
                            <p>Trabajamos codo a codo con nuestros clientes, asegurando que sus ideas se integren en cada fase del desarrollo.</p>
                        </div>
                        <div className="value-card">
                            <span className="icon">
                                <i className="fas fa-flask"></i>
                            </span>
                            <h3>Innovación</h3>
                            <p>Estamos siempre a la vanguardia, explorando nuevas tecnologías para ofrecer soluciones creativas y eficientes.</p>
                        </div>
                        <div className="value-card">
                            <span className="icon">
                                <i className="fas fa-shield-alt"></i>
                            </span>
                            <h3>Calidad</h3>
                            <p>Nos comprometemos a entregar productos robustos, seguros y de alto rendimiento que superen los estándares de la industria.</p>
                        </div>
                        <div className="value-card">
                            <span className="icon">
                                <i className="fas fa-users"></i>
                            </span>
                            <h3>Orientación al Cliente</h3>
                            <p>Ponemos las necesidades del usuario en el centro de todo lo que hacemos, diseñando experiencias intuitivas y valiosas.</p>
                        </div>
                        <div className="value-card">
                            <span className="icon">
                                <i className="fas fa-bolt"></i>
                            </span>
                            <h3>Agilidad</h3>
                            <p>Adoptamos metodologías ágiles para adaptarnos rápidamente a los cambios y entregar valor de forma continua.</p>
                        </div>
                        <div className="value-card">
                            <span className="icon">
                                <i className="fas fa-leaf"></i>
                            </span>
                            <h3>Sostenibilidad</h3>
                            <p>Desarrollamos soluciones pensando en el impacto a largo plazo, tanto tecnológico como ambiental y social.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
