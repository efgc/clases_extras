//retomando promesas
const promesaCumplida = false;

//definimos nuestra promesa
//new Promise() requiere un callback para funcionar
const miPromesa = new Promise((resolve, reject) => {
    if (promesaCumplida) {
        resolve('Enviado hacia resolve')
    } else {
        reject('Enviando hacia reject');
    }
});

//manejar promesa cumplida y rechazada
miPromesa.then(manejarPromesaCumplida, (razon) => {
    console.log("Dentro de reject");
    console.log(razon);
});

//definimos la funcion manejarPromesaCumplida

function manejarPromesaCumplida(valor) {
    console.log("Dentro de la funcion resolve");
    console.log(valor);
}