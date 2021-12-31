const database = require("../database/db");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ElementoService {
  static async getAllElementos() {
    try {
      return await database.models.elementos.findAll({
        include: {
          model: database.models.sensores,
          attributes: ["id", "sensor", "codigo", "ip", "estado"],
          include: {
            model: database.models.tipos_sensores,
          },
        },
        attributes: ["id", "elemento", "codigo", "estado"],
      });
    } catch (error) {
      throw error;
    }
  }

  static async getElemento(id) {
    try {
      const theElemento = await database.models.elementos.findOne({
        where: { id: Number(id) },
        include: {
          model: database.models.sensores,
          attributes: ["id", "sensor", "codigo", "ip", "estado"],
          include: {
            model: database.models.tipos_sensores,
          },
        },
      });
      return theElemento;
    } catch (error) {
      throw error;
    }
  }

  static async getElementoByCode(codigo) {
    try {
      return await database.models.elementos.findOne({
        where: { codigo: String(codigo) },
        include: {
          model: database.models.sensores,
          attributes: ["id", "sensor", "codigo", "ip", "estado"],
          include: {
            model: database.models.tipos_sensores,
          },
        },
        attributes: ["id", "elemento", "codigo", "estado"],
      });
    } catch (error) {
      throw error;
    }
  }

  static async search(text) {
    try {
      return await database.models.elementos.findAll({
        where: {
          elemento: {
            [Sequelize.Op.like]: "%" + text.toLowerCase() + "%",
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async addElemento(newElemento) {
    try {
      return await database.models.elementos.create(newElemento);
    } catch (error) {
      error.message =
        "Ya existe un Elemento con ese código. Por favor, cambie el código.";
      throw error;
    }
  }

  static async updateElemento(id, updateElemento) {
    try {
      const elementoToUpdate = await database.models.elementos.findOne({
        where: { id: Number(id) },
      });
      if (!elementoToUpdate) {
        throw new Error("No se encontró el Elemento a actualizar.");
      }

      if (updateElemento) {
        await database.models.elementos.update(updateElemento, {
          where: { id: Number(id) },
        });
        return updateElemento;
      }
      return null;
    } catch (error) {
      error.message =
        "Ya existe un Elemento con ese código. Por favor, cambie el código.";
      throw error;
    }
  }

  static async deleteElemento(id) {
    try {
      const elementoToDelete = await database.models.elementos.findOne({
        where: { id: Number(id) },
      });
      if (!elementoToDelete) {
        throw new Error("No se encontró el Elemento a eliminar.");
      }
      if (elementoToDelete) {

        await database.models.elementos.destroy({
          where: { id: Number(id) },
        });
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ElementoService;
