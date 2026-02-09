import React from 'react';
import './App.css';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import WhoWeAre from './components/WhoWeAre';
import OurMission from './components/OurMission';
import OurPromise from './components/OurPromise';
import WhatWeDo from './components/WhatWeDo';
import OurTeam from './components/OurTeam';
import OurPartners from './components/OurPartners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slideshow />
      <main>
        <WhoWeAre />
        <OurMission />
        <WhatWeDo />
        <OurPromise />
        <OurTeam />
        <OurPartners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
