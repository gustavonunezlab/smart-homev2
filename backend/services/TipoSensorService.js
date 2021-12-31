const database = require("../database/db");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

class TipoSensorService {
  static async getAllTiposSensores() {
    try {
      return await database.models.tipos_sensores.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getTipoSensor(id) {
    try {
      const theTipoSensor = await database.models.tipos_sensores.findOne({
        where: { id: Number(id) },
      });
      return theTipoSensor;
    } catch (error) {
      throw error;
    }
  }

  static async search(text) {
    try {
      return await database.models.tipos_sensores.findAll({
        where: {
          tipo_sensor: {
            [Sequelize.Op.like]: "%" + text.toLowerCase() + "%",
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async addTipoSensor(newTipoSensor) {
    try {
      return await database.models.tipos_sensores.create(newTipoSensor);
    } catch (error) {
      error.message =
        "Ya existe un Tipo de Sensor con ese nombre. Por favor, cambie el nombre.";
      throw error;
    }
  }

  static async updateTipoSensor(id, updateTipoSensor) {
    try {
      const tipoSensorToUpdate = await database.models.tipos_sensores.findOne({
        where: { id: Number(id) },
      });
      if (!tipoSensorToUpdate) {
        throw new Error("No se encontró el Tipo Sensor a actualizar.");
      }

      if (updateTipoSensor) {
        await database.models.tipos_sensores.update(updateTipoSensor, {
          where: { id: Number(id) },
        });
        return updateTipoSensor;
      }
      return null;
    } catch (error) {
      error.message =
        "Ya existe un Tipo de Sensor con ese nombre. Por favor, cambie el nombre.";
      throw error;
    }
  }
}

module.exports = TipoSensorService;
