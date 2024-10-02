const mongoose = require("mongoose");

const gimnasioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    ubicacion: {
      lat: { type: Number, required: true },
      lon: { type: Number, required: true }
    },
    direccion: { type: String, required: true },
    actividades: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actividad" }], // Relación con múltiples actividades
  },
  {
    timestamps: true,
    collection: "gimnasios",
  }
);

const Gimnasio = mongoose.model("Gimnasio", gimnasioSchema, "gimnasios");
module.exports = Gimnasio;
