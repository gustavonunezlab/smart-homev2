const express = require("express");
const router = express.Router();
const Controlador = require('../database/models/Controlador');

router.get('/', (req, res) => {
    Controlador.findAll().then(controlador => {
       res.json(controlador);
   });
});

router.get('/:id', (req, res) => {
    Controlador.findByPk(req.params.id).then(controlador => {
       res.json(controlador);
   });
});

router.post('/', (req, res) => {
    Controlador.create({
        controlador: req.body.controlador,
    }).then(post => {
        res.json(post);
    });
});

router.put('/:id', (req, res) => {
    Controlador.update({
        controlador: req.body.controlador,
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

router.delete('/:id', (req, res) => { 
    Controlador.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

module.exports = router;