const express = require('express');
const router = express.Router();
const router_pregunta = require('./preguntas');

router.use('/pregunta', router_pregunta);

module.exports = router;