const express = require("express");
const router = express.Router();
const Sensores = require("../database/models/Sensores");
const Elementos = require("../database/models/Elementos");
const TiposSensores = require("../database/models/TiposSensores");

router.get("/", (req, res) => {
  Sensores.findAll({
    include: [
      {
        model: Elementos,
        attributes: ["id", "elemento", "codigo", "estado"],
      },
      {
        model: TiposSensores,
      },
    ],
    attributes: ["id", "sensor", "codigo", "estado"],
  }).then((sensores) => {
    res.json(sensores);
  });
});

router.get("/:id", (req, res) => {
  Sensores.findByPk(req.params.id, {
    include: [
      {
        model: Elementos,
        attributes: ["id", "elemento", "codigo", "estado"],
      },
      {
        model: TiposSensores,
      },
    ],
    attributes: ["id", "sensor", "codigo", "estado"],
  }).then((sensores) => {
    res.json(sensores);
  });
});

router.post("/", (req, res) => {
  Sensores.create({
    codigo: req.body.codigo,
    sensor: req.body.sensor,
    id_tipo_sensor: req.body.id_tipo_sensor,
    id_elemento: req.body.id_elemento,
    id_controlador: 1, //Controlador por defecto
    estado: req.body.estado,
    ip: req.body.ip,
  })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  Sensores.update(
    {
      codigo: req.body.codigo,
      sensor: req.body.sensor,
      id_tipo_sensor: req.body.id_tipo_sensor,
      id_elemento: req.body.id_elemento,
      estado: req.body.estado,
      ip: req.body.ip,
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

router.delete("/:id", (req, res) => {
  Sensores.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
