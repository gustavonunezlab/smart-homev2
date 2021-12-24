const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Sensores extends Model {}
Sensores.init(
  {
    codigo: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    sensor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "sensores",
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