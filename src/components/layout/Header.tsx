import React, { useState, useEffect } from 'react';
import NavigationLinks from '../shared/NavigationLinks';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <nav className="container nav-container">
                <div className="left-section">
                    <a href="#inicio" className="logo-container">
                        <div className="logo">A</div>
                        <span className="logo-text">Axon.app</span>
                    </a>
                </div>
                <div className="right-section">
                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <NavigationLinks />
                    </div>
                    <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <NavigationLinks onItemClick={toggleMenu} />
            </div>
            {isMenuOpen && <div className="menu-overlay active" onClick={toggleMenu}></div>}
        </header>
    );
};

export default Header;
