import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="container section">
            <div className="section-title">
                <h2>Our Portfolio</h2>
                <p>Check out some of our recent work.</p>
            </div>
            <div className="portfolio-grid">
                <div className="portfolio-item">
                    <img src="https://axon-eight.vercel.app/images/project-1.webp" alt="Project One" />
                    <div className="portfolio-overlay">
                        <h4>E-commerce Platform</h4>
                        <p>A full-featured e-commerce solution with a modern UI.</p>
                        <button className="btn-link" data-modal="portfolio-modal-1">View Details</button>
                    </div>
                </div>
                <div className="portfolio-item">
                    <img src="https://axon-eight.vercel.app/images/project-2.webp" alt="Project Two" />
                    <div className="portfolio-overlay">
                        <h4>Mobile Banking App</h4>
                        <p>A secure and intuitive mobile banking application.</p>
                        <button className="btn-link" data-modal="portfolio-modal-2">View Details</button>
                    </div>
                </div>
                <div className="portfolio-item">
                    <img src="https://axon-eight.vercel.app/images/project-3.webp" alt="Project Three" />
                    <div className="portfolio-overlay">
                        <h4>Cloud-Based SaaS</h4>
                        <p>A scalable SaaS platform for data analytics.</p>
                        <button className="btn-link" data-modal="portfolio-modal-3">View Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
