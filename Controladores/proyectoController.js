const { Proyecto } = require('../models');

// Obtener todos los proyectos
exports.getAll = async (req, res) => {
    try {
        const proyectos = await Proyecto.findAll();
        res.json(proyectos);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Obtener proyecto por ID
exports.getById = async (req, res) => {
    try {
        const proyecto = await Proyecto.findByPk(req.params.id);
        if (proyecto) {
            res.json(proyecto);
        } else {
            res.status(404).send('Proyecto no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Agregar un nuevo proyecto
exports.add = async (req, res) => {
    try {
        const newProyecto = await Proyecto.create(req.body);
        res.status(201).json(newProyecto);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

// Actualizar un proyecto
exports.update = async (req, res) => {
    try {
        const updated = await Proyecto.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedProyecto = await Proyecto.findByPk(req.params.id);
            res.status(200).json(updatedProyecto);
        } else {
            res.status(404).send('Proyecto no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Eliminar un proyecto
exports.delete = async (req, res) => {
    try {
        const deleted = await Proyecto.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).send('Proyecto eliminado');
        } else {
            res.status(404).send('Proyecto no encontrado');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
