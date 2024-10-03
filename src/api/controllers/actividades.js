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

    // Usar findByIdAndUpdate con la opción de $set para no sobrescribir
    const actividadUpdated = await Actividad.findByIdAndUpdate(
      id,
      { $set: req.body },  // Solo actualiza los campos que se envían
      { new: true, runValidators: true }  // Retorna el nuevo documento y valida el esquema
    );

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
