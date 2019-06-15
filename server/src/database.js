//Liberia gestionar conexiones y documentos MongoDB
const mongoose = require('mongoose');

const { database } = require('./keys');

mongoose.connect(database.URI, {
    useNewUrlParser: true
});