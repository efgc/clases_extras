//ejemplo adicional de promesas

function ordenarBicicleta(tipoBicicleta) {
  return new Promise((cumplir, rechazar) => {
    console.log(`Ordenando: ${tipoBicicleta} desde la tienda`);
    setTimeout(() => {
      if (tipoBicicleta == 'mountain' || tipoBicicleta == 'urbana') {
        cumplir('Ordenando bicicleta de montaña');
      } else {
        rechazar('No hay disponibilidad de este producto');
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  //esta promesa no se rechaza, se omitir el segundo argumento
  return new Promise((cumplir) => {
    console.log('Procesando pedido...');
    console.log(`La respuesta fue: -${respuesta}-`);
    setTimeout(() => {
      cumplir('Gracias por su compra. Disfrute su producto');
    }, 4000);
  })
};

//encadenando promesas
ordenarBicicleta('urbana')
  .then((respuesta) => {
    console.log('Respuesta recibida');
    console.log(respuesta);
    //dentro de then, sabemos que la promesa se esta cumpliendo
    return procesarPedido(respuesta);
  })
  .then((respuestaProcesada) => {
    console.log(respuestaProcesada)
  }).catch((error) => {
    console.log(error)
  });