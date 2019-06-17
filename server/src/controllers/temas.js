const tema_modelo = require('../models/tema');
const recurso_modelo = require('../models/recursos');

const ctrl = {};

ctrl.obtener_contenido = async (id) => {
    let contenido;
    const tema = await tema_modelo.findById(id);
    if(tema){
        contenido = {
            tema_principal: {_id: tema._id, nombre: tema.nombre}, 
            subcontenidos: [],
            recursos: false
        };
        let subcontenidos = await tema_modelo.find({ tema_principal: id });
        if(!subcontenidos.length > 0){
            subcontenidos = await recurso_modelo.find({ tema: id });
            contenido.recursos = subcontenidos ? true : false;
        }

        if(subcontenidos.length > 0){
            for (const subcontenido of subcontenidos) {
                contenido.subcontenidos.push({
                    _id: subcontenido._id,
                    nombre: subcontenido.nombre
                });
            }
        }
    }

    return contenido;
}

module.exports = ctrl;