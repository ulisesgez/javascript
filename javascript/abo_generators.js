/*
Generators:
Es una funcion especial que retorna una serie de valores segun el algoritmo definido.
Es un tipo especial de funcion que retorna una serie de valores segun
el algoritmo definido.
Nos va a permitir tener una función de tipo especial que nos va a retornar una serie de valores
según el valor dado recordando este recurso.
Sintaxis mas sencilla para generar iteradores, se conocen como generators. NO es mas que una función
que nos permite trabajar de una manera mas amigable con la interface de los iteradores en
un elemento iterabel.
Convertir el codigo de una funcion en iterable.
*/
function* iterableDos(array) {
    for(let value of array) {
        yield value;
    }
}

const it = iterableDos(['ulises', 'oscar', 'david', 'ana']);
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
Cuando se termina de recorrer el iterable, nos va a devolver un valor undefined.

Otro ejemplo:
*/

function* countEmojis() {
    const emojis = ['feliz', 'triste', 'enojado', 'sorprendido'];
    for(let i = 0; i < emojis.length; i++) {
        yield emojis[i];//Nos va a devolver el valor de cada uno de los emojis.
    }
}

const genDos = countEmojis();
console.log(genDos.next().value);//feliz
console.log(genDos.next().value);//triste
console.log(genDos.next().value);//enojado
console.log(genDos.next().value);//sorprendido
console.log(genDos.next().value);//undefined

//Otro ejemplo:

async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('hello');

//Otro ejemplo:

function* iterable() {
    yield "hola";
    console.log("hola consola");
    yield "hola 2";
    console.log("Seguimos con mas instrucciones");
    yield "hola 3";
    yield "hola 4";
}

let iteradorDos = iterable();
console.log(iteradorDos.next());// { value: "hola", done: false }
console.log(iteradorDos.next());// hola consola { value: "hola 2", done: false }
console.log(iteradorDos.next());// Seguimos con mas instrucciones { value: "hola 3", done: false }
console.log(iteradorDos.next());// { value: "hola 4", done: false }
console.log(iteradorDos.next());// { value: undefined, done: true }

//De forma optimizada:

for(let y of iteradorDos) {
    console.log(y);
}

//Recolectar los yied en un arreglo para despues trabajarlos:

const arrDos = [...iterable()];
console.log(arrDos);//["hola", "hola 2", "hola 3", "hola 4"]

//Otro ejemplo de forma asincrona:

function cuadrado(valor) {
    setTimeout(() => {
        return console.log({valor, result: valor*valor});
    }, Math.random() * 1000);
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
/*
inicia generator
{valor: 0, result: 0}
{valor: 1, result: 1}
{valor: 2, result: 4}
{valor: 3, result: 9}
{valor: 4, result: 16}
{valor: 5, result: 25}
termina generador
*/
}