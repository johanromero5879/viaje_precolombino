const pregunta_modelo = require('../models/pregunta');

/*Declaración del controlador*/
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

/*Añade opciones a una pregunta*/
ctrl.agregar_opciones = async (opciones, id) => {
    let pregunta = await pregunta_modelo.findById(id);
    if(pregunta){
        pregunta.opciones.push(opciones);
        await pregunta.save();
    }
    return pregunta;
}

/*Verifica respuestas de una serie de preguntas y devuelve los resultados*/
ctrl.evaluar = async (respuestas) => {
    // respuestas = [{pregunta, indice}];
    let resultado = { porcentaje: 0, aciertos: 0, total: respuestas.length};
    let pregunta;

    for (const respuesta of respuestas) {
        /*Busca la pregunta asociada a la respuesta*/
        pregunta = await pregunta_modelo.findById(respuesta.pregunta);
        /*Busca la respuesta correcta de la pregunta y va incrementando en 1 resultado.aciertos*/
        for (const [i, opcion] of pregunta.opciones.entries()) {
            if(respuesta.indice == i){
                resultado.aciertos += opcion.correcta ? 1 : 0;
                break;
            }
        }
    }
    /*Calcula el procentaje de aciertos*/
    resultado.porcentaje = resultado.aciertos * 100 / resultado.total;

    return resultado;
}

module.exports = ctrl;