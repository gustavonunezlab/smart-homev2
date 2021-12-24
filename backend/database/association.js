const TiposSensores = require("./models/TiposSensores");
const Sensores = require("./models/Sensores");
const Elementos = require("./models/Elementos");
const Controlador = require("./models/Controlador");

//1 to 1 Elementos - Sensores
Sensores.belongsTo(Elementos, {
  foreignKey: "id_elemento",
});

Elementos.hasOne(Sensores, {
  foreignKey: "id_elemento",
});

//1 to Many Sensores - TiposSensores
Sensores.belongsTo(TiposSensores, 
    { foreignKey: "id_tipo_sensor" 
});

TiposSensores.hasMany(Sensores, 
    { foreignKey: "id_tipo_sensor" 
});

//1 to Many Sensores - Controlador
Sensores.belongsTo(Controlador, 
    { foreignKey: "id_controlador" 
});

Controlador.hasMany(Sensores, 
    { foreignKey: "id_controlador" 
});

//1 to Many Elementos - Controlador
Elementos.belongsTo(Controlador, 
    { foreignKey: "id_controlador" 
});

Controlador.hasMany(Elementos, 
    { foreignKey: "id_controlador" 
});
