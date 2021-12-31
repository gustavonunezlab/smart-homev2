const express = require("express");
const router = express.Router();
const Utils = require("../utils/Utils");
const TipoSensorService = require("../services/TipoSensorService");

const util = new Utils();

class TipoSensorController {
  static async getAllTiposSensores(req, res) {
    const allTiposSensores = await TipoSensorService.getAllTiposSensores();
    if (allTiposSensores.length > 0) {
      util.setSuccess(200, "Tipos de sensores encontrados", allTiposSensores);
    } else {
      util.setSuccess(200, "No se encontró ningún tipo de sensor");
    }
    return util.send(res);
  }
  catch(error) {
    util.setError(400, error);
    return util.send(res);
  }

  static async getTipoSensor(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Por favor ingrese un valor numérico");
      return util.send(res);
    }

    try {
      const theTipoSensor = await TipoSensorService.getTipoSensor(id);
      if (!theTipoSensor) {
        util.setError(
          404,
          `No se pudo encontrar el Tipo de Sensor con id ${id}`
        );
      } else {
        util.setSuccess(200, "Tipo de Sensor encontrado", theTipoSensor);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async search(req, res) {
    try {
      const { text } = req.params;
      const allTiposSensores = await TipoSensorService.search(text);
      if (allTiposSensores.length > 0) {
        util.setSuccess(200, "Tipos de Sensores encontrados", allTiposSensores);
      } else {
        util.setSuccess(200, "No se encontró ningún tipo de sensor");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addTipoSensor(req, res) {
    if (!req.body.tipo_sensor) {
      util.setError(400, "Por favor introduzca todos los detalles");
      return util.send(res);
    }
    const newTipoSensor = req.body;

    try {
      const createdTipoSensor = await TipoSensorService.addTipoSensor(
        newTipoSensor
      );
      util.setSuccess(200, "Tipo de Sensor agregado", createdTipoSensor);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateTipoSensor(req, res) {
    const theTipoSensor = req.body;
    if (!Number(theTipoSensor.id)) {
      util.setError(400, "Por favor ingrese un valor numérico");
      return util.send(res);
    }

    try {
      const updatedTipoSensor = await TipoSensorService.updateTipoSensor(
        theTipoSensor.id,
        theTipoSensor
      );
      util.setSuccess(200, "Tipo de Sensor actualizado", updatedTipoSensor);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

module.exports = TipoSensorController;
