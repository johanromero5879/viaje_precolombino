const express = require('express');
const router = express.Router();

router.use('/pregunta', require('./preguntas'));
router.use('/tema', require('./temas'));

module.exports = router;