import React from 'react';

const Technologies: React.FC = () => {
    return (
        <section id="tech" className="container section">
            <div className="section-title">
                <h2>Technologies We Use</h2>
                <p>We leverage the latest technologies to build powerful and efficient solutions.</p>
            </div>
            <div className="tech-logos">
                <div className="tech-logo"><i className="fab fa-html5 html5"></i><span>HTML5</span></div>
                <div className="tech-logo"><i className="fab fa-css3-alt css3"></i><span>CSS3</span></div>
                <div className="tech-logo"><i className="fab fa-js-square js"></i><span>JavaScript</span></div>
                <div className="tech-logo"><i className="fab fa-react react"></i><span>React</span></div>
                <div className="tech-logo"><i className="fab fa-node-js nodejs"></i><span>Node.js</span></div>
                <div className="tech-logo"><i className="fab fa-aws aws"></i><span>AWS</span></div>
                <div className="tech-logo"><i className="fab fa-docker docker"></i><span>Docker</span></div>
                <div className="tech-logo"><i className="fab fa-figma figma"></i><span>Figma</span></div>
            </div>
        </section>
    );
};

export default Technologies;
