import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Rishu Garg',
      position: 'Executive Director',
      image: 'Rishu.jpg'
    },
    {
      name: 'Dr. Piyusha Tiwari',
      position: 'Co-Founder & Director',
      image: 'piyusha.png'
    },
    {
      name: 'Mr. Digvijay Singh Bisht',
      position: 'Co-Founder & Director',
      image: 'Digvijay.png'
    },
    {
      name: 'Prof. Anand Prakash Mishra',
      position: 'Senior Advisor',
      image: 'prof.png'
    },
    {
      name: 'Kiran Jyoti',
      position: 'Head Gender and Child Rights',
      image: 'kj.png'
    },
    {
      name: 'Shibabrata Kar',
      position: 'Programs Director',
      image: 'sharbjit.png'
    }
  ];

  return (
    <section id="our-team" className="our-team-section">
      <div className="team-container">
        <h2 className="team-title">Team Members</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-photo">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/${member.image}`} 
                  alt={member.name} 
                />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
