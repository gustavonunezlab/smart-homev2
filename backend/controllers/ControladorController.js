const express = require("express");
const router = express.Router();
const Utils = require("../utils/Utils");
const ControladorService = require("../services/ControladorService");

const util = new Utils();

class ControladorController {
  static async getControlador(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Por favor ingrese un valor numérico");
      return util.send(res);
    }

    try {
      const theControlador = await ControladorService.getControlador(id);

      if (!theControlador) {
        util.setError(404, `No se pudo encontrar el Controlador con id ${id}`);
      } else {
        util.setSuccess(200, "Controlador encontrado", theControlador);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async updateControlador(req, res) {
    const theControlador = req.body;
    if (!Number(theControlador.id)) {
      util.setError(400, "Por favor ingrese un valor numérico");
      return util.send(res);
    }

    try {
      const updatedControlador = await ControladorService.updateControlador(
        theControlador.id,
        theControlador
      );
      util.setSuccess(200, "Controlador actualizado", updatedControlador);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

module.exports = ControladorController;
