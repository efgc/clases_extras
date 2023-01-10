//simulando el procedimiento de un pedido

const estadoPedido = function () {
    const estado = (Math.random() < 0.7);
    return estado;
}

//verificamos el resultado de la funcion
// for (let i = 0; i < 10; i++) {
//     console.log(estadoPedido());
// }

//definimos la promesa

const miPedido = new Promise((resuelta, rechazada) => {
    setTimeout(() => {
        /* let resultado = estadoPedido();
        if(resultado == true){} */
        if (estadoPedido()) {
            resuelta('Pedido completo!!!. Pedido 1');
        } else {
            rechazada('Pedido sin cumplir, comuniquese con atencion al cliente. Pedido 1');
        }
    }, 4000);
});

const miPedido2 = new Promise((resuelta, rechazada) => {
    setTimeout(() => {
        /* let resultado = estadoPedido();
        if(resultado == true){} */
        if (estadoPedido()) {
            resuelta('Pedido completo!!!. Pedido 2');
        } else {
            rechazada('Pedido sin cumplir, comuniquese con atencion al cliente. Pedido 2');
        }
    }, 1000);
});

//cuidado debemos inicializar a
const miPedidoCompleto = (valor) => {
    console.log(valor, 'Desde funcion miPedidoCompleto');
}

//poner en funcionamiento la promesa
miPedido.then(miPedidoCompleto,
    (razon) => {
        console.log(razon, 'Desde funcion miPedidoCompleto');
    });

//sintaxis adicional para la promesa usando catch
//catch es usado cuando la promesa falla
//encadenado de metodos
//method chaining
miPedido2.then(miPedidoCompleto).catch((error) => { console.log(error) });

//ejemplo de encadenado de metodos
/* let arreglo = ['abc'];
console.log(arreglo[0].concat('def').charAt(4).toUpperCase());

let paso1 = arreglo[0].concat('def');
let paso2 = paso1.charAt(4);
let paso3 = paso2.toUpperCase();
console.log(paso3); */



