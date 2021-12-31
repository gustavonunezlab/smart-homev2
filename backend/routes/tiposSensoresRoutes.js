const express = require("express");
const router = express.Router();
const TipoSensorController = require("../controllers/TipoSensorController");

router.get("/", TipoSensorController.getAllTiposSensores);
router.get('/:id', TipoSensorController.getTipoSensor);
router.get('/search/:text', TipoSensorController.search);
router.post('/', TipoSensorController.addTipoSensor);
router.put("/", TipoSensorController.updateTipoSensor);

module.exports = router;
