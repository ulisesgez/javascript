/*
Funciones flecha:
Son un tipo mas compacto de funciones que podemos escribir en javascript que normalmente se
utilizan cunado necesitamos definir funciones anonimas. Las funciones anonimas son funciones
que no tiene un nombre especifico, ejemplo:

const fecha = function() {
    return new Date();
}

Introducidas a partir de ECMAS 6:
Es una expresion de funcion que nos va a permitir tener una
alternativa a una funcion, que normalmente las conocemos como function.

Diferencias y limitaciones:
No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo.
*/

//Funcion normal:
function comparacion(num) {
    return num * num;
};

//Arrow function:
const comparacionUno = (num) => {
    return num* num;
};

//Arrow function, return implicito:
const comparacionDos = num => num * num;

//Otro ejemplo:
const helloArrow = () => {
    console.log('Hello Arrow Function');//Hello Arrow Function
}

//De lo anterior podemos reducirlo a:
const helloArrowDos = () => console.log('Hello Arrow Function');//Hello Arrow Function

//Ahora con un argumento:
const helloArrowTres = nombre => console.log(`Hello ${nombre}`);//Hello Ulises

//Otro ejemplo:
const numeroAleatorio = () => Math.random();

//Otro ejemplo:

const fecha = () => new Date();

//Otro ejemplo, concatenar arrays:
const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);

//Otro ejemplo:
const sumarFuncion = (a, b) => a + b;
resultado = sumarFuncion(3, 5);
console.log(resultado);//8

//Otro ejemplo, valor por defecto:
const incrementar = (num, valorDefecto = 1) => num + valorDefecto;

console.log(incrementar(5));//6
console.log(incrementar(5, 3));//8


//Otro ejemplo:
const saludar = (nombre)=>{
    let frase = `hola ${nombre} ¿como estas?`;
    document.write(frase);
}
saludar("oscar");

/*
En esta sección se retomara el mismo tema pero de otra fuente:
Función expresada se genera cuando a una variable le asignas el valor de una función anonima.
Funcion anonima:
*/

const bienvenido = function() {
    console.log(`Hola, bienvenido`);//Hola, bienvenido
}

bienvenido();

//Arrow Function:
const adios = () => {
    console.log(`Adios, nos vemos`);//Adios, nos vemos
}

adios();

/*
Cuando tenemos una sola linea en la funcion, podemos omitir la llaves y dejar la funcion asi:
Mas expresivo, aqui no recibe parametros por lo que se colocan parentesis: () =>:

const adios = () => console.log(`Adios, nos vemos`);

adios();

Recibir parametros en funciones flecha, aqui podemos quitar los parentesis: () => ,
esto solo ocurre si tenemos un parametro:
*/

const miNombre = otroNombre => console.log(`Hola me llamo Ulises y tu nombre es ${otroNombre}`);//Hola me llamo Ulises y tu nombre es Irma
miNombre('Irma');


//Return implicito:
const multiplicar = (a, b) => a + b;
console.log(multiplicar(9, 9));//81

const funcionVariasLineas = () => {
    console.log('a');//a
    console.log('b');//b
    console.log('c');//c
}

funcionVariasLineas();// a b c

//Iteracion:
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((element, index) => console.log(`${element} esta en la posición ${index}`));//1 esta en la posición 0
//1 esta en la posición 0
//2 esta en la posición 1
//3 esta en la posición 2
//4 esta en la posición 3
//5 esta en la posición 4