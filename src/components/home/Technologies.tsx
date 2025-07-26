import React from 'react';

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const Technologies: React.FC = () => {
  const techStack: TechItem[] = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'css3' },
    // ...más tecnologías
  ];

  return (
    <section id="tecnologias" className="fade-in">
      <div className="container tech">
        <div className="section-title">
          <h2>Tecnologías que Usamos</h2>
        </div>
        <p>Trabajamos con las tecnologías más modernas y demandadas del mercado.</p>
        <div className="tech-logos">
          {techStack.map(tech => (
            <div key={tech.name} className={`tech-logo ${tech.color}`}>
              <i className={tech.icon}></i>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
