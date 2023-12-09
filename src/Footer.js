import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                {/* Section de contact */}
                <div className="footer-section">
                    <h4>Kontakt</h4>
                    <span>Email: astrid.thom1@gmx.de</span>
                    <span>Email: herzogmoffo@gmail.com</span>
                    <span>Postanschrift: Bessemerstr 9, 90411 Nürnberg</span>
                    <span>Telefonnummer: +49 176 43546046</span>
                    <span>oder: +49 15223755363</span>
                </div>
                
                {/* Section de services */}
                <div className="footer-section">
                    <h4>Dienstleistungen</h4>
                    <ul>
                        <li>Netzwerk Spezialist</li>
                        <li>IT Administrator Spezialist</li>
                        <li>Netzwerk Sicherheit mit Firewall</li>
                        <li>Netzwerk Sicherheit mit BSI Grundschutz</li>
                        <li>Netzwerksicherheit mit Pentest nach BSI Grundschutz</li>
                        <li>Cloud Computing</li>
                        <li>Cloud Computing und Datenschutz</li>
                    </ul>
                </div>
                
                {/* Section des heures d'ouverture */}
                <div className="footer-section">
                    <h4>Öffnungszeiten</h4>
                    <span>Montag-Freitag</span>
                    <span>von 7 bis 20 Uhr</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
