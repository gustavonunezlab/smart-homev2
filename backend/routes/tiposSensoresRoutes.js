const express = require("express");
const router = express.Router();
const TiposSensores = require("../database/models/TiposSensores");
const TipoSensorController = require("../controllers/TipoSensorController");

var Sequelize = require("sequelize");
const { Router } = require("express");

router.get("/", TipoSensorController.getAllTiposSensores);
router.get('/:id', TipoSensorController.getTipoSensor);
router.get('/search/:text', TipoSensorController.search);
router.post('/', TipoSensorController.addTipoSensor);
router.put("/:id", TipoSensorController.updateTipoSensor);

module.exports = router;
