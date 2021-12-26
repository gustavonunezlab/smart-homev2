const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Elementos extends Model {}
Elementos.init(
  {
    elemento: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Introduzca un nombre para el elemento.",
        },
      },
    },
    codigo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Introduzca un código para el elemento.",
        },
      },
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "elementos",
    timestamps: false,
  }
);

module.exports = Elementos;
