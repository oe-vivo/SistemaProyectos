const { Donatario } = require('../models');

// Obtener todos los donatarios
exports.getAll = async (req, res) => {
    try {
        const donatarios = await Donatario.findAll();
        res.json(donatarios);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Obtener donatario por RFC
exports.getByRfc = async (req, res) => {
    try {
        const donatario = await Donatario.findOne({ where: { rfc: req.params.rfc }});
        if (donatario) {
            res.json(donatario);
        } else {
            res.status(404).send('Donatario no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Agregar un nuevo donatario
exports.add = async (req, res) => {
    try {
        const newDonatario = await Donatario.create(req.body);
        res.status(201).json(newDonatario);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Actualizar un donatario
exports.update = async (req, res) => {
    try {
        const updated = await Donatario.update(req.body, {
            where: { rfc: req.params.rfc }
        });
        if (updated) {
            const updatedDonatario = await Donatario.findOne({ where: { rfc: req.params.rfc }});
            res.status(200).json(updatedDonatario);
        } else {
            res.status(404).send('Donatario no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Eliminar un donatario
exports.delete = async (req, res) => {
    try {
        const deleted = await Donatario.destroy({
            where: { rfc: req.params.rfc }
        });
        if (deleted) {
            res.status(200).send('Donatario eliminado');
        } else {
            res.status(404).send('Donatario no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
