const express = require('express');
const morgan = require('morgan');

// Iniciarlizacion
const app = express();

// Settings
app.set('port', process.env.PORT || 8080);

// Middlewares
app.use(morgan('dev'));

// Global Variables

// Routes

// Public

//  Starting the server
app.listen(app.get('port'),() => {
    console.log('El servidor mas perron de aqui esta corriendo en el puerto', app.get('port'));
});