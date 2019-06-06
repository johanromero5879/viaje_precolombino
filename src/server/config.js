//Inicializacion framework expressjs
const express = require('express');

//Libreria gestion de rutas del sistema
const path = require('path');

//Rutas de la api
const router_api = require('../routes/api');

module.exports = app => {
    /*Configuraciones*/
    //Puerto del servidor
    app.set('port', process.env.PORT || 3000);

    //Rutas
    app.use('/api', router_api);

    //Archivos estaticos
    app.use('/', express.static(path.join(__dirname, '../public')));

    return app;
}
