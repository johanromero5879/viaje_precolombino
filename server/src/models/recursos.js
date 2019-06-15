const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecursoSchema = new Schema({
    nombre: {type: String, required: true},
    info: {type: String, required: true},
    tema: {type: Schema.Types.ObjectId, ref: 'temas', required: true},
    refs: [{
        _id: false, 
        autor: {type: String, required: true},
        url: {type: String}
    }]
}, {versionKey: false});

module.exports = mongoose.model('recursos', RecursoSchema);