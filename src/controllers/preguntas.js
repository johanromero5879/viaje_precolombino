const pregunta_modelo = require('../models/pregunta');

const ctrl = {};

/*Crea una pregunta*/
ctrl.crear = async (preguntas) => {
    return await pregunta_modelo.create(preguntas);
}

/*Consulta una pregunta por su id*/
ctrl.consultar_por_id = async (id) => {
    return await pregunta_modelo.findById(id);
}

/*Consulta preguntas de acuerdo al id de un recurso*/
ctrl.consultar_por_recurso = async (id) => {
    return await pregunta_modelo.find({recurso: id});
}

/*Añade posibles respuestas a una pregunta*/
ctrl.agregar_respuesta = async (respuestas, id) => {
    let pregunta = await pregunta_modelo.findById(id);
    if(pregunta){
        pregunta.respuestas.push(respuestas);
        await pregunta.save();
    }
    return pregunta;
}

module.exports = ctrl;