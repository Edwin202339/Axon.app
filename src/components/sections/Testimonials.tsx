import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="testimonials">
            <div className="container section">
                <div className="section-title">
                    <h2>What Our Clients Say</h2>
                </div>
                <div className="testimonial-container">
                    <div className="testimonial-track">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div className="testimonial-item" key={i}>
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p className="testimonial-text">"Axon delivered an exceptional product that exceeded our expectations. Their team is professional, skilled, and dedicated."</p>
                                <div className="client">
                                    <img src={`https://i.pravatar.cc/150?img=${i + 1}`} alt="Client" />
                                    <div className="client-info">
                                        <h4>Jane Doe</h4>
                                        <p>CEO, TechCorp</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
