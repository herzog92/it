import React, { useState, useEffect } from 'react';
import './Entwicklung.css';

function Entwicklung() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: require('./image006.webp'), alt: 'Image 006', caption: 'Caption xjhbfdgidhguosediöugrehgrseuj1' },
    { src: require('./image007.webp'), alt: 'Image 007', caption: 'Caption 2' },
    { src: require('./image008.webp'), alt: 'Image 008', caption: 'Caption 3' },
  ];

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const Counter = ({ target, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let frame;
      const startTimestamp = performance.now();

      const step = (timestamp) => {
        if (!frame) frame = requestAnimationFrame(step);
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (target - 0) + 0));
        if (progress < 1) {
          frame = requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);

      return () => cancelAnimationFrame(frame);
    }, [target, duration]);

    return <div className="circle">{count}</div>;
  };

  return (

    <div className="Entwicklung-page">

        <div className="carousel">
          <button className="prev-button" onClick={handlePrevClick}>&#9664;</button>
          <div className="slider">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${currentSlide === index ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div className="caption">{image.caption}</div>
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNextClick}>&#9654;</button>
        </div>



        <div className="container001">
          <div className="section001-image">
            <img src="/image009.jpg" alt="Visual representation" className="section1-img" />
          </div>
          <div className="section001-text">
            <h2>Innovative und maßgeschneiderte Web-Lösungen</h2>
            Unser Fokus liegt auf der Bereitstellung hochwertiger Webentwicklungsdienste. Wir erstellen benutzerfreundliche, responsive und visuell ansprechende Websites, die perfekt auf die Bedürfnisse und Ziele unserer Kunden zugeschnitten sind. Unser Ziel ist es, nicht nur eine Website zu erstellen, sondern eine digitale Erfahrung, die Besucher begeistert und bindet.
          </div>
        </div>

        <div className="section0021">
          <div className="section0021-text">
            <h2>AT-Solution Ihr Partner für gelungene Veranstaltungen.</h2>
          </div>
        </div>


        <div className="section001-style">
          <h1>Steigern Sie Ihre Sichtbarkeit und Reichweite</h1>
          <p>
          Wir verstehen, wie wichtig eine starke Online-Präsenz für den Erfolg Ihres Unternehmens ist. Deshalb bieten wir umfassende SEO-Dienstleistungen an, die darauf abzielen, Ihre Website in den Suchmaschinenergebnissen höher zu platzieren. Durch gezielte Keyword-Recherche, On-Page und Off-Page SEO-Strategien helfen wir Ihnen, mehr qualifizierten Traffic zu gewinnen..
          </p>
        </div>

        <div className="container002">
          <div className="section001-image">
            <img src="/image012.webp" alt="Visual representation" className="section1-img" />
          </div>
          <div className="section001-text">
            <h2>Aufbau und Pflege Ihrer Online-Marke</h2>
            Eine starke Marke im Internet ist entscheidend, um sich von der Konkurrenz abzuheben. Unser Team unterstützt Sie bei der Entwicklung und Umsetzung einer konsistenten Markenstrategie online. Wir kümmern uns um Ihr Branding, Content-Management und Online-Reputation, um sicherzustellen, dass Ihre Marke richtig wahrgenommen wird.
          </div>
        </div>


        <div className="Entwicklung-section01">
          <h2>Zielgerichtete Werbung für maximale Konversion</h2>
          <p>Nutzen Sie die Kraft der sozialen Medien, um Ihre Produkte oder Dienstleistungen zu bewerben. Wir konzipieren und implementieren effektive Social-Media-Marketingkampagnen, die auf Ihre Zielgruppe zugeschnitten sind, um die Bekanntheit zu steigern und die Verkaufszahlen zu verbessern. Unsere Kampagnen sind darauf ausgerichtet, messbare Ergebnisse und einen hohen ROI zu erzielen.</p>
          <ul>
            
            {/* ... autres éléments de la liste ... */}
          </ul>
          <div className="process-steps-container001">
            <div className="process-step">
              <div className="process-icon001">1</div>
              <p>Bedarfsanalyse und Zieldefinition</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">2</div>
              <p>Planung und Strategieentwicklung</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">3</div>
              <p>Design und Webentwicklung</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">4</div>
              <p>SEO-Optimierung</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">5</div>
              <p>Umsetzung von Marketingkampagnen</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">6</div>
              <p>Monitoring und Anpassung</p>
            </div>
            {/* ... Add other process steps here ... */}
          </div>
          <p>Nach Abschluss der Testaktivitäten erhalten Sie einen detaillierten, zielgruppengerechten Schlussbericht, welcher unter anderem folgende Informationen enthält</p>
          {/* ... contenu supplémentaire ... */}
        </div>



        
        <div className="career-section001">
          <div className="career-content">
            <h2>Optimierung Ihrer Online-Verkaufsplattfor</h2>
            In der digitalen Welt ist ein effektiver und benutzerfreundlicher E-Commerce-Auftritt entscheidend. Wir spezialisieren uns darauf, maßgeschneiderte E-Commerce-Lösungen zu entwickeln, die perfekt auf Ihre Produkte und Zielgruppe abgestimmt sind. Von der Warenkorboptimierung bis hin zur nahtlosen Zahlungsabwicklung – wir sorgen dafür, dass Ihr Online-Shop nicht nur gut aussieht, sondern auch hervorragend funktioniert. Unsere Expertise in der Webentwicklung kombiniert mit SEO-Strategien gewährleistet, dass Ihr Shop sowohl benutzerfreundlich als auch suchmaschinenoptimiert ist.
          </div>
        </div>

        <div className="container003">
          <div className="section001-image">
            <img src="/image6.webp" alt="Visual representation" className="section1-img" />
          </div>
          <div className="section001-text">
            <h2>Langfristige Partnerschaft für kontinuierlichen Erfolg</h2>
            Unser Engagement endet nicht mit der Fertigstellung eines Projekts. Wir bieten eine umfassende Analyse und fortlaufende Betreuung, um sicherzustellen, dass Ihre Website und Ihre Online-Marketingstrategien weiterhin effektiv sind. Durch regelmäßiges Monitoring und Reporting halten wir Sie über die Leistung Ihrer Website und Kampagnen auf dem Laufenden. Wir passen Strategien an sich ändernde Markttrends und Kundenbedürfnisse an, um langfristig optimale Ergebnisse zu erzielen. Unser Ziel ist es, eine dauerhafte Partnerschaft mit unseren Kunden aufzubauen und sie auf ihrem Weg zum digitalen Erfolg zu begleiten. </div>
        </div>


        <div className="statistics-container">
          <h2>Das bestätigen unsere Statistiken</h2>
          <p>Täglich setzen Unternehmen weltweit auf unsere Fachkompetenz. Das bestätigen zusätzlich zu den langjährigen Kunden auch unsere Statistiken.</p>
          <div className="stats">
            <div className="stat-item">
              <Counter target={1619} duration={2000} />
              <p>Application (Mobile)<br />Penetration Test Projekte</p>
            </div>
            <div className="stat-item">
              <Counter target={350} duration={2000} />
              <p>Penetration Test<br />Projekte pro Jahr</p>
            </div>
            <div className="stat-item">
              <Counter target={26} duration={2000} />
              <p>ICS (SCADA / DCS)<br />Penetration Test Projekte</p>
            </div>
          </div>
        </div>
      </div>
    
    
  );
}

export default Entwicklung;
