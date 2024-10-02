const express = require("express");
const {
  getActividades,
  getActividadById,
  getActividadesByTipo,
  getActividadesByNivel,
  postActividad,
  putActividad,
  deleteActividad,
} = require("../controllers/actividades");

const router = express.Router();

// Rutas
router.get("/tipo/:tipo", getActividadesByTipo); // Filtrar por tipo de actividad
router.get("/nivel/:nivel", getActividadesByNivel); // Filtrar por nivel de dificultad
router.get("/:id", getActividadById); // Obtener una actividad por ID
router.get("/", getActividades); // Obtener todas las actividades
router.post("/", postActividad); // Crear una nueva actividad
router.put("/:id", putActividad); // Actualizar una actividad por ID
router.delete("/:id", deleteActividad); // Eliminar una actividad por ID

module.exports = router;
