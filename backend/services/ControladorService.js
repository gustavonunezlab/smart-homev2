const database = require("../database/db");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

class ControladorService {
  static async getControlador(id) {
    try {
      const theControlador = await database.models.controlador.findOne({
        where: { id: Number(id) },
        include: [
          {
            model: database.models.sensores,
            attributes: ["id", "sensor", "codigo", "ip", "estado"],
            include: [
              {
                model: database.models.tipos_sensores,
              },
              {
                model: database.models.elementos,
                attributes: ["id", "elemento", "codigo", "estado"],
              },
            ],
          },
          {
            model: database.models.elementos,
            attributes: ["id", "elemento", "codigo", "estado"],
          },
        ],
      });

      return theControlador;
    } catch (error) {
      throw error;
    }
  }

  static async updateControlador(id, updateControlador) {
    try {
      const controladorToUpdate = await database.models.controlador.findOne({
        where: { id: Number(id) },
      });
      if (!controladorToUpdate) {
        throw new Error("No se encontró el Controlador a actualizar.");
      }

      if (updateControlador) {
        await database.models.controlador.update(updateControlador, {
          where: { id: Number(id) },
        });
        return updateControlador;
      }
      return null;
    } catch (error) {
      error.message =
        "Ya existe un Controlador con ese nombre. Por favor, cambie el nombre.";
      throw error;
    }
  }
}

module.exports = ControladorService;
