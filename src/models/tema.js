const mongoose = require('./mongoose');
const { Schema } = mongoose;

const TemaSchema = new Schema({
    nombre: {type: String, required: true},
    tema_principal: {type: Schema.Types.ObjectId, ref: 'temas'}
});

module.exports = mongoose.model('temas', TemaSchema);