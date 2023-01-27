let informacionProductos = {
  'deporte': [
    {
      id: 1,
      nombre: 'cuerda para saltar',
      precio: 35.00,
      existencia: 3
    },
    {
      id: 2,
      nombre: 'mancuernas 100kg',
      precio: 800.00,
      existencia: 4
    },
    {
      id: 3,
      nombre: 'pelota medicinal 6kg',
      precio: 200.00,
      existencia: 2
    }
  ],
  'cocina': [
    {
      id: 1,
      nombre: 'estufa',
      precio: 3500.00,
      existencia: 3
    },
    {
      id: 2,
      nombre: 'licuadora',
      precio: 200.00,
      existencia: 2
    }, {
      id: 3,
      nombre: 'olla de presion',
      precio: 500.00,
      existencia: 2
    }
  ]
}

function saludar(){
  console.log('Saludos desde el modulo agregado');
}
//exportamos el objeto
//el nombre al exportar puede ser diferente a la propiedad creada
module.exports.infoProductos = informacionProductos;
module.exports.miFuncion = saludar;