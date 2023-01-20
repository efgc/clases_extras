
//recapitulando, crearemos un servidor HTTP

const HTTP = require('http');
console.log(typeof HTTP);

//request, response
const SERVIDOR = HTTP.createServer((request, response) => {
    //verificamos el objeto request
    console.log('---------------------------------');
    console.log(typeof request);
    //console.log(request);
    console.log('---------------------------------');
    console.log('URL de la peticion');
    console.log(request.url);
    if (request.url == '/edutek') {
        response.end("<p style='color:chocolate'>Hola desde EDUTEK</p>");
    }
    else { response.end("<p style='color:chocolate'>Hola desde un parrafo</p>"); }
    console.log('---------------------------------');
    console.log('Metodo de la peticion');
    console.log(request.method);
    if(request.method == 'GET'){
        console.log('Saludos desde GET');
    }
    console.log('---------------------------------');
    console.log('Encabezados de la peticion');
    console.log(request.headers);
    console.log('---------------------------------');
    console.log('Cuerpo de la peticion');
    console.log(request);
});

const PUERTO = 3000;
SERVIDOR.listen(PUERTO, () => {
    console.log(`El servidor 2 esta esta escuchando en http://localhost:${PUERTO} ...`);
});

