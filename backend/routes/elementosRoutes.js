const express = require("express");
const router = express.Router();
const Elementos = require("../database/models/Elementos");
const Sensores = require("../database/models/Sensores");
const TiposSensores = require("../database/models/TiposSensores");

var Sequelize = require("sequelize");

router.get("/", (req, res) => {
  Elementos.findAll({
    include: {
      model: Sensores,
      attributes: ["id", "sensor", "codigo", "ip", "estado"],
      include: {
        model: TiposSensores,
      },
    },
    attributes: ["id", "elemento", "codigo", "estado"],
  }).then((elementos) => {
    res.json(elementos);
  });
});

router.get("/:id", (req, res) => {
  Elementos.findByPk(req.params.id, {
    include: {
      model: Sensores,
      attributes: ["id", "sensor", "codigo", "ip", "estado"],
      include: {
        model: TiposSensores,
      },
    },
    attributes: ["id", "elemento", "codigo", "estado"],
  }).then((elementos) => {
    res.json(elementos);
  });
});

router.get("/codigo/:codigo", (req, res) => {
  Elementos.findOne({
    where: {
      codigo: req.params.codigo,
    },
    include: {
      model: Sensores,
      attributes: ["id", "sensor", "codigo", "ip", "estado"],
      include: {
        model: TiposSensores,
      },
    },
    attributes: ["id", "elemento", "codigo", "estado"],
  }).then((elemento) => {
    res.json(elemento);
  });
});

router.get("/search/:text", (req, res) => {
  const text = req.params.text;
  Elementos.findAll({
    where: {
      elemento: { [Sequelize.Op.like]: "%" + text.toLowerCase() + "%" },
    },
  }).then((elementos) => {
    res.json(elementos);
  });
});

router.post("/", (req, res) => {
  Elementos.create({
    elemento: req.body.elemento,
    codigo: req.body.codigo,
    estado: req.body.estado,
    id_controlador: 1, //Controlador por defecto
  })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  Elementos.update(
    {
      elemento: req.body.elemento,
      codigo: req.body.codigo,
      estado: req.body.estado,
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
  Elementos.destroy({
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
