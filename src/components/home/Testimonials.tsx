import React from 'react';

interface Testimonial {
  stars: number;
  text: string;
  author: {
    name: string;
    position: string;
    image: string;
  };
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      stars: 5,
      text: 'Axon.app transformó nuestra plataforma...',
      author: {
        name: 'Carlos Mendoza',
        position: 'CEO, TechNova',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    },
    // ...más testimonios
  ];

  return (
    <section id="testimonios" className="testimonials fade-in">
      <div className="container">
        <div className="section-title">
          <h2>Lo que Dicen Nuestros Clientes</h2>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <div className="stars">{'★'.repeat(testimonial.stars)}</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="client">
                  <img src={testimonial.author.image} alt={testimonial.author.name} />
                  <div className="client-info">
                    <h4>{testimonial.author.name}</h4>
                    <p>{testimonial.author.position}</p>
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
