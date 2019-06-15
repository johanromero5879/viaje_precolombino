const mongoose = require('mongoose');
const { Schema } = mongoose;

const PreguntaSchema = new Schema({
    enunciado: {type: String, required: true},
    recurso: {type: Schema.Types.ObjectId, ref: 'recursos', required: true},
    opciones: [{
        _id: false,
        descripcion: {type: String, required: true},
        correcta: {type: Boolean, default: false}
    }]
}, {versionKey: false});

module.exports = mongoose.model('preguntas', PreguntaSchema);