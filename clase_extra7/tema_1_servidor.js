

const HTTP = require('http');
const moduloURL = require('url');

//servidor responde a las peticiones
const SERVIDOR = HTTP.createServer((req, res) => {
    console.log(req.url);
    // res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
    //res.setHeader('Access-Control-Allow-Headers', 'POST, PUT, GET, OPTIONS');
    console.log(moduloURL.parse(req.url));
    console.log("--------------------------------");
    console.log(moduloURL.parse(req.url,true));
    console.log(moduloURL.parse(req.url,false));
    console.log(moduloURL.parse(req.url));
    console.log("--------------------------------");
    let miURL = moduloURL.parse(req.url,true).query;
    res.end(`Hola desde el servidor valores recibidor: ${JSON.stringify(miURL)}`);
});

const PUERTO = 3000;
SERVIDOR.listen(PUERTO, () => {
    console.log(`El servidor escucha en: ${PUERTO}`);
});