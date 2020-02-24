//Const
const express = require('express');
const app = express();
const morgan = require('morgan');
const engine = require('ejs-mate');
const path = require('path'); /*Modulo PATH pertenece a NodeJS*/

//settings
app.set('port', process.env.PORT || 3000);/*process.env.PORT respetar el puerto que nos de la computadora*/
app.engine('ejs', engine); /*Con esto tenemos un nuevo motor de plantilla definido*/
app.set('view engine', 'ejs'); /*Utilizando el motor de plantillas*/
app.set('views', path.join(__dirname, 'views'));/*Metodo JOIN une directorios. Concatenamos __dirname con la carpeta views*/
/*CONSTANTE __dirname Nos devuelve la ruta inicial, devuelve la direccion del archivo que lo ejecuta. Equivalente a PWD*/
//middlewares
app.use(morgan('dev')) /*Estamos utilizando morgan con su configuracion de development*/


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});


