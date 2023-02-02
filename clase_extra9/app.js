
//importamos los modulos

const base_datos = require('./peliculas.js');
//importamos express
const express = require('express');

//ponemos en uso express
const servidor = express();

//Routing -> rutas
servidor.get('/', (req, res) => {
    res.send('Soy un servidor con Express 🖥️🖥️')
});
// /peliculas -> mostrara listado de todas las peliculas
servidor.get('/peliculas', (req, res) => {
    res.send(JSON.stringify(base_datos.peliculas));
});

// /peliculas/terror
servidor.get('/peliculas/terror', (req, res) => {
    res.send(JSON.stringify(base_datos.peliculas.terror));
});

// /peliculas/accion
servidor.get('/peliculas/accion', (req, res) => {
    res.send(JSON.stringify(base_datos.peliculas.accion));
});

//filrando pelicuas de terror por director
//forma incorrecta
/*
servidor.get('/peliculas/terror/tarantino', (req, res) => {
    console.log(base_datos.peliculas.terror);
    let resultados = base_datos.peliculas.terror.filter((pelicula) =>
        pelicula.autor.toLowerCase() === 'tarantino'
    );
    console.log(resultados);
    res.send(JSON.stringify(resultados));
});

servidor.get('/peliculas/terror/lucas', (req, res) => {
    console.log(base_datos.peliculas.terror);
    let resultados = base_datos.peliculas.terror.filter((pelicula) =>
        pelicula.autor.toLowerCase() === 'lucas'
    );
    console.log(resultados);
    res.send(JSON.stringify(resultados));
});
*/
//forma recomendada
servidor.get('/peliculas/terror/:director', (req, res)=>{
    //capturamos al director
    const director = req.params.director;
    let resultados = base_datos.peliculas.terror.filter((pelicula) =>
    pelicula.autor.toLowerCase() === director.toLowerCase());
    res.send(JSON.stringify(resultados));
});

//ponemos al servidor a escuchar peticiones
const PUERTO = 3000;
servidor.listen(PUERTO, () => {
    console.log(`Servidor escuchando en puerto: ${PUERTO}`);
});