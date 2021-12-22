const express = require("express");
const router = express.Router();
const SensoresRoutes = require("./routes/sensoresRoutes");
const TiposSensoresRoutes = require("./routes/tiposSensoresRoutes");

router.get('/', (req, res) => {
    res.send('hola');
})

router.use('/sensores', SensoresRoutes);
router.use('/tipos_sensores', TiposSensoresRoutes);


module.exports = router;