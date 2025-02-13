const express = require('express');
const router = express.Router();
const EstudiantesController = require('../controllers/estudiantesController.js');

router.get('/', EstudiantesController.consultar);

router.route("/:id")
    .post(EstudiantesController.ingresar)
    .get(EstudiantesController.consultarDetalle)
    .put(EstudiantesController.actualizar)
    .delete(EstudiantesController.borrar);

module.exports = router;