//Inicializacion framework expressjs
const express = require('express');
//Libreria gestion de rutas del sistema
const path = require('path');

module.exports = app => {
    /*Configuraciones*/
    //Puerto del servidor
    app.set('port', process.env.PORT || 3000);
    //Permite uso de JSON en peticiones HTTP y envio de formularios
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    //Archivos estaticos
    app.use(express.static(path.join(__dirname, '../../../client/dist')));

    //Rutas Api
    app.use('/api', require('../routes/api'));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
    });

    return app;
}
