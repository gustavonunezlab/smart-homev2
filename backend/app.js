const express = require("express");
const app = express();
const sequelize = require("./database/db");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`La aplicación está ejecutándose en http://localhost:${PORT}`);

  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Conexión a la BD establecida");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
});
