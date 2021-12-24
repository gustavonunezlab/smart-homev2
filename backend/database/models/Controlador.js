const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Controlador extends Model {}
Controlador.init(
  {
    controlador: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Introduzca un nombre para el controlador.'
        }
      }
    },
  },
  {
    sequelize,
    modelName: "controlador",
  }
);

module.exports = Controlador;

/*

Relacion con sensores one to Many a traves de id_sensor
Relacion con elementos one to Many a traves de id_elemento

*/