const express = require("express");
const router = express.Router();
const donadoresController = require("../Controladores/donadorController");

// Obtener todos los donadores
router.get("/", donadoresController.getAll);

// Obtener un donador por RFC
router.get("/:rfc", donadoresController.getByRfc);

// Agregar un nuevo donador
router.post("/", donadoresController.add);

// Actualizar un donador existente
router.put("/:rfc", donadoresController.update);

// Eliminar un donador
router.delete("/:rfc", donadoresController.delete);

module.exports = router;
