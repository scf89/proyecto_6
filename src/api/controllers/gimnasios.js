const Gimnasio = require("../models/gimnasios"); // Importa el modelo de Gimnasio

// Obtener todos los gimnasios
const getGimnasios = async (req, res, next) => {
  try {
    const gimnasios = await Gimnasio.find().populate("actividades"); // Populate para obtener detalles de las actividades
    return res.status(200).json(gimnasios);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

// Obtener un gimnasio por su ID
const getGimnasioById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gimnasio = await Gimnasio.findById(id).populate("actividades");
    return res.status(200).json(gimnasio);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

// Obtener gimnasios por actividad
const getGimnasiosByActividad = async (req, res, next) => {
  try {
    const { actividadId } = req.params;
    const gimnasios = await Gimnasio.find({ actividades: actividadId }).populate("actividades");
    return res.status(200).json(gimnasios);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

// Obtener gimnasios por ubicación (ejemplo sencillo usando latitud y longitud)
const getGimnasiosByUbicacion = async (req, res, next) => {
  try {
    const { lat, lon, distancia } = req.query;
    // Consulta básica: Busca gimnasios en un rango de coordenadas (requiere más lógica para cálculos de distancia)
    const gimnasios = await Gimnasio.find({
      "ubicacion.lat": { $gte: lat - distancia, $lte: lat + distancia },
      "ubicacion.lon": { $gte: lon - distancia, $lte: lon + distancia },
    }).populate("actividades");
    return res.status(200).json(gimnasios);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

// Crear un nuevo gimnasio
const postGimnasio = async (req, res, next) => {
  try {
    const newGimnasio = new Gimnasio(req.body);
    const gimnasioSaved = await newGimnasio.save();
    return res.status(201).json(gimnasioSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Actualizar un gimnasio existente
const putGimnasio = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { actividades, ...otrosCampos } = req.body;
  
      // Buscar el gimnasio por ID
      const gimnasio = await Gimnasio.findById(id);
  
      if (!gimnasio) {
        return res.status(404).json("Gimnasio no encontrado");
      }
  
      // Si se enviaron actividades en el cuerpo de la solicitud
      if (actividades && Array.isArray(actividades)) {
        actividades.forEach((actividad) => {
          // Agregar la actividad si no está ya en el array de actividades
          if (!gimnasio.actividades.includes(actividad)) {
            gimnasio.actividades.push(actividad);
          }
        });
      }
  
      // Actualizar otros campos si se enviaron (sin sobrescribir el array de actividades)
      Object.assign(gimnasio, otrosCampos);
  
      // Guardar el gimnasio actualizado
      const gimnasioUpdated = await gimnasio.save();
  
      return res.status(200).json(gimnasioUpdated);
    } catch (error) {
      return res.status(400).json("Error en la solicitud");
    }
  };
  

// Eliminar un gimnasio
const deleteGimnasio = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gimnasioDeleted = await Gimnasio.findByIdAndDelete(id);
    return res.status(200).json(gimnasioDeleted);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
};

module.exports = {
  getGimnasios,
  getGimnasioById,
  getGimnasiosByActividad,
  getGimnasiosByUbicacion,
  postGimnasio,
  putGimnasio,
  deleteGimnasio,
};
