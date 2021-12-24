const express = require("express");
const router = express.Router();
const SensoresRoutes = require("./routes/sensoresRoutes");
const TiposSensoresRoutes = require("./routes/tiposSensoresRoutes");
const Elementos = require("./routes/elementosRoutes");
const Controlador = require("./routes/controladorRoutes");

router.get('/', (req, res) => {
    res.send('hola');
})

router.use('/sensores', SensoresRoutes);
router.use('/tipos_sensores', TiposSensoresRoutes);
router.use('/elementos', Elementos);
router.use('/controlador', Controlador);

module.exports = router;