const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Sensores extends Model {}
Sensores.init(
  {
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
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "sensores",
    timestamps: false,
  }
);

module.exports = Sensores;

/*

Relacion con Elementos one to one a traves de id_elemento
Relacion con TipoSensor many to one a traves de id_tipo_sensor
Relacion con Controlador many to one a traves de id_controlador

        Sensores.associate = function (models) {
            Sensores.belongsTo(models.tiposSensores, {
              foreignKey: 'id_tipo_sensor'
        });

        TiposSensores.associate = function (models) {
            TiposSensores.hasMany(models.sensores, {
            foreignKey: 'id_tipo_sensor'
        });


    */
