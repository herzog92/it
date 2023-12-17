const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config(); // Charger les variables d'environnement depuis .env

const app = express();
const PORT = 3001;

// Middleware pour JSON et CORS
app.use(express.json());
app.use(cors());

// Renvoyer le fichier index.html pour toutes les requêtes GET à la racine
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint pour l'envoi d'email
app.post('/send-email', async (req, res) => {
    const { nom, prenom, tel, email, devis } = req.body;

    const bodyFormData = new URLSearchParams();
    bodyFormData.append('apikey', process.env.ELASTIC_API_KEY);
    bodyFormData.append('from', 'votre_email@email.com');
    bodyFormData.append('fromName', 'Votre Nom');
    bodyFormData.append('to', 'herzogmoffo@gmail.com');
    bodyFormData.append('subject', `Neue Nachricht von ${nom} ${prenom}`);
    bodyFormData.append('bodyHtml', `
        <p>Name: ${nom}</p>
        <p>Vorname: ${prenom}</p>
        <p>Tel: ${tel}</p>
        <p>Email: ${email}</p>
        <p>Angebot: ${devis}</p>
    `);

    try {
        await axios.post('https://api.elasticemail.com/v2/email/send', bodyFormData);
        res.json({ success: true });
    } catch (error) {
        console.error("Fehler beim Senden der E-Mail:", error);
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

