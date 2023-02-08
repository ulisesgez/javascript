/*
Nos va a permitir tener una función de tipo especial que nos va a retornar una serie de valores
según el valor dado recordando este recurso.
Sintaxis mas sencilla para generar iteradores, se conocen como generators. NO es mas que una función
que nos permite trabajar de una manera mas amigable con la interface de los iteradores en
un elemento iterabel.
Convertir el codigo de una funcion en iterable.
*/
function* iterate(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterate(['ulises', 'oscar', 'david', 'ana']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
/*
ulises
oscar
david
ana
undefined
*/

//Otro ejemplo:

function* iterable() {
    yield "hola";
    console.log("hola consola");
    yield "hola 2";
    console.log("Seguimos con mas instrucciones");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();
console.log(iterador.next());// { value: "hola", done: false }
console.log(iterador.next());// hola consola { value: "hola 2", done: false }
console.log(iterador.next());// Seguimos con mas instrucciones { value: "hola 3", done: false }
console.log(iterador.next());// { value: "hola 4", done: false }
console.log(iterador.next());// { value: undefined, done: true }

//De forma optimizada:

for(let y of iterador) {
    console.log(y);
}

//Recolectar los yied en un arreglo para despues trabajarlos:

const arr = [...iterable()];
console.log(arr);//["hola", "hola 2", "hola 3", "hola 4"]

//Otro ejemplo de forma asincrona:

function cuadrado(valor) {
    setTimeout(() => {
        console.log({valor, result: valor*valor});
    }, Math.random() * 1000);
    return {
        valor,
        result: valor*valor
    }
}

function generador() {
    console.log("inicia generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("termina generador");
}

let gen = generador();

for(let y of gen) {
    console.log(y);
}