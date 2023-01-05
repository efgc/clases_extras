
//promesas (promises)

const promesaCumplida = false;

//definimos la promesa
//La clase a partir de la cual creamos promesas es 
//Promise
//enviamos un callback que tome dos valores
//el primero la funcion a ejecutar si es exitosa
//el segundo la funcion a ejecutar si esta falla

const miFuncion = function(resolve, reject){
    //lo mismo que if(promesaCumplida == true)
    if(promesaCumplida){
        resolve('Promesa cumplida');
    }else{
        reject('Promesa fallida');
    }
};
const miPromesa = new Promise(miFuncion);

//manejamos la promesa
//el primer valor -> funcion a ejecutar si se cumple
//el segundo valor -> funcion a ejecutar si se rechaza
miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

//definimos las funciones a enviar para resolve y reject
function manejarPromesaCumplida(valor){
    console.log("Dentro de la funcion resolve");
    console.log(valor);
}

//funcion a ejecutar si falla la promesa
function manejarPromesaRechazada(razon){
    console.log("Dentro de la funcion reject");
    console.log(razon);
}

