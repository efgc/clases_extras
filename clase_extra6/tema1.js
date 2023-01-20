
//recapitulando, crearemos un servidor HTTP

const HTTP = require('http');
console.log(typeof HTTP);

//request, response
const SERVIDOR = HTTP.createServer((req, res)=>{

    res.end("Hola desde el servidor");
});

const PUERTO = 3000;
SERVIDOR.listen(PUERTO, ()=>{
    console.log(`El servidor esta esta escuchando en http://localhost:${PUERTO} ...`);
});

