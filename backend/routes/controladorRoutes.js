const express = require("express");
const router = express.Router();
const Controlador = require("../database/models/Controlador");
const Elementos = require("../database/models/Elementos");
const Sensores = require("../database/models/Sensores");
const TiposSensores = require("../database/models/TiposSensores");

/* Los metodos findAll, post y delete se dejan comentados ya que solo habrá un solo controlador, 
que se genera de manera automática al desplegar la aplicación. Solo se podrá cambiar el nombre.*/

/*
router.get('/', (req, res) => {
    Controlador.findAll().then(controlador => {
       res.json(controlador);
   });
});
*/

router.get("/:id", (req, res) => {
  Controlador.findByPk(req.params.id, {
    include: [
      {
        model: Sensores,
        attributes: ["id", "sensor", "codigo", "ip", "estado"],
        include: [{
          model: TiposSensores,
        }, {
            model:Elementos,
            attributes: ["id", "elemento", "codigo", "estado"],
        }],
      },
      {
        model: Elementos,
        attributes: ["id", "elemento", "codigo", "estado"],
      },
    ],
  }).then((controlador) => {
    res.json(controlador);
  });
});

/*
router.post('/', (req, res) => {
    Controlador.create({
        controlador: req.body.controlador,
    }).then(post => {
        res.json(post);
    }).catch(err => {
        res.json(err);
    });
});
*/

router.put("/:id", (req, res) => {
  Controlador.update(
    {
      controlador: req.body.controlador,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

/*
router.delete('/:id', (req, res) => { 
    Controlador.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.json(err);
    });
});
*/

module.exports = router;
