const express = require('express');/*Lo vamos a requerir para usar un metodo de este Framework(router)*/
const router = express.Router();
const Instagram = require('node-instagram');/*Lo vamos a utilizar para hacer autenticacion de un usuario con Instagram dentro de nuestra aplicacion y tambien para poder pedir los datos*/

router.get('/', (req, res) => {
    res.render('index')
})/*Cuando el usuario pida algo a la ruta inicial de la aplicacion...*/
module.exports = router;/*Se exporta para indicar que se va a utilizar en la aplicacion principal*/

// router.get('/login', )