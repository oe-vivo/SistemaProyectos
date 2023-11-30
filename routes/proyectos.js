const express = require("express");
const router = express.Router();
const proyectosController = require("../Controladores/proyectoController");

// Ruta para obtener todos los proyectos
router.get("/", proyectosController.getAll);

// Ruta para obtener un proyecto por su ID
router.get("/:id", proyectosController.getById);

// Ruta para agregar un nuevo proyecto
router.post("/", proyectosController.add);

// Ruta para actualizar un proyecto por su ID (método PUT)
router.put("/:id", proyectosController.update);

// Ruta para eliminar un proyecto por su ID (método DELETE)
router.delete("/:id", proyectosController.delete);

module.exports = router;
