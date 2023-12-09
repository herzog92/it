import React, { useEffect, useRef } from 'react';
import './Home.css';

function Home ()  {
    const imageSources = [
        "/image031.webp",
        "/image032.webp",
        "/image033.webp",
        "/image034.webp",
        "/image035.webp",
        "/image036.webp",
        "/image037.webp",
        "/image038.webp",
        
        // ... autres sources d'images ...
    ];
    const sliderRef = useRef(null);

    useEffect(() => {
        // Défilement vers la droite après le montage du composant
        const slider = sliderRef.current;
        if (slider) {
            slider.scrollLeft = slider.scrollWidth;
        }
    }, []);
    const rectanglesData = [
        {
          id: 1,
          title: "     Regierungen & Behörden",
          text: "...................................... "
        },
        {
          id: 2,
          title: "Healthcare",
          text: "..............was hast du schon hier gemacht."
        },
        {
          id: 3,
          title: "Automobile industrie",
          text: "................................. "
        }
        // ... Vous pouvez ajouter plus d'objets ici
      ]
      

   
    return (
        <div className="home-container">
            <div className="acceuil">
            <img src="/image040.jpg" alt="Visual representation" className="acceuil-img" />

            </div>


            <div className=" sectiona1">
                <img src="/image039.webp" alt="Visual representation" className="section1-img" />
                <div className="sectiona1-text">
                    <h2>IT-Sicherheitsexperten: Pentesting und Projektmanagement</h2>
                    Schützen Sie Ihr Unternehmen vor digitalen Bedrohungen mit unseren fortschrittlichen Pentesting-Services. Unsere Experten identifizieren und beseitigen potenzielle Schwachstellen, während unser Projektmanagement eine nahtlose Integration dieser Lösungen gewährleistet - für eine robuste Sicherheit Ihres Unternehmens.
                </div>
            </div>

           

            <div className="section0021">
          <div className="section0021-text">
            <h2>Unsere Zertifikationen .</h2>
          </div>
        </div>

                    <div className=" sectiona8">

    <div className="image-slider">
        {imageSources.map((src, index) => (
            <img src={src} alt={`Visual representation ${index + 1}`} key={'first-' + index} />
        ))}
        {imageSources.map((src, index) => (
            <img src={src} alt={`Visual representation ${index + 1}`} key={'second-' + index} />
        ))}
    
</div>

                </div>
            
            
            <div className="sectiona2">
                <div className="sectiona2-text">
                    <h2>Cloud Computing und Datenschutz: Fokussierte Vertraulichkeit</h2>
                    Entdecken Sie die Vorteile des Cloud Computing mit unserer datenschutzorientierten Herangehensweise. Unsere Datenschutzexpertise stellt sicher, dass Ihre sensiblen Daten sicher im Cloud bleiben. Wir bieten hochmoderne Lösungen, um die Einhaltung der Datenschutzstandards zu gewährleisten und Ihrem Unternehmen die sichere Nutzung der Cloud zu ermöglichen.
                </div>
                <img src="/image012.webp" alt="Visual representation" className="section1-img" />
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



            <div className="sectiona3">
                <img src="/image005.webp" alt="Visual representation" className="section1-img"/>
                <div className="sectiona3-text">
                    <h2>Webentwicklung und SEO: Online-Präsenz Optimieren</h2>
                    Unser Webentwicklungsteam erstellt innovative und leistungsstarke Websites, die Ihr Unternehmen optimal online präsentieren. Mit fortschrittlichen SEO-Strategien optimieren wir Ihre Online-Sichtbarkeit, ziehen qualifizierten Traffic an und bringen Ihr Unternehmen mit unserer Expertise in Webentwicklung und IT-Sicherheit auf die nächste Stufe.
                </div>
            </div>

           
            </div>
    
    );
}


export default Home;