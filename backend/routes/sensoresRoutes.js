const express = require("express");
const router = express.Router();
const Sensores = require("../database/models/Sensores");
const Elementos = require("../database/models/Elementos");
const TiposSensores = require("../database/models/TiposSensores");

var Sequelize = require("sequelize");

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
    attributes: ["id", "sensor", "codigo", "estado",  "temperatura"],
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
    attributes: ["id", "sensor", "codigo", "estado", "temperatura"],
  }).then((sensores) => {
    res.json(sensores);
  });
});

router.get("/codigo/:codigo", (req, res) => {
  Sensores.findOne({
    where: {
      codigo: req.params.codigo,
    },
    include: [
      {
        model: Elementos,
        attributes: ["id", "elemento", "codigo", "estado"],
      },
      {
        model: TiposSensores,
      },
    ],
    attributes: ["id", "sensor", "codigo", "estado", "temperatura"],
  }).then((sensor) => {
    res.json(sensor);
  });
});

router.get("/search/:text", (req, res) => {
  const text = req.params.text;
  Sensores.findAll({
    where: {
      sensor: { [Sequelize.Op.like]: "%" + text.toLowerCase() + "%" },
    },
  }).then((sensores) => {
    res.json(sensores);
  });
});

router.post("/", (req, res) => {
  Sensores.create({
    codigo: req.body.codigo,
    sensor: req.body.sensor,
    id_tipo_sensor: req.body.tipos_sensore.id,
    id_elemento: req.body.elemento.id,
    id_controlador: 1, //Controlador por defecto
    estado: req.body.estado,
    ip: req.body.ip,
    temperatura: req.body.temperatura,
  })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/", (req, res) => {
  Sensores.update(
    {
      codigo: req.body.codigo,
      sensor: req.body.sensor,
      id_tipo_sensor: req.body.tipos_sensore.id,
      id_elemento: req.body.elemento.id,
      estado: req.body.estado,
      ip: req.body.ip,
      temperatura: req.body.temperatura,
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
