const recurso_modelo = require('../models/recursos');
const ctrl_preguntas = require('./preguntas');
let ctrl = {};

ctrl.consultar_por_id = async (id, preguntas = false) => {
    const temp = await recurso_modelo.findById(id);
    let recurso = {_id: '', nombre: '', info: '', tema: '', refs: [], preguntas: []};
    if(temp){
        recurso._id = temp._id;
        recurso.nombre = temp.nombre;
        recurso.info = temp.info;
        recurso.tema = temp.tema;
        recurso.refs = temp.refs;
        if(preguntas){
            recurso.preguntas = await ctrl_preguntas.consultar_por_recurso(id);
        }
        return recurso;
    }else{
        return null;
    } 
};

ctrl.consultar_por_tema = async (id) => {
    return await recurso_modelo.find({ tema: id });
};

module.exports = ctrl;