# proyecto_6
 
## Rutas de la API
### Gimnasios
| Método | Ruta                                     | Descripción                           |
|--------|------------------------------------------|---------------------------------------|
| GET    | `/api/v1/gimnasios`                     | Obtener todos los gimnasios          |
| GET    | `/api/v1/gimnasios/:id`                 | Obtener un gimnasio por ID            |
| GET    | `/api/v1/gimnasios/actividad/:actividadId` | Obtener gimnasios por actividad      |
| GET    | `/api/v1/gimnasios/ubicacion`           | Obtener gimnasios por ubicación      |
| POST   | `/api/v1/gimnasios`                     | Crear un nuevo gimnasio               |
| PUT    | `/api/v1/gimnasios/:id`                 | Actualizar un gimnasio por ID         |
| DELETE | `/api/v1/gimnasios/:id`                 | Eliminar un gimnasio por ID

### Actividades

| Método | Ruta                                   | Descripción                                   |
|--------|----------------------------------------|-----------------------------------------------|
| GET    | `/api/v1/actividades`                 | Obtener todas las actividades                 |
| GET    | `/api/v1/actividades/:id`             | Obtener una actividad por ID                   |
| GET    | `/api/v1/actividades/tipo/:tipo`      | Obtener actividades por tipo                   |
| GET    | `/api/v1/actividades/nivel/:nivel`    | Obtener actividades por nivel de dificultad    |
| POST   | `/api/v1/actividades`                 | Crear una nueva actividad                      |
| PUT    | `/api/v1/actividades/:id`             | Actualizar una actividad por ID                |
| DELETE | `/api/v1/actividades/:id`             | Eliminar una actividad por ID 
