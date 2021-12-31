const express = require("express");
const router = express.Router();
const Controlador = require("../database/models/Controlador");
const ControladorController = require("../controllers/ControladorController");

router.get('/:id', ControladorController.getControlador);
router.put('/', ControladorController.updateControlador);

module.exports = router;
