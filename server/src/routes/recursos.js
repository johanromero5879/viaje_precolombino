const express = require('express');
const router = express.Router();

const ctrl_recursos = require('../controllers/recursos');

router.route('/:id')
    .get(async (req, res) => {
        let response = await ctrl_recursos.consultar_por_id(req.params.id, true);
        res.json(response);
    });

module.exports = router;