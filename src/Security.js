
import React, { useState } from 'react';
import './Security.css';

function Security() {
   
  const [rectanglesData] = useState([
    {
      id: 1,
      title: "und heraus",
      text: "Wkräfte dürfnisse anpassen."
    },
    {
      id: 2,
      title: "Teamkompetenz e",
      text: "Wir gen großen Werttierung."
    },
    {
      id: 3,
      title: "Flexibilität ",
      text: "Wir stuationen animieren."
    }
    // ... Vous pouvez ajouter plus d'objets ici
  ]);
  
    return (
        <div className="Security-page">
            {/* Section 1 */}
            <div className=" sectiona1">
                <img src="/image004.webp" alt="Visual representation" className="section1-img" />
                <div className="sectiona1-text">
                    <h2> IT Security Excellence: Unsere Umfassende Expertise</h2>
                    Tauchen Sie ein in die Welt der IT-Sicherheit mit unserer umfassenden Expertise. Als führende Experten bieten wir maßgeschneiderte Lösungen, um Ihr Unternehmen vor digitalen Bedrohungen zu schützen. Erfahren Sie, wie wir durch innovative Technologien und bewährte Praktiken eine robuste IT-Sicherheitsinfrastruktur schaffen, die Ihren geschäftlichen Erfolg sicherstellt.
                </div>
            </div>

            {/* Section 2 */}
            <div className="grandrectanglea-02">
            <div className="rectanglea-02">
                <div className="text-containera">
                    <h3 className="titre1">Workshops für Höchste Sicherheitskompetenz</h3>
                    <p className="texte">Entdecken Sie unsere spezialisierten IT-Security-Workshops, die darauf abzielen, Ihr Team mit höchster Sicherheitskompetenz auszustatten. Unsere interaktiven Schulungen und praxisorientierten Workshops ermöglichen es Ihren Mitarbeitern, die neuesten Sicherheitsprotokolle zu verstehen und anzuwenden. Informieren Sie sich über unser Schulungsangebot, um die Sicherheitsbewusstheit in Ihrem Unternehmen zu stärken und möglichen Bedrohungen proaktiv zu begegnen.</p>
                </div>
                <div className="image-containera">
                    <img src="image015.webp" alt="Service" />
                </div>
            </div>
            </div>

            <div className="section02">
                <div className="rectangle-container">
                  {rectanglesData.map(rectangle => (
                    <div key={rectangle.id} className="rectangle">
                      <h2>{rectangle.title}</h2>
                      <p>{rectangle.text}</p>
                    </div>
                  ))}
                </div>
              </div>


            {/* Section 4 */}
            <div className="grandrectanglea-02">
            <div className="rectanglea-02">
                <div className="text-containera">
                    <h3 className="titre1">Massgeschneiderte Sicherheitslösungen: Ihr Schutz, Unser Fokus</h3>
                    <p className="texte">Erfahren Sie, wie wir individuelle Sicherheitslösungen entwickeln, die auf die einzigartigen Anforderungen Ihres Unternehmens zugeschnitten sind. Unsere maßgeschneiderten Ansätze stellen sicher, dass Ihre IT-Infrastruktur effektiv vor Cyberbedrohungen geschützt ist. Vertrauen Sie auf unsere Expertise, um Sicherheitslösungen zu implementieren, die Ihrem Unternehmen einen Wettbewerbsvorteil verschaffen.</p>
                </div>
                <div className="image-containera">
                    <img src="image013.webp" alt="Service" />
                </div>
            </div>
            </div>

            <div className="Entwicklung-section01">
          <h2>Schützen Sie proaktiv Ihre IT-Assets mittels Penetration Testing</h2>
          <p>Beim Penetration Testing kommen beispielsweise folgende Techniken zum Einsatz:</p>
          <ul>
            <li>Kombination aus semi-automatischen Schwachstellenscans & manuellem Testing</li>
            <li>Manuelle Verifikation von Sicherheitslücken</li>
            <li>Review von Security-Konfigurationen, -Designs & Code</li>
            {/* ... autres éléments de la liste ... */}
          </ul>
          <div className="process-steps-container001">
            <div className="process-step">
              <div className="process-icon001">1</div>
              <p>Bedarfsanalyse.</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">2</div>
              <p>Projektdefinition</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">3</div>
              <p>Teamzusammenstellung</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">4</div>
              <p>Risikoanalyse</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">5</div>
              <p>Projektplanung</p>
            </div>
            <div className="process-step">
              <div className="process-icon001">6</div>
              <p>Kick-off-Meeting</p>
            </div>
            {/* ... Add other process steps here ... */}
          </div>
          <p>Nach Abschluss der Testaktivitäten erhalten Sie einen detaillierten, zielgruppengerechten Schlussbericht, welcher unter anderem folgende Informationen enthält:</p>
          {/* ... contenu supplémentaire ... */}
        </div>
        <div className=" sectiona1">
                <img src="/image014.webp" alt="Visual representation" className="section1-img" />
                <div className="sectiona1-text">
                    <h2>IT Security Strategien für die Digitale Zukunft</h2>
                    Tauchen Sie ein in die digitale Zukunft mit unseren fortschrittlichen IT-Security-Strategien. Wir entwickeln proaktive Ansätze, um Ihr Unternehmen vor den neuesten Bedrohungen zu schützen. Informieren Sie sich über unsere ganzheitlichen Sicherheitsstrategien, die darauf abzielen, die Vertraulichkeit Ihrer Daten zu gewährleisten und eine sichere Grundlage für Ihre digitale Transformation zu schaffen.
                </div>
            </div>
            
        </div>
    );
}

export default Security;