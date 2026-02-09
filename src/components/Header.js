import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/images/logo.png" alt="CSDEL Logo" />
        </div>
        
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#home" onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                HOME
              </a>
            </li>
            <li>
              <a href="#who-we-are" onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToSection('who-we-are');
              }}>
                WHO WE ARE
              </a>
            </li>
            <li>
              <a href="#what-we-do" onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToSection('what-we-do');
              }}>
                WHAT WE DO
              </a>
            </li>
            <li>
              <a href="#our-team" onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToSection('our-team');
              }}>
                OUR TEAM
              </a>
            </li>
            <li className="contact-button">
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToSection('contact');
              }}>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
