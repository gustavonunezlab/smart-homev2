const express = require("express");
const router = express.Router();
const TiposSensores = require('../database/models/TiposSensores');

router.get('/', (req, res) => {
    TiposSensores.findAll().then(tiposSensores => {
       res.json(tiposSensores);
   });
});

router.get('/:id', (req, res) => {
    TiposSensores.findByPk(req.params.id).then(tiposSensores => {
       res.json(tiposSensores);
   });
});

router.post('/', (req, res) => {
    TiposSensores.create({
        tipo_sensor: req.body.tipo_sensor,
        
    }).then(post => {
        res.json(post);
    }).catch(err => {
        res.json(err);
    });
});

router.put('/:id', (req, res) => {
    TiposSensores.update({
        tipo_sensor: req.body.tipo_sensor,
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

router.delete('/:id', (req, res) => { 
    TiposSensores.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;