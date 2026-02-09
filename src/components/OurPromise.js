import React from 'react';
import './OurPromise.css';

const OurPromise = () => {
  return (
    <section className="our-promise" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/b1.jpg)` }}>
      <div className="promise-overlay">
        <div className="promise-container">
          <div className="promise-content">
            <div className="promise-text">
              <h2 className="promise-title">Our Promise</h2>
              <p className="promise-subtitle">CSDEL is more than a consulting firm—we are a movement for systemic change.</p>
              <p className="promise-description">
                By blending interdisciplinary expertise, community empowerment, and strategic partnerships, we deliver transformative solutions that are:
              </p>
              <ul className="promise-list">
                <li>Nurture nature</li>
                <li>Empower communities</li>
                <li>Shape a resilient, equitable future for India and beyond</li>
              </ul>
            </div>
            <div className="promise-image">
              <img src={`${process.env.PUBLIC_URL}/images/p2.jpg`} alt="Our Promise" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
