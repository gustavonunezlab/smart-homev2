const { Model, DataTypes }  = require("sequelize");
const sequelize = require("../db");

class Elementos extends Model { }
    Elementos.init({
        elemento: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        codigo: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
    }, {
        sequelize, 
        modelName: 'elementos'
    });

    module.exports = Elementos;

    /*

    Relacion con Sensor One to One a traves de id_sensor
    Relacion con Controlador many to one a traves de id_controlador

    */