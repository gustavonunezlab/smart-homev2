const { Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../db");

class Sensores extends Model {}
Sensores.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sensor: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Introduzca un nombre para el sensor.",
        },
      },
    },
    codigo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Introduzca un código para el sensor.",
        },
      },
    },
    ip: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        isIP: {
          args: true,
          msg: "Verifique el formato de ip (IPv4 o IPv6).",
        },
      },
    },
    temperatura: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "sensores",
    timestamps: false,
  }
);

module.exports = Sensores;