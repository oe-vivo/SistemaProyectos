// auth.js

const jwt = require('jsonwebtoken');

// Clave secreta para firmar el token (debe mantenerse segura)
const secretKey = 'miClaveSecreta';

// Función para generar un token
function generarToken(username) {
    // Crea un token JWT con el nombre de usuario y una clave secreta
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' }); // Expira en 1 hora (puedes ajustar el tiempo)

    return token;
}

module.exports = {
    generarToken,
};
