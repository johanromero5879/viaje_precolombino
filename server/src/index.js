const express = require('express');
//Configuraciones de la app
const config = require('./server/config');
const app = config(express());

//Arranque DB
require('./database');

//Arranque del servidor
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});

/*Comentario de Neyder*/