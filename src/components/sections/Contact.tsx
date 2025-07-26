import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="container section">
            <div className="section-title">
                <h2>Contact Us</h2>
                <p>Get in touch with us for a consultation.</p>
            </div>
            <div className="contact">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> 123 Tech Street, Silicon Valley, USA</p>
                    <p><i className="fas fa-envelope"></i> <strong>Email:</strong> contact@axon.dev</p>
                    <p><i className="fas fa-phone-alt"></i> <strong>Phone:</strong> +1 234 567 890</p>
                    <button className="btn btn-contact-modal" data-modal="contact-form-modal">Send a Message</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
