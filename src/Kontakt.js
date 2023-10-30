import React, { useState } from 'react';
import axios from 'axios';
import './Kontakt.css';

function Kontakt() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        tel: '',
        email: '',
        devis: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/send-email', formData);
            if (response.data.success) {
                alert('E-Mail erfolgreich gesendet!');
            } else {
                alert('Fehler beim Senden des E-Mails.');
            }
        } catch (error) {
            alert('Es gab einen Fehler beim Senden Ihrer Nachricht.');
        }
    };

    return (
        <div className="kontakt">
            <section className="kontakt-section1">
                <div className="kontakt-text">
                    <h1>Willkommen</h1>
                    <h2>Schicken Sie uns eine Nachricht</h2>
                    <p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                </div>
            </section>

            <section className="kontakt-section2">
                <form className="kontakt-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Vorname"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        placeholder="Telefonnummer"
                        name="tel"
                        value={formData.tel}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="E-Mail-Adresse"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="Angebot"
                        name="devis"
                        value={formData.devis}
                        onChange={handleChange}
                    />
                    <button type="submit">Senden</button>
                </form>
            </section>
        </div>
    );
}

export default Kontakt;
