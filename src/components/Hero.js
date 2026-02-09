import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Placeholder images - replace with actual images later
  const slides = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="hero">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}
        
        {/* Fallback background for missing images */}
        <div className="slide-fallback" />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">Welcome to</h1>
        <h2 className="hero-subtitle">
          Council for Sustainability Development Environment and Livelihoods
        </h2>
        <p className="hero-tagline">
          One Planet. Shared Future. Collective Action.
        </p>
      </div>
    </section>
  );
};

export default Hero;
