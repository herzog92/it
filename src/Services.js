import React from 'react';
import './Services.css';

function Service() {
    return (
        <div className="service-page">
            {/* Section 1 */}
            <div className="section background-section-services">
                <div className="overlay-text1">
                    <h1 className="titre centre">Willkommen bei All-activity-group UG</h1>
                </div>
            </div>

            {/* Section 2 */}
            <div className="section rectangle02">
                <div className="text-container">
                    <h3 className="titre1">Vollumfänglicher Service und Verkauf mit Eigenverantwortung</h3>
                    <p className="texte">Wir möchten darauf hinweisen, dass unsere Dienstleistungen ausschließlich auf der Basis von Eigenverantwortung und Vollständigkeit der übernommenen Bereiche angeboten werden. Unser Ansatz besteht darin, komplette Servicebereiche zu managen, anstatt lediglich Personal zur Verfügung zu stellen.</p>
                </div>
                <div className="image-container">
                    <img src="image9.webp" alt="Service" />
                </div>
            </div>

            {/* Section 3 */}
            <div className="section white-section">
                <div className="box">
                    <h4 className="titre2">Professionelle Eventbetreuung für Großveranstaltungen</h4>
                    <p className="texte">Wir bieten die komplette Übernahme des Servicebereichs bei Veranstaltungen für 20 bis 500 Personen. Unsere professionellen Bankett-Servicekräfte sind spezialisiert auf die Betreuung und das Management von Großveranstaltungen. Bei einer kürzlich organisierten Firmenfeier mit 500 Gästen haben wir 20 hochqualifizierte Servicekräfte gestellt. Diese Veranstaltung wurde von einem externen Anbieter ausgerichtet und hat unsere Fähigkeit zur effektiven Arbeit im großen Maßstab erfolgreich demonstriert.</p>
                </div>
                <div className="box">
                    <h4 className="titre3">Professionelle Eventorganisation und Gastronomieservice</h4>
                    <p className="texte">Wir bieten umfassende Eventorganisation für Biergärten, Winterhütten, Verkaufsstände und mehr. Unser Service umfasst die vollständige Betreuung der Veranstaltungsorte sowie den Auf- und Abbau des Buffets, inklusive Geschirrspülung. Unser geschultes Personal ist darauf spezialisiert, für reibungslose Abläufe und exzellenten Service zu sorgen. Vertrauen Sie uns, wenn Ihnen das Personal fehlt, und garantieren Sie den Erfolg Ihrer Veranstaltung.</p>
                </div>
                <div className="box">
                    <h4 className="titre4">Hervorragende Gästebetreuung</h4>
                    <p className="texte">Unsere Servicekräfte sind darauf trainiert, auf die Bedürfnisse jedes Gastes einzugehen und einen exzellenten Service zu bieten. Wir übernehmen alles für den Kunden und gehen dabei so vor, wie es jeder Kunde selbst tun würde. Unser Ziel ist immer 100% Kundenzufriedenheit und wir handeln im Namen des Kunden, um den Erfolg Ihrer Veranstaltung sicherzustellen.</p>
                </div>
            </div>

            {/* Section 4 */}
            <div className="section rectangle02 reversed">
                <div className="text-container">
                    <h3 className="titre5">Die Passion, es richtig zu machen</h3>
                    <p className="texte">In allem, was wir tun, steht die Leidenschaft im Mittelpunkt. Dieses brennende Verlangen, stets das Beste zu geben, treibt uns an, kontinuierlich zu lernen, uns zu verbessern und innovative Lösungen zu finden. Für uns ist jede Veranstaltung einzigartig, und wir behandeln sie mit dem Respekt und der Sorgfalt, die sie verdient. Denn in unserem Geschäft geht es nicht nur darum, Essen und Getränke zu servieren, sondern Erinnerungen zu schaffen, die ein Leben lang halten</p>
                </div>
                <div className="image-container">
                    <img src="image8.webp" alt="Service" />
                </div>
            </div>
        </div>
    );
}

export default Service;