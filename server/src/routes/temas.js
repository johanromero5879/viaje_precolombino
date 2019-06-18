const express = require('express');
const router = express.Router();

const ctrl_temas = require('../controllers/temas');

router.route('/contenido')
    .get(async (req, res) => {
        const response = await ctrl_temas.obtener_contenido();
        res.json(response);
    });

router.route('/contenido/:id')
    .get(async (req, res) => {
        const response = await ctrl_temas.obtener_contenido(req.params.id);
        res.json(response);
    });


module.exports = router;