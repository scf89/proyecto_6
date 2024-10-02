require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const actividadesRouter = require("./src/api/routes/actividades");
const cors = require("cors");

const app = express();
console.log(process.env.DB_URL);

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/actividades", actividadesRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

app.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000");
});