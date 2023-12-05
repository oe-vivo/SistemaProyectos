const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/google', async (req, res) => {
    try {
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const userid = payload['sub'];

        // Aquí, busca o crea un usuario en tu base de datos si es necesario
        // ...

        // Crear un token JWT personalizado
        const userJwt = jwt.sign({ userid }, process.env.JWT_SECRET, { expiresIn: '24h' });

        res.status(200).json({ token: userJwt });
    } catch (error) {
        res.status(401).json({ error: 'Autenticación fallida' });
    }
});

module.exports = router;
