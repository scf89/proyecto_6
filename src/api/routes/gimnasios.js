const express = require("express");
const {
  getGimnasios,
  getGimnasioById,
  getGimnasiosByActividad,
  getGimnasiosByUbicacion,
  postGimnasio,
  putGimnasio,
  deleteGimnasio,
} = require("../controllers/gimnasios");

const router = express.Router();

// Rutas en el orden correcto
router.get("/ubicacion", getGimnasiosByUbicacion); // Filtrar por ubicación
router.get("/actividad/:actividadId", getGimnasiosByActividad); // Filtrar por actividad
router.get("/:id", getGimnasioById); // Obtener un gimnasio por ID
router.get("/", getGimnasios); // Obtener todos los gimnasios
router.post("/", postGimnasio); // Crear un nuevo gimnasio
router.put("/:id", putGimnasio); // Actualizar un gimnasio por ID
router.delete("/:id", deleteGimnasio); // Eliminar un gimnasio por ID

module.exports = router;
