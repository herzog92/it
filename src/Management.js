import React from 'react';
import './Management.css';
import { ParallaxProvider } from 'react-scroll-parallax';

function Management() {
    return (
        <ParallaxProvider>
            <div className="management-page">
                
                <div className="background-section-Management">
                    <div className="overlay-text">
                        <h1>Herzlich willkommen</h1>
                        <h2>bei All-activity-group UG</h2>
                        
                    </div>
                </div>

                <div className="rectangle03">
                    
                    <div className="image-container">
                        <img src="image11.jpg" alt="Management" />
                    </div>
                    <div className="text-container">
                        <div className="column">
                            <h3>Qualität,die überzeugt</h3>
                            <p>Unsere Dienstleistungen sind geprägt von höchster Qualität und Liebe zum Detail, sodass Ihre Veranstaltung reibungslos und beeindruckend verläuft.</p>
                        </div>
                        <div className="column">
                            <h3> Expertise & Engagement</h3>
                            <p>Dank jahrelanger Erfahrung und einem engagierten Team bieten wir Ihnen nicht nur Expertise, sondern auch das nötige Engagement, um Ihr Event zu einem vollen Erfolg zu machen</p>
                        </div>
                    </div>
                    
                </div>

                <div className="section-4">
                    <h1>Erfolgreiches Eventmanagement mit All-activity-group UG</h1>
                    <p>
                    In der Welt der Veranstaltungen ist das richtige Management der
                     Schlüssel zum Erfolg.
                      Bei All-activity-group UG vereinen wir Fachwissen mit
                       Leidenschaft, um jedes Event in ein unvergessliches Erlebnis 
                       zu verwandeln. Unsere langjährige Erfahrung ermöglicht es uns, auf die feinsten Details zu achten und gleichzeitig den großen Überblick zu behalten. Von der Konzeption bis zur Umsetzung, unsere Experten begleiten Sie in jeder Phase, um sicherzustellen, dass Ihre Veranstaltung nicht nur den Erwartungen entspricht, sondern diese übertrifft. Vertrauen Sie auf unser Engagement und unsere Expertise für Ihr nächstes Event.
                    </p>
                </div>

                <div className="rectangle03">
                    <div className="text-container">
                        <div className="column">
                            <h3> Erfahrene Eventmanager</h3>
                            <p>Unsere Eventmanager bringen nicht nur Erfahrung, sondern auch Leidenschaft mit. Ihr Event ist bei uns in den besten Händen, von Anfang bis Ende.</p>
                        </div>
                        <div className="column">
                            <h3>Individuelle Planung</h3>
                            <p>Jedes Event ist einzigartig. Unser Team nimmt sich die Zeit, Ihre Wünsche zu verstehen und individuell zu planen.</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="image4.webp" alt="Management" />
                    </div>
                </div>
                
            </div>
        </ParallaxProvider>
    );
}

export default Management;
