const express = require("express");
const router = express.Router();
const ElementoController = require("../controllers/ElementoController");

const Elementos = require("../database/models/Elementos");
const Sensores = require("../database/models/Sensores");
const TiposSensores = require("../database/models/TiposSensores");

var Sequelize = require("sequelize");
const ElementoService = require("../services/ElementoService");

router.get("/", ElementoController.getAllElementos);
router.get("/:id", ElementoController.getElemento);
router.get("/codigo/:codigo", ElementoController.getElementoByCode);
router.get("/search/:text", ElementoController.search);
router.post("/", ElementoController.addElemento);
router.put("/", ElementoController.updateElemento);
router.delete("/:id", ElementoController.deleteElemento);

module.exports = router;
