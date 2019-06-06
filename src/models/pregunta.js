const mongoose = require('mongoose');
const { Schema } = mongoose;

const PreguntaSchema = new Schema({
    enunciado: {type: String, required: true},
    tema: {type: Schema.Types.ObjectId, ref: 'temas', required: true},
    info_adicional: {type: String},
    ref: {type: String, alias: 'referencias'},
    respuestas: [{
        descripcion: {type: String, required: true},
        correcta: {type: Boolean, default: false}
    }]
});

module.exports = mongoose.model('preguntas', PreguntaSchema);