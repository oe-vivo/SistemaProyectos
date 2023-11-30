// rutas.js
const { generarToken } = require('../Controladores/jwt');

const express = require('express');
const router = express.Router();
const usuarioController = require('../Controladores/usuarioController');

// Ruta para la autenticación de usuarios
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Verificar las credenciales usando el controlador
    const credencialesValidas = await usuarioController.verificarCredenciales(username, password);

    if (credencialesValidas) {
        // Las credenciales son válidas, puedes generar un token de autenticación y devolverlo como respuesta
        const token = generarToken(username);
        res.json({ success: true, token });
    } else {
        // Las credenciales no son válidas
        res.status(401).json({ success: false, message: 'Credenciales no válidas' });
    }
});

module.exports = router;
