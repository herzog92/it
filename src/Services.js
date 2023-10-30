import React from 'react';
import './Services.css';

function Service() {
    return (
        <div className="service-page">
            {/* Section 1 */}
            <div className="section background-section-service">
                <div className="overlay-text">
                    <h1 className="titre centre">Willkommen bei All-activity-group UG</h1>
                </div>
            </div>

            {/* Section 2 */}
            <div className="section rectangle02">
                <div className="text-container">
                    <h3 className="titre">Unübertroffene Servicequalität</h3>
                    <p className="texte">Unsere jahrelange Erfahrung im Catering-Bereich hat uns gezeigt, wie wichtig erstklassiger Service ist. Bei jeder Veranstaltung, sei es ein großes Bankett oder ein intimes Abendessen, setzen wir alles daran, höchste Standards in der Servicequalität zu erfüllen. Jedes Detail, von der Vorbereitung bis zur Präsentation, wird sorgfältig berücksichtigt, um unseren Kunden ein makelloses Erlebnis zu bieten.</p>
                </div>
                <div className="image-container">
                    <img src="image9.webp" alt="Service" />
                </div>
            </div>

            {/* Section 3 */}
            <div className="section white-section">
                <div className="box">
                    <h4 className="titre">Unser Engagement für Exzellenz</h4>
                    <p className="texte">Für uns ist jeder Event nicht nur eine weitere Aufgabe, sondern eine Gelegenheit, uns selbst zu übertreffen. Dieses Engagement für Exzellenz zeigt sich in jedem Aspekt unseres Geschäfts. Unsere Kunden sind unser wertvollstes Gut, und ihre Zufriedenheit ist der Maßstab für unseren Erfolg. Daher gehen wir bei jedem Auftrag die Extra-Meile, um sicherzustellen, dass ihre Erwartungen nicht nur erfüllt, sondern übertroffen werden.</p>
                </div>
                <div className="box">
                    <h4 className="titre">Bewährte Erfahrung</h4>
                    <p className="texte">Seit unserer Gründung haben wir unzählige Veranstaltungen begleitet und uns einen Namen als eines der zuverlässigsten und renommiertesten Catering-Unternehmen gemacht. Unsere Erfahrung erstreckt sich über eine Vielzahl von Events, wodurch wir in der Lage sind, uns an verschiedene Bedürfnisse und Wünsche anzupassen und gleichzeitig unsere einzigartige Note beizubehalten.</p>
                </div>
                <div className="box">
                    <h4 className="titre">Höchster Professionalismus</h4>
                    <p className="texte">Unser Team besteht aus professionell ausgebildeten Kellnern und Catering-Experten, die sich durch ihre Leidenschaft für ihren Beruf und ihre Expertise auszeichnen. Diese Kombination aus Talent und Fachwissen ermöglicht es uns, ein Höchstmaß an Professionalität zu gewährleisten, sodass unsere Kunden sich entspannen und sicher sein können, dass ihre Gäste in besten Händen sind</p>
                </div>
            </div>

            {/* Section 4 */}
            <div className="section rectangle02 reversed">
                <div className="text-container">
                    <h3 className="titre">Die Passion, es richtig zu machen</h3>
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