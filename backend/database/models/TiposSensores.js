const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class TiposSensores extends Model {}
TiposSensores.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo_sensor: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Introduzca un nombre para el tipo sensor.'
        }
      }
    },
  },
  {
    sequelize,
    modelName: "tipos_sensores",
    timestamps: false
  }
);

module.exports = TiposSensores;

/*

Relacion con Sensor one to many a traves de id_sensor

*/
