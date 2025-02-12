const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg: 'Consulta de profesores'});
});

router.post('/', (req, res) => {
    res.json({msg: 'Ingreso de profesores'});
});

router.route("/:id")
    .get((req, res) => {
        res.json({msg: 'Consulta de un profesores'});
    })
    .put((req, res) => {
        res.json({msg: 'Actualización de profesor'});
    })
    .delete((req, res) => {
        res.json({msg: 'Borrar profesor'});
    });

module.exports = router;