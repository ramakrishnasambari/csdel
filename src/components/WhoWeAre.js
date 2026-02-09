import React from 'react';
import './Section.css';

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="section">
      <div className="section-container">
        <div className="two-column-layout">
          <div className="column-left">
            <img src={`${process.env.PUBLIC_URL}/images/p1.jpg`} alt="Who We Are" className="column-image" />
          </div>
          <div className="column-right">
            <h2 className="section-title-left">Who We Are</h2>
            <div className="section-content">
              <p>
                CSDEL is an environment and development advisory think tank comprising of experts, professionals, champions and volunteers from all fields of life. Our purpose is to help shape our collective future—one that balances human prosperity with planetary health, ensuring that no one is left behind. Together, we can build the future we want.
              </p>
              <p>
                Every day, the ecological, social, and economic landscapes are transforming at an unprecedented speed. Volatility and uncertainty is becoming the new normal. To remain relevant and resilient, we must become future-ready—before it's too late. We believe that for meaningful impact, action needs to be context-specific and holistic. Standalone solutions do not create lasting impact. Innovations and the use of technology are becoming more important than ever been. Data and information are accessible with a click of a button.
              </p>
              <p>
                Our impact framework focusses on collective action based on informed decision making. In this run-up, to change and evolve, each one of us is co-passenger. Each of us is part of the journey. Welcome on board, changemakers!
              </p>
              <p className="vision-text">
                <strong>Our Vision –</strong> "To transform the state of environment and development into one that is fully sustainable and equitable, through systemic approaches, shared ownership, collaborative action, and informed decision-making—ensuring a just and resilient future for both people and planet."
              </p>
              <div className="button-container">
                <a 
                  href={`${process.env.PUBLIC_URL}/images/CSDEL_Brochure.pdf`} 
                  download="CSDEL_Brochure.pdf"
                  className="download-button"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
