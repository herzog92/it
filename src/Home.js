import React from 'react';
import './Home.css';

function Home() {
    const imageSources = [
        "/image4.webp",
        "/image17.webp",
        "/image18.webp",
        "/image9.webp",
        "/image8.webp",
        "/image5.webp",
        "/image6.webp",
        "/image7.webp",
    ];

    const text = "Warum Sie sich für uns entscheiden sollten.";

    return (
        <div className="home-container">
            <div className="section section1">
                <img src="/image7.webp" alt="Visual representation" className="section1-img" />
                <div className="section1-text">
                    <h2>Ihr Partner für Gastronomie und Einzelhandel</h2>
                    All-Activity-Group ist Ihr kompetenter und flexibler Partner für alle Servicebereiche in der Gastronomie und im Einzelhandel. Wir bieten qualifizierte und motivierte Servicekräfte, die sich an Ihre individuellen Bedürfnisse anpassen.
                </div>
            </div>

            <div className="section section2">
                <div className="section2-text">
                    <h2>Qualifizierte Servicekräfte für Veranstaltungen und Projekte</h2>
                    Unser Team besteht aus erfahrenen Servicekräften, die in verschiedenen Bereichen der Gastronomie wie Catering, Bankett und Verkauf tätig sind. Wir legen Wert auf Hygiene, Sicherheit und Kundenorientierung.
                </div>
                <img src="/image6.webp" alt="Visual representation" />
            </div>

            <div className="section section3">
                <img src="/image5.webp" alt="Visual representation" />
                <div className="section3-text">
                    <h2>Anpassungsfähigkeit und Herausforderungen</h2>
                    Wir sind stets bereit, neue Herausforderungen anzunehmen und uns flexibel an unterschiedliche Situationen anzupassen, um Ihren Servicebereich zu optimieren.
                </div>
            </div>

            <div className="section section5">
                <div className="section5-text">
                    <h2>Ihr Partner für gelungene </h2><h2>Veranstaltungen</h2>
                   <h2> Erfahren Sie, wie All-Activity-Group </h2><h2>als Ihr Partner für Gastronomie- und </h2> <h2>Einzelhandelsservices zum Erfolg</h2> <h2> Ihrer Veranstaltungen beiträgt.</h2>
                </div>
            </div>

            <div className="section section4">
                <div className="image-slider">
                    {imageSources.map((src, index) => (
                        <img src={src} alt={`Visual representation ${index + 1}`} key={'first-' + index} />
                    ))}
                    {imageSources.map((src, index) => (
                        <img src={src} alt={`Visual representation ${index + 1}`} key={'second-' + index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;