import React, { useEffect, useRef } from 'react';
import '../css/Home.css'; // Include your styles
import '../../Component/Home';

const Script = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = containerRef.current.querySelectorAll('.carousel-img');
    let index = 0;

    function showLeftImage(i) {
      images.forEach(img => {
        img.style.left = '-100%';
        img.style.opacity = 0;
      });

      const img = images[i];
      img.style.left = '0%';
      img.style.opacity = 1;

      setTimeout(() => {
        img.style.left = '-100%';
        img.style.opacity = 0;
      }, 4000);
    }

    function cycleLeftImages() {
      showLeftImage(index);
      index = (index + 1) % images.length;
      setTimeout(cycleLeftImages, 8000);
    }

    cycleLeftImages();
  }, []);

  return (
    <div ref={containerRef} className="carousel-container">
      <img className="carousel-img" src="/image/woman1.jpg" alt="1" />
      <img className="carousel-img" src="/NS3EduReact/public/image/woman1.jpg" alt="2" />
      <img className="carousel-img" src="/NS3EduReact/public/image/woman1.jpg" alt="3" />
    </div>
  );
};

export default Script;
