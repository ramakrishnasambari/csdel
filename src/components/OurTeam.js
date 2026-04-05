import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Rishu Garg',
      position: 'Executive Director',
      image: 'Rishu.jpg',
      linkedin: 'https://www.linkedin.com/in/rishu-garg-01359613a/'
    },
    {
      name: 'Dr. Piyusha Tiwari',
      position: 'Director',
      image: 'piyusha.png',
      linkedin: 'https://www.linkedin.com/in/dr-piyusha-tiwari-9b36a736a/'
    },
    {
      name: 'Priyank Dube',
      position: 'Director Communications, SELF',
      image: null
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

  const getInitials = (name) =>
    name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <section id="our-team" className="our-team-section">
      <div className="team-container">
        <h2 className="team-title">Team Members</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-photo">
                {member.image ? (
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/${member.image}`} 
                    alt={member.name} 
                  />
                ) : (
                  <div className="team-photo-placeholder">
                    <span>{getInitials(member.name)}</span>
                  </div>
                )}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  className="team-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
