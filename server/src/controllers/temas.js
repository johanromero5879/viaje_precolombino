const tema_modelo = require('../models/tema');
const recurso_modelo = require('../models/recursos');

const ctrl = {};

ctrl.obtener_contenido = async (id = '') => {
    let contenido = { 
        subcontenidos: [],
        recursos: false
    };
    let subcontenidos;
    if(id != ''){
        const tema = await tema_modelo.findById(id);
        if(tema){
            contenido.tema_principal = {_id: tema._id, nombre: tema.nombre};

            if(tema.tema_principal){
                contenido.tema_anterior = tema.tema_principal;
            }

            subcontenidos = await tema_modelo.find({ tema_principal: id });
            if(!subcontenidos.length > 0){
                subcontenidos = await recurso_modelo.find({ tema: id });
                contenido.recursos = subcontenidos ? true : false;
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