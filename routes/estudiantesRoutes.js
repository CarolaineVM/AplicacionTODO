const express = require('express');
const router = express.Router();
const EstudiantesController = require('../controllers/estudiantesController.js');

router.get('/', EstudiantesController.consultar);

router.post('/', EstudiantesController.ingresar);

router.route("/:id")
    .get((req, res) => {
        res.json({msg: 'Consulta de un estudiantes'});
    })
    .put((req, res) => {
        res.json({msg: 'Actualización de estudiante'});
    })
    .delete((req, res) => {
        res.json({msg: 'Borrar estudiante'});
    });

module.exports = router;