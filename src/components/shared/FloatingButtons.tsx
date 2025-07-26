import React, { useState } from 'react';

const FloatingButtons: React.FC = () => {
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  const toggleSocialMenu = () => {
    setIsSocialMenuOpen(!isSocialMenuOpen);
  };

  return (
    <div className="floating-buttons">
      <div className={`social-media-floating-container ${isSocialMenuOpen ? 'active' : ''}`}>
        {/* Social media links */}
      </div>
      <button 
        className="floating-btn btn-social-media" 
        onClick={toggleSocialMenu}
      >
        <i className="fas fa-share-alt"></i>
      </button>
      <a 
        href="https://wa.me/15551234567" 
        className="floating-btn btn-whatsapp" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      {/* Other floating buttons */}
    </div>
  );
};

export default FloatingButtons;
