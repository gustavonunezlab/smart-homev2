const express = require("express");
const router = express.Router();
const Elementos = require('../database/models/Elementos');

router.get('/', (req, res) => {
    Elementos.findAll().then(elementos => {
       res.json(elementos);
   });
});

router.get('/:id', (req, res) => {
    Elementos.findByPk(req.params.id).then(elementos => {
       res.json(elementos);
   });
});

router.post('/', (req, res) => {
    Elementos.create({
        elemento: req.body.elemento,
        codigo: req.body.codigo,
        id_sensor: req.body.id_sensor,
        estado: req.body.estado
    }).then(post => {
        res.json(post);
    }).catch(err => {
        res.json(err);
    });
});

router.put('/:id', (req, res) => {
    Elementos.update({
        elemento: req.body.elemento,
        codigo: req.body.codigo,
        id_sensor: req.body.id_sensor,
        estado: req.body.estado
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
    Elementos.destroy({
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