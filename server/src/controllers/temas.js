const tema_modelo = require('../models/tema');
const ctrl_recurso = require('./recursos');
const mongoose = require('mongoose');
let ctrl = {};


ctrl.armar_busqueda = (busqueda) => {
    let query = {};
    if(mongoose.Types.ObjectId.isValid(busqueda)){
        query._id = busqueda;
    }else{
        /*Reemplaza los guiones con un espacio*/
        busqueda = busqueda.replace(/-/g, ' ');
        query.nombre = { $regex: busqueda, $options: 'i'};
    }
    return query;
}

ctrl.obtener_contenido = async (busqueda = '') => {
    let contenido = { 
        subcontenidos: []
    };
    let subcontenidos;
    if(busqueda != ''){
        const tema = await tema_modelo.findOne(ctrl.armar_busqueda(busqueda));
        if(tema){
            contenido.tema_principal = {_id: tema._id, nombre: tema.nombre};

            if(tema.tema_principal){
                contenido.tema_anterior = tema.tema_principal;
            }

            subcontenidos = await tema_modelo.find({ tema_principal: tema._id });
            if(!subcontenidos.length > 0){
                subcontenidos = await ctrl_recurso.consultar_por_tema(tema._id);
                contenido.recursos = true;
            }
        }
    }else{
        subcontenidos = await tema_modelo.find({ tema_principal: {$exists: false} });
    }
    if(subcontenidos && subcontenidos.length > 0){
        for (const subcontenido of subcontenidos) {
            contenido.subcontenidos.push({
                _id: subcontenido._id,
                nombre: subcontenido.nombre
            });
        }
        return contenido;
    }else{
        return null;
    }
}

module.exports = ctrl;