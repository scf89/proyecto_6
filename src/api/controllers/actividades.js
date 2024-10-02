const Actividad = require("../models/actividades"); // Importa el modelo de actividad

// Obtener todas las actividades
const getActividades = async (req, res, next) => {
  try {
    const actividades = await Actividad.find();
    return res.status(200).json(actividades);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

// Obtener una actividad por su ID
const getActividadById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actividad = await Actividad.findById(id);
    return res.status(200).json(actividad);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

// Obtener actividades por tipo
const getActividadesByTipo = async (req, res, next) => {
  try {
    const { tipo } = req.params;
    const actividades = await Actividad.find({ tipo });
    return res.status(200).json(actividades);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

// Obtener actividades por nivel de dificultad
const getActividadesByNivel = async (req, res, next) => {
  try {
    const { nivel } = req.params;
    const actividades = await Actividad.find({ nivel });
    return res.status(200).json(actividades);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

// Crear una nueva actividad
const postActividad = async (req, res, next) => {
  try {
    const newActividad = new Actividad(req.body);
    const actividadSaved = await newActividad.save();
    return res.status(201).json(actividadSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Actualizar una actividad existente
const putActividad = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newActividad = new Actividad(req.body);
    newActividad._id = id;
    const actividadUpdated = await Actividad.findByIdAndUpdate(id, newActividad, {
      new: true,
    });
    return res.status(200).json(actividadUpdated);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

// Eliminar una actividad
const deleteActividad = async (req, res, next) => {
  try {
    const { id } = req.params;
    const actividadDeleted = await Actividad.findByIdAndDelete(id);
    return res.status(200).json(actividadDeleted);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

module.exports = {
  getActividades,
  getActividadById,
  getActividadesByTipo,
  getActividadesByNivel,
  postActividad,
  putActividad,
  deleteActividad,
};
