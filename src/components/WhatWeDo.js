import React from 'react';
import './Section.css';

const WhatWeDo = () => {
  const activities = [
    {
      title: 'Research, Advocacy & Awareness',
      description: 'We generate evidence-based insights to guide policies and solutions. Through advocacy and awareness, we inspire collective action for sustainability.'
    },
    {
      title: 'Sustainable Livelihoods & Community Empowerment',
      description: 'We support communities with skills, entrepreneurship, and green practices. Our focus is on building self-reliance and long-term resilience.'
    },
    {
      title: 'Environmental Conservation & Climate Action',
      description: 'We protect ecosystems and promote biodiversity. Our climate initiatives drive adaptation, mitigation, and renewable solutions.'
    },
    {
      title: 'Capacity Building & Nurturing Excellence',
      description: 'We equip individuals and institutions with skills and knowledge. By fostering leadership, we nurture innovation and excellence.'
    },
    {
      title: 'Monitoring, Evaluation & Impact Assessment',
      description: 'We track outcomes to ensure accountability and improvement. Impact stories help replicate successful models for wider change.'
    }
  ];

  return (
    <section id="what-we-do" className="section section-alt">
      <div className="section-container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-tagline">CSDEL empowers communities and protects the environment through sustainable action.</p>
        <div className="section-content">
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <div key={index} className="activity-card">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
