const express = require("express");
const router = express.Router();
const donatariosController = require("../Controladores/donatarioController");

// Obtener todos los donatarios
router.get("/", donatariosController.getAll);

// Obtener un donatario por RFC
router.get("/:id", donatariosController.getByRfc);

// Agregar un nuevo donatario
router.post("/", donatariosController.add);

// Actualizar un donatario existente
router.put("/:id", donatariosController.update);

// Eliminar un donatario
router.delete("/:id", donatariosController.delete);

module.exports = router;
