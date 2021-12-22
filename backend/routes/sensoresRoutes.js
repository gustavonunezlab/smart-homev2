const express = require("express");
const router = express.Router();
const Sensores = require('../database/models/Sensores');

router.get('/', (req, res) => {
   Sensores.findAll().then(sensores => {
       res.json(sensores);
   });
});

router.get('/:id', (req, res) => {
    Sensores.findByPk(req.params.id).then(sensores => {
       res.json(sensores);
   });
});

router.post('/', (req, res) => {
    Sensores.create({
        codigo: req.body.codigo,
        sensor: req.body.sensor,
        id_tipo_sensor: req.body.id_tipo_sensor,
        estado: req.body.estado
    }).then(post => {
        res.json(post);
    });
});

router.put('/:id', (req, res) => {
    Sensores.update({
        codigo: req.body.codigo,
        sensor: req.body.sensor,
        id_tipo_sensor: req.body.id_tipo_sensor,
        estado: req.body.estado
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

router.delete('/:id', (req, res) => { 
    Sensores.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

module.exports = router;