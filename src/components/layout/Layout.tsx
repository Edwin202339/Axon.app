import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <canvas id="bg-canvas" />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
