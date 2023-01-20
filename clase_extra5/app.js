//creacion de un servidor web basico http

const http = require("http");

//creamos el servidor
//cada vez que reciba una peticion, llamara a la funcion indicada

const servidor = http.createServer((peticion, respuesta) =>{
    //terminar el proceso y devolver la respuesta
    respuesta.end("Hola desde el servidor");
});

//el servidor debe empezar a escuchar solicitudes
servidor.listen(3000, ()=>{console.log("El servidor esta escuchando...")});