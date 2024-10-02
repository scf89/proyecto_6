const mongoose = require("mongoose");

const actividadSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true }, // Nombre de la actividad, por ejemplo, yoga, spinning
    descripcion: { type: String, required: true }, // Breve descripción de la actividad
    duracion: { type: Number, required: true }, // Duración de la actividad en minutos
    nivel: {
      type: String,
      required: true,
      enum: ["principiante", "intermedio", "avanzado"], // Nivel de dificultad
    },
    tipo: {
      type: String,
      required: true,
      enum: ["cardio", "fuerza", "flexibilidad", "mixto"], // Tipo de actividad
    },
    gimnasios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gimnasio" }], // Relación con múltiples gimnasios
    instructores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Instructor" }], // Relación con múltiples instructores
    precio: { type: Number, required: false }, // Precio opcional de la actividad
  },
  {
    timestamps: true,
    collection: "actividades",
  }
);

const Actividad = mongoose.model("Actividad", actividadSchema, "actividades");
module.exports = Actividad;
