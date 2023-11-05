import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Kontakt</h4>
                    <span>Email:  geschaeftsfuerung.ug@gmail.com </span>
                    <span>Postanschrift : Luitpold str 11.  92637 Weiden</span>
                    <span>Telefonnummer:+49 176 76707335 </span>
                    
                </div>
                <div className="footer-section">
                    <h4>Anlässe</h4>
                    <span>Sommerfest</span>
                    <span>Teambuilding</span>
                    <span>Tagungspause</span>
                    <span>Kick-off</span>
                    <span>Jubiläumsfeier</span>
                    <span>Weihnachtsfeier</span>
                </div>
                <div className="footer-section">
                    <h4>Öffnungszeiten</h4>
                    <span>Montag-Freitag</span>
                    <span>von 7 bis 20uhr</span>
                    
                </div>
                <div className="footer-section">
                    <h4>Themen</h4>
                    <span>Team Event</span>
                    <span>Indoor Event</span>
                    <span>Outdoor Event</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
