const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class TiposSensores extends Model {}
TiposSensores.init(
  {
    tipo_sensor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "tipos_sensores",
  }
);

module.exports = TiposSensores;
