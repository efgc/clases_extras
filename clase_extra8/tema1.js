//crearemos servidor

const HTTP = require('http');
const PRODUCTOS = require('./base_datos.js');

/* console.log(PRODUCTOS.infoProductos.deporte);
PRODUCTOS.miFuncion(); */


const SERVIDOR = HTTP.createServer((req, res) => {
  /* 
  destructuracion
  let {deporte} = PRODUCTOS.infoProductos;
  let deporte = PRODUCTOS.infoProductos.deporte; 
  console.log(deporte);
  */

  //capturamos el metodo de la peticion
  const { method } = req;
  /*  console.log(req.method);
   console.log(method); */

  switch (method) {
    case 'GET':
      console.log(`Se recibio una peticion por ${method}`);
      return manejarPeticionGet(req, res);
      break;
    default:
      res.statusCode = 501;
      console.log(`El metodo ${method} no esta implementado`);
  }



  res.end('Saludos desde el servidor');
});

const PUERTO = 3000;
SERVIDOR.listen(PUERTO, () => {
  console.log(`El servidor esta escuchado en el puerto ${PUERTO}`);
});

//definiendo funciones
function manejarPeticionGet(req, res) {
  //vericamos la URL 
  const PATH = req.url;
  console.log(PATH);
  if (PATH === '/') {
    return res.end('<h1>Bienvenido a nuestro servidor</h1>');
  } else if (PATH === '/productos') {
    //convertimos la informacion en cadena de texto
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(PRODUCTOS.infoProductos));
  } else if (PATH === '/productos/deporte') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(PRODUCTOS.infoProductos.deporte));
  } else if (PATH === '/productos/cocina') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(PRODUCTOS.infoProductos.cocina));
  }
}