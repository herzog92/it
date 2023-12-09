import React, { useState, useEffect } from 'react';
import './Testt.css';

// Counter component
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

// Testt component
const Testt = () => {
  return (
    <div>
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

      <div className="penetration-testing-section">
  <h2>Schützen Sie proaktiv Ihre IT-Assets mittels Penetration Testing</h2>
  <p>Beim Penetration Testing kommen beispielsweise folgende Techniken zum Einsatz:</p>
  <ul>
    <li>Kombination aus semi-automatischen Schwachstellenscans & manuellem Testing</li>
    <li>Manuelle Verifikation von Sicherheitslücken</li>
    <li>Review von Security-Konfigurationen, -Designs & Code</li>
    {/* ... autres éléments de la liste ... */}
  </ul>
  
  <div className="process-steps">
    {/* Ici, vous pouvez utiliser une liste ou des divs pour vos étapes, avec des images ou des icônes comme décrit */}
    
    <div class="process-steps-container">
  <div class="process-step">
    <div class="process-icon">1</div>
    <p>Kick-off-Meeick-off-Meetick-oick-off-Meetingff-Meetingingting</p>
  </div>

  <div class="process-steps-container">
  <div class="process-step">
    <div class="process-icon">2</div>
    <p>Kick-off-Mick-off-Meetick-oick-off-Meetingff-Meetingingeeting</p>
  </div>

  <div class="process-steps-container">
  <div class="process-step">
    <div class="process-icon">3</div>
    <p>Kick-off-Meetick-oick-off-Meetingff-Meetinging</p>
  </div>
  
  <div class="process-connector"></div>
  <div class="process-step">
    <div class="process-icon">4</div>
    <p>Intelligence Gaick-off-Meetick-oick-off-Meetingff-Meetingingthering (OSINT)</p>
  </div>
  <div class="process-connector"></div>
  <div class="process-step">
    <div class="process-icon">5</div>
    <p>Status-Updaick-off-Meetick-oick-off-Meetingff-Meetingingte</p>
  </div>
  
</div>

  </div>
  
  <p>Nach Abschluss der Testaktivitäten erhalten Sie einen detaillierten, zielgruppengerechten Schlussbericht, welcher unter anderem folgende Informationen enthält:</p>
  {/* ... contenu supplémentaire ... */}
  </div>
  </div>
  </div>
</div>
  );
};

export default Testt;
