/*
Tipo de dato Symbol:
Symbol es un tipo de dato primitivo como el string, como el number, como el boolean,
como null, como undefined.
Una vez que creamos un Symbol su valor se va a mantener privado y para uso interno.
*/
let id = 'hola';
let id2 = 'hola';
let id3 = Symbol();
let id4 = Symbol();//crea una referencia unica

console.log(id === id2);//true

//Ahora con symbol:
console.log(id3 === id4);//false

//identificador/referencia:

let id5 = Symbol("id5");
let id6 = Symbol("id6");

//Objeto con symbol:
const NOMBRE = Symbol();
const persona = {
    //cuando queremos que sea un identificador unico dentro de las
    //propiedades de nuestro objeto y para eso utilizamos el symbol:
    [NOMBRE]: 'ulises'
}

console.log(persona);//{Symbol(): 'ulises'}

persona.NOMBRE = 'ulises gutierrez'//{NOMBRE: ulises gutierrez, Symbol(): 'ulises'}

console.log(persona.NOMBRE);//ulises gutierrez
console.log(persona[NOMBRE]);//ulises

//metodos, funciones:

const SALUDAR = Symbol();

persona[SALUDAR] = function() {
    console.log('hola');
}

persona[SALUDAR]();