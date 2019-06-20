const express = require('express');
const router = express.Router();

const ctrl_preguntas = require('../controllers/preguntas');
    
router.route('/')
    .post(async (req, res) => {
        const response = await ctrl_preguntas.crear(req.body);
        res.json({ 
            status: response ? true : false
        });
    });

router.route('/evaluar')
    .post(async (req, res) => {
        const response = await ctrl_preguntas.evaluar(req.body);
        res.json(response);
    });

router.route('/recurso/:id')
    .get(async (req, res) => {
        const response = await ctrl_preguntas.consultar_por_recurso(req.params.id);
        res.json(response);
    });

router.route('/:id')
    .get(async (req, res) => {
        const response = await ctrl_preguntas.consultar_por_id(req.params.id);
        res.json(response);
    });

module.exports = router;