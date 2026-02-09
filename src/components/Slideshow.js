import React, { useState, useEffect } from 'react';
import './Slideshow.css';

function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [0, 1, 2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <div
          key={img}
          className={`slide ${index === currentImage ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/${img}.jpg)`
          }}
        />
      ))}
      <div className="slideshow-text-overlay">
        <div className="text-small">Welcome to</div>
        <div className="text-large">Council for Sustainability Development</div>
        <div className="text-large">Environment and Livelihoods</div>
        <div className="text-small">One Planet. Shared Future. Collective Action.</div>
      </div>
    </div>
  );
}

export default Slideshow;
