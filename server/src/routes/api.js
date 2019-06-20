const express = require('express');
const router = express.Router();

router.use('/pregunta', require('./preguntas'));
router.use('/tema', require('./temas'));
router.use('/recurso', require('./recursos'));

module.exports = router;