// usuarioController.js

const { Usuario } = require('../models'); // Importar el modelo Usuario

// Función para verificar las credenciales del usuario
async function verificarCredenciales(username, password) {
    try {
        // Buscar un usuario con el nombre de usuario proporcionado
        const usuario = await Usuario.findOne({ where: { username } });

        // Si no se encuentra el usuario, retornar false
        if (!usuario) {
            return false;
        }

        // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
        if (password === usuario.password) {
            // Las contraseñas coinciden, por lo que las credenciales son válidas
            return true;
        } else {
            // Las contraseñas no coinciden, las credenciales no son válidas
            return false;
        }
    } catch (error) {
        console.error('Error al verificar credenciales:', error);
        return false;
    }
}

module.exports = {
    verificarCredenciales,
};
