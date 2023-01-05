
//importamos el modulo de eventos
const EventEmitter = require('events');

//creamos un objeto a partir de la clase
//Crear una instancia, instanciar
const emisorUsuarios = new EventEmitter();

//definimos un manejador de eventos
//Event Handler, Event Listener
//primer parametro -> nombre del evento
//segundo parametro -> callback (una funcion)
emisorUsuarios.on('inicioSesion',
    function () { console.log('El usuario ha iniciado sesion') });

//primer parametro -> nombre del evento a desencadenar
//segundo parametro -> argumentos a enviar a ese evento (opcional)
emisorUsuarios.emit('inicioSesion');

//otro manejador de eventos
const cerrarSesion = function (hora) {
    console.log("Se ha cerrado la sesion. ", hora)
};

emisorUsuarios.on('cierreSesion', cerrarSesion)

emisorUsuarios.emit('cierreSesion', '20:00');

//otro manejador de eventos con funcion de flecha
//definir un emisor de nombre suspenderSesion
//mostrara en pantalla el nombre de usuario y la hora
//emitir el evento RFlores 10:00

//definimos el manejador(listener, handler)
emisorUsuarios.on('suspenderSesion',
    (usuario, hora) => { console.log(`Sesion suspendida Usuario: ${usuario} Hora: ${hora}`) });

//desencademos el evento
emisorUsuarios.emit('suspenderSesion', 'RFlores', '13:00');