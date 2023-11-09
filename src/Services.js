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
                    <h3 className="titre1">Vollumfänglicher Service mit Eigenverantwortung</h3>
                    <p className="texte">Wir möchten darauf hinweisen, dass unsere Dienstleistungen ausschließlich auf der Basis von Eigenverantwortung und Vollständigkeit der übernommenen Bereiche angeboten werden. Unser Ansatz besteht darin, komplette Servicebereiche zu managen, anstatt lediglich Personal zur Verfügung zu stellen.</p>
                </div>
                <div className="image-container">
                    <img src="image9.webp" alt="Service" />
                </div>
            </div>

            {/* Section 3 */}
            <div className="section white-section">
                <div className="box">
                    <h4 className="titre2">Professionelle Bankett-Servicekräfte für Großveranstaltungen</h4>
                    <p className="texte">Unsere erfahrenen Bankett-Servicekräfte sind spezialisiert auf die Bedienung und das Management von Großveranstaltungen. Bei einer kürzlich organisierten Firmenfeier mit 500 Gästen haben wir 20 top-geschulte Servicekräfte bereitgestellt. Diese Veranstaltung wurde von einem externen Anbieter organisiert und demonstrierte unsere Fähigkeit, effektiv in großem Umfang zu arbeiten.</p>
                </div>
                <div className="box">
                    <h4 className="titre3">Umfassender Auf- und Abbau des Buffets</h4>
                    <p className="texte">Der Service beinhaltete den kompletten Aufbau sowie den Abbau des Buffets, das vom Veranstalter geliefert wurde. Unsere Servicekräfte haben sich um alle Aspekte des Buffet-Managements gekümmert, um eine ansprechende Präsentation und reibungslose Abläufe zu gewährleisten. Ebenso wurde das Geschirr, zur Verfügung gestellt vom Anbieter, nach der Veranstaltung von unseren Kräften abgeräumt und gespült..</p>
                </div>
                <div className="box">
                    <h4 className="titre4">Hervorragende Gästebetreuung</h4>
                    <p className="texte">Ein wesentlicher Bestandteil unseres Services ist die Gewährleistung eines reibungslosen Veranstaltungsablaufs und die freundliche Bedienung aller Gäste. Unsere Servicekräfte sind darauf trainiert, auf die Bedürfnisse jedes Gastes einzugehen und einen exzellenten Service zu bieten, der den Erfolg Ihrer Veranstaltung sicherstellt.</p>
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