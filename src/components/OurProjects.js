import React, { useState, useEffect, useCallback } from 'react';
import './OurProjects.css';

const projects = [
  {
    id: 'wise',
    tag: 'Focus: Women & Livelihoods',
    title: 'Women Initiated Social Enterprises (WISE)',
    images: [
      'WISE/wise-1.jpeg',
      'WISE/wise-2.jpeg',
      'WISE/wise-3.jpeg',
    ],
    paragraphs: [
      'WISE is a pioneering model that positions women as nano-entrepreneurs, enabling them to lead climate-smart transformations in agriculture and dairy.',
    ],
    bullets: [
      'Empowered as entrepreneurs — moving beyond subsistence roles to lead sustainable enterprises.',
      'Equipped with knowledge — demystifying methane emissions and climate science.',
      'Linked to markets and finance — addressing asymmetries that often exclude women.',
      'Driving resilience through balanced ration feeding and climate-smart solutions.',
    ],
  },
  {
    id: 'prosopis',
    tag: 'Focus: Ecology & Livelihoods',
    title: 'Eradication of Prosopis juliflora — From Weed to Feed',
    images: [
      'Eradication of Prosopis juliflora- from weed to feed initiative/prosopis-1.jpg',
      'Eradication of Prosopis juliflora- from weed to feed initiative/prosopis-2.jpg',
    ],
    paragraphs: [
      'In Rajasthan, this initiative promotes decentralised feed processing units in Ajmer, Alwar, Karauli, and Pali to convert invasive Prosopis juliflora pods into livestock feed, reducing ecological threat while creating local value chains.',
      'Location: Ajmer, Alwar, Karauli, Pali — Rajasthan  |  Status: Ongoing',
    ],
    bullets: [],
  },
  {
    id: 'civil',
    tag: 'Focus: Civil Society',
    title: 'Robust Civil Society Network for Climate Action',
    images: [
      'Robust Civil Society Network for Climate Action/civil-1.jpg',
      'Robust Civil Society Network for Climate Action/civil-2.jpg',
      'Robust Civil Society Network for Climate Action/civil-3.jpg',
      'Robust Civil Society Network for Climate Action/civil-4.jpg',
    ],
    paragraphs: [
      'CSDEL has partnered with 23 NGOs and many FPOs to strengthen capabilities around climate action. We provide support, coordination, and collaboration to ensure climate action starts from the ground and its voices are heard at the top as well.',
    ],
    bullets: [],
  },
  {
    id: 'advisory',
    tag: 'Focus: Advisory',
    title: 'Advisory Services',
    images: [
      'Advisory/Jharkhand/advisory-jh-1.jpg',
      'Advisory/Jharkhand/advisory-jh-2.jpg',
      'Advisory/Sehore/advisory-se-1.jpg',
      'Advisory/Sehore/advisory-se-2.jpg',
      'Advisory/Sehore/advisory-se-3.jpg',
      'Advisory/Sehore/advisory-se-4.jpg',
      'Advisory/Sehore/advisory-se-5.jpg',
    ],
    paragraphs: [],
    bullets: [
      'Scoping study for commons and ecological restoration — Jharkhand',
      'Endline assessment of JEEVAN Program — Sehore, Madhya Pradesh',
    ],
  },
  {
    id: 'methane',
    tag: 'Focus: Climate & Agriculture',
    title: 'Reducing Methane in Dairy and Agriculture',
    images: [
      'Reducing methane in dairy and agriculture/methane-1.jpg',
      'Reducing methane in dairy and agriculture/methane-2.jpg',
      'Reducing methane in dairy and agriculture/methane-3.jpg',
    ],
    paragraphs: [
      'CSDEL works with farmers and dairy communities to adopt balanced ration feeding and improved agricultural practices that significantly cut methane emissions. By demystifying the science and linking farmers to actionable solutions, this initiative advances both climate goals and farm productivity.',
    ],
    bullets: [],
  },
  {
    id: 'kharka',
    tag: 'Nature-Based Solutions for Just Transition (2025–2027)',
    title: 'Kharka Initiative – Revitalizing Agriculture and Livelihoods in Bundelkhand',
    images: [
      'Kharka Initiative/Doha_Bundelkhand.jpg',
    ],
    paragraphs: [
      "Bundelkhand is poised for transformation. The Kharka Initiative ensures irrigation-led growth is matched with ecological restoration, institutional strengthening, and social inclusion — creating a resilient, equitable, and convergence-ready model for just transition.",
    ],
    highlights: [
      {
        label: 'Regional Solution',
        text: "Tackles Bundelkhand's agrarian and ecological crisis through revival of the historic 'Bundela' ecosystem.",
      },
      {
        label: 'Core Approach',
        text: 'Restoring traditional tanks, promoting organic farming, and empowering migrant youth — anchored in climate resilience and social justice.',
      },
    ],
    bullets: [
      'Erratic rainfall and water scarcity',
      'Soil degradation and biodiversity loss',
      'Distress migration and social exclusion',
      'Weak local governance and fragmented schemes',
    ],
    bulletsLabel: 'Key Challenges Addressed',
  },
];

const ProjectSlideshow = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);
  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [images.length, next]);

  return (
    <div className="proj-slideshow">
      <div className="proj-slides">
        {images.map((img, i) => (
          <img
            key={i}
            src={`${process.env.PUBLIC_URL}/images/${img}`}
            alt={`${title} ${i + 1}`}
            className={`proj-slide-img${i === current ? ' active' : ''}`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="proj-arrow proj-arrow--prev" onClick={prev} aria-label="Previous">&#10094;</button>
          <button className="proj-arrow proj-arrow--next" onClick={next} aria-label="Next">&#10095;</button>
          <span className="proj-counter">{current + 1} / {images.length}</span>
          <div className="proj-thumbs">
            {images.map((img, i) => (
              <img
                key={i}
                src={`${process.env.PUBLIC_URL}/images/${img}`}
                alt=""
                className={`proj-thumb${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const OurProjects = () => {
  return (
    <section id="our-projects" className="our-projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Our Projects</h2>
        <p className="projects-tagline">
          Transforming communities through ecological restoration, sustainable livelihoods, and inclusive growth.
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-panel${index % 2 !== 0 ? ' project-panel--reverse' : ''}`}
        >
          <div className="project-media">
            <ProjectSlideshow images={project.images} title={project.title} />
          </div>

          <div className="project-content">
            <span className="project-tag-badge">{project.tag}</span>
            <h3 className="project-name">{project.title}</h3>

            {project.paragraphs && project.paragraphs.map((p, i) => (
              <p key={i} className="project-para">{p}</p>
            ))}

            {project.highlights && project.highlights.length > 0 && (
              <div className="project-highlights">
                {project.highlights.map((h, i) => (
                  <div key={i} className="project-highlight">
                    <h4>{h.label}</h4>
                    <p>{h.text}</p>
                  </div>
                ))}
              </div>
            )}

            {project.bullets && project.bullets.length > 0 && (
              <div className="project-bullets">
                {project.bulletsLabel && <h4>{project.bulletsLabel}</h4>}
                <ul>
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurProjects;
