// About.js
import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-page">

            <div className="about-section">
                <img src="image11.jpg" alt="Section 1" className="section-image"/>
                <p>This is the text for section 1.</p>
            </div>

            <div className="about-section">
                <img src="image15.webp" alt="Section 2" className="section-image"/>
                <p>This is different text for section 2.</p>
            </div>

            <div className="about-section">
                <img src="path_to_image_3.jpg" alt="Section 3" className="section-image"/>
                <p>Another uniqunother unique text for sectione nother unique text for sectiontext for section 3.</p>
            </div>

            <div className="about-section">
                <img src="path_to_image_4.jpg" alt="Section 4" className="section-image"/>
                <p>Text for section 4 here.</p>
            </div>

            <div className="about-section">
                <img src="path_to_image_5.jpg" alt="Section 5" className="section-image"/>
                <p>Yet another distinct text for section 5.</p>
            </div>

            <div className="about-section">
                <img src="path_to_image_6.jpg" alt="Section 6" className="section-image"/>
                <p>Final section's text goes here for section 6.</p>
            </div>

        </div>
    );
}

export default About;
