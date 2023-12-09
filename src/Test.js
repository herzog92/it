import React, { useState } from 'react';
import './Test.css';

function Test() {

  
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: require('./image1.jpg'), alt: 'Image 1', caption: 'Caption 1' },
    { src: require('./image2.jpg'), alt: 'Image 2', caption: 'Caption 2' },
    { src: require('./image3.jpg'), alt: 'Image 3', caption: 'Caption 3' },
    // Assurez-vous d'avoir importé les images comme ci-dessus ou de les placer dans le dossier public
  ];

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="test-container">
      <div className="carousel">
        <button className="prev-button" onClick={handlePrevClick}>&#9664;</button>
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.src})`}}

            >
              <div className="caption">{image.caption}</div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={handleNextClick}>&#9654;</button>
      </div>

      <div className="career-section">
        <div className="career-content">
          <h2>Karriere bei Explicatis</h2>
          {/* Le texte sera retiré de cette section comme demandé */}
        </div>
      </div>

  
    <div className="reference-section">
      <h1>Unsere Referenzen</h1>
      <p>
        Bereits seit über 20 Jahren vertrauen unsere Kunden auf unsere technologische
        Kompetenz, innovative Lösungsfindung und Leidenschaft für Software.
        Inzwischen hat Explicatis schon mehr als 1.000 Projekte erfolgreich
        abgeschlossen, viele innovative Softwarelösungen realisiert und in zahlreichen
        Branchen Fachwissen aufgebaut. Überzeugen Sie sich selbst von unserem
        Können und werfen einen Blick in die Auswahl unserer spannenden Referenzprojekte,
        sowie auf unsere zahlreichen Auszeichnungen und Zertifizierungen.
      </p>
    </div>
   

    <div class="marquee">
  <div class="track">
    
    <img src="path_to_your_image1.png" alt="Description" />
    <img src="path_to_your_image2.png" alt="Description" />
   
    <img src="path_to_your_image1.png" alt="Description" />
    <img src="path_to_your_image2.png" alt="Description" />
    
  </div>
</div>





    </div>
  );
}

export default Test;
