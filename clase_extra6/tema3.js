
//recapitulando, crearemos un servidor HTTP

const HTTP = require('http');
console.log(typeof HTTP);

//request, response
const SERVIDOR = HTTP.createServer((request, response)=>{
    //encabezados de la respuesta
    response.setHeader('mi-encabezado', 'valor-encabezado');
    
    if(request.url == '/'){
        response.statusCode = 200;
        response.statusMessage = "Recurso encontrado";
        response.end("Hola desde el servidor");
    }else{
        response.statusCode = 404;
        //response.statusMessage = "Recurso NO encontrado";
        response.end("Recurso no encontrado, revise la URL");
    }
    console.log('--------------------------');
    //console.log(response);
    //console.log(response.statusCode);
    //response.statusMessage = "Todo bien con la peticion";
    console.log('--------------------------');
    console.log(response.getHeaders());
    
});

const PUERTO = 3000;
SERVIDOR.listen(PUERTO, ()=>{
    console.log(`El servidor esta esta escuchando en http://localhost:${PUERTO} ...`);
});

