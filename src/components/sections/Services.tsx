import React from 'react';
import './Services.css';

const Services: React.FC = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-title">
                    <h2>Nuestros Servicios</h2>
                    <div className="title-underline"></div>
                </div>
                
                <div className="services-grid">
                    <div className="service-card">
                        <span className="icon">
                            <i className="fas fa-mobile-alt"></i>
                        </span>
                        <h3>Aplicaciones Móviles</h3>
                        <p>Desarrollamos apps nativas e híbridas para iOS y Android con diseño intuitivo y alto rendimiento.</p>
                        <a href="#" className="btn-primary" data-modal="mobile-app-modal">Leer más</a>
                    </div>
                    
                    <div className="service-card service-highlight">
                        <span className="icon">
                            <i className="fas fa-globe"></i>
                        </span>
                        <h3>Desarrollo Web</h3>
                        <p>Sitios web modernos, rápidos y escalables usando React, Vue, Node.js, Next.js y más.</p>
                        <a href="#" className="btn-primary" data-modal="web-dev-modal">Leer más</a>
                    </div>
                    
                    <div className="service-card">
                        <span className="icon">
                            <i className="fas fa-cogs"></i>
                        </span>
                        <h3>Software a Medida</h3>
                        <p>Sistemas empresariales personalizados que automatizan procesos y aumentan la productividad.</p>
                        <a href="#" className="btn-primary" data-modal="custom-software-modal">Leer más</a>
                    </div>
                    
                    <div className="service-card">
                        <span className="icon">
                            <i className="fas fa-brain"></i>
                        </span>
                        <h3>Integración de IA</h3>
                        <p>Incorporamos inteligencia artificial para automatizar tareas y mejorar decisiones.</p>
                        <a href="#" className="btn-primary" data-modal="ai-integration-modal">Leer más</a>
                    </div>
                    
                    <div className="service-card">
                        <span className="icon">
                            <i className="fas fa-tools"></i>
                        </span>
                        <h3>Mantenimiento y Soporte</h3>
                        <p>Soporte técnico continuo y actualizaciones para mantener tu software siempre optimizado.</p>
                        <a href="#" className="btn-primary" data-modal="maintenance-modal">Leer más</a>
                    </div>
                    
                    <div className="service-card">
                        <span className="icon">
                            <i className="fas fa-building"></i>
                        </span>
                        <h3>Aplicaciones para Empresas</h3>
                        <p>Soluciones ERP, CRM y herramientas internas para mejorar la gestión empresarial.</p>
                        <a href="#" className="btn-primary" data-modal="enterprise-apps-modal">Leer más</a>
                    </div>

                    <div className="service-card">
                        <span className="icon">
                            <i className="fas fa-wrench"></i>
                        </span>
                        <h3>Desarrollo Backend</h3>
                        <p>APIs robustas, bases de datos y lógica de negocio escalable y segura.</p>
                        <a href="#" className="btn-primary" data-modal="backend-modal">Leer más</a>
                    </div>
                    
                    <div className="service-card">
                        <span className="icon">
                            <i className="fas fa-paint-brush"></i>
                        </span>
                        <h3>Desarrollo Frontend</h3>
                        <p>Interfaces modernas, responsivas y con alto rendimiento usando las últimas tecnologías.</p>
                        <a href="#" className="btn-primary" data-modal="frontend-modal">Leer más</a>
                    </div>
                    
                    <div className="service-card">
                        <span className="icon">
                            <i className="fas fa-sync-alt"></i>
                        </span>
                        <h3>Aplicaciones Multiplataforma</h3>
                        <p>Una sola base de código para iOS, Android, Web y escritorio con Flutter y React Native.</p>
                        <a href="#" className="btn-primary" data-modal="multiplatform-modal">Leer más</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
