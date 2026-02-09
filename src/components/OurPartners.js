import React from 'react';
import './OurPartners.css';

const OurPartners = () => {
  const partners = [
    { name: 'Scorpion', logo: 'pt1.svg' },
    { name: 'Polystack', logo: 'pt2.svg' },
    { name: 'Edge 2 Systems', logo: 'pt3.svg' },
    { name: 'Quantum Hub', logo: 'pt4.png' },
    { name: 'Magenta', logo: 'pt5.png' }
  ];

  return (
    <section className="our-partners-section">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <div className="partners-slider">
          <div className="partners-track">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${partner.logo}`} 
                  alt={partner.name} 
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`duplicate-${index}`} className="partner-logo">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${partner.logo}`} 
                  alt={partner.name} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
