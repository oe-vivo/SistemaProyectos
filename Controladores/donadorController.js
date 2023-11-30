const { Donador } = require('../models');

// Obtener todos los donadores
exports.getAll = async (req, res) => {
    try {
        const donadores = await Donador.findAll();
        res.json(donadores);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Obtener donador por RFC
exports.getByRfc = async (req, res) => {
    try {
        const donador = await Donador.findOne({ where: { rfc: req.params.rfc }});
        if (donador) {
            res.json(donador);
        } else {
            res.status(404).send('Donador no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Agregar un nuevo donador
exports.add = async (req, res) => {
    try {
        const newDonador = await Donador.create(req.body);
        res.status(201).json(newDonador);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Actualizar un donador
exports.update = async (req, res) => {
    try {
        const updated = await Donador.update(req.body, {
            where: { rfc: req.params.rfc }
        });
        if (updated) {
            const updatedDonador = await Donador.findOne({ where: { rfc: req.params.rfc }});
            res.status(200).json(updatedDonador);
        } else {
            res.status(404).send('Donador no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Eliminar un donador
exports.delete = async (req, res) => {
    try {
        const deleted = await Donador.destroy({
            where: { rfc: req.params.rfc }
        });
        if (deleted) {
            res.status(200).send('Donador eliminado');
        } else {
            res.status(404).send('Donador no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
