const { Model, DataTypes }  = require("sequelize");
const sequelize = require("../db");

class Sensores extends Model { }
    Sensores.init({
        codigo: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        sensor: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        id_tipo_sensor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
    }, {
        sequelize, 
        modelName: 'sensores'
    });

    module.exports = Sensores;