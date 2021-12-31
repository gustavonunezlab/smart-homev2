const express = require("express");
const router = express.Router();
const Utils = require("../utils/Utils");
const ElementoService = require("../services/ElementoService");

const util = new Utils();

class ElementoController {
  static async getAllElementos(req, res) {
    const allElementos = await ElementoService.getAllElementos();
    if (allElementos.length > 0) {
      util.setSuccess(200, "Elementos encontrados", allElementos);
    } else {
      util.setSuccess(200, "No se encontró ningún Elemento");
    }
    return util.send(res);
  }
  catch(error) {
    util.setError(400, error);
    return util.send(res);
  }

  static async getElemento(req, res) {
    const { id } = req.params;
    console.log(id);
    if (!Number(id)) {
      util.setError(400, "Por favor ingrese un valor numérico");
      return util.send(res);
    }

    try {
      const theElemento = await ElementoService.getElemento(id);
      if (!theElemento) {
        util.setError(404, `No se pudo encontrar el Elemento con id ${id}`);
      } else {
        util.setSuccess(200, "Elemento encontrado", theElemento);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getElementoByCode(req, res) {
    const { codigo } = req.params;

    if (!String(codigo)) {
      util.setError(400, "Por favor ingrese una cadena válida");
      return util.send(res);
    }

    try {
      const theElemento = await ElementoService.getElementoByCode(codigo);
      if (!theElemento) {
        util.setError(
          501,
          `No se puede encontrar un Elemento con código ${codigo}`
        );
      } else {
        util.setSuccess(200, "Elemento encontrado", theElemento);
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
      const allElementos = await ElementoService.search(text);
      if (allElementos.length > 0) {
        util.setSuccess(200, "Elementos encontrados", allElementos);
      } else {
        util.setSuccess(200, "No se encontró ningún Elemento");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addElemento(req, res) {
    if (!req.body.elemento) {
      util.setError(400, "Por favor introduzca todos los detalles");
      return util.send(res);
    }
    const newElemento = req.body;
    newElemento.id_controlador = 1; //Controlador por defecto

    try {
      const createdElemento = await ElementoService.addElemento(newElemento);
      util.setSuccess(200, "Elemento agregado", createdElemento);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateElemento(req, res) {
    const theElemento = req.body;
    if (!Number(theElemento.id)) {
      util.setError(400, "Por favor ingrese un valor numérico");
      return util.send(res);
    }

    try {
      const updatedElemento = await ElementoService.updateElemento(
        theElemento.id,
        theElemento
      );
      util.setSuccess(200, "Elemento actualizado", updatedElemento);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async deleteElemento(req, res) {
    const theElemento = req.params;
    if (!Number(theElemento.id)) {
      util.setError(400, "Por favor ingrese un valor numérico");
      return util.send(res);
    }
    try {
      const elementoToDelete = await ElementoService.deleteElemento(
        theElemento.id
      );
      util.setSuccess(200, "Elemento eliminado", elementoToDelete);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

module.exports = ElementoController;
