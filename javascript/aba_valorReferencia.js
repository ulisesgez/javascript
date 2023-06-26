/* Pasar informacion por valor y por referencia:
Cuando trabajamos con primitivos cualquier tipo de asignacion como la siguiente,
o cuando lo mandamos a una funcion como un argumento lo estamos mandando por valor
(primitivos se pasan por valor): 
*/
let a = 10;
let b = a;
a = 30;

console.log({a, b});

/*
Paso por referencia
(objetos se pasan por referencia):
*/
let juan = {nombre: "juan"};
let ana = juan;//ana, depues de escribir la siguiente linea de codigo
ana.nombre = "ana";

console.log({juan, ana});

/*Otro caso:
Cuando se llama a la función cambiarNombre y se le pasa el objeto peter, en realidad se
está pasando una referencia al objeto peter. Dentro de la función, se modifica la propiedad
nombre del objeto persona asignándole el valor "Tony". Dado que tanto peter como persona
hacen referencia al mismo objeto en memoria, cualquier cambio que se realice dentro de la
función se reflejará en el objeto original.

Por lo tanto, después de llamar a la función cambiarNombre, la propiedad nombre del objeto
peter se actualiza a "Tony". Luego, la variable tony se asigna al objeto persona devuelto
por la función, que también es una referencia al mismo objeto modificado. Es por eso que
cuando se imprime peter y tony, ambos objetos tienen la propiedad nombre igual a "Tony".

En resumen, en JavaScript, los objetos se pasan por referencia, lo que significa que
cualquier modificación realizada en un objeto dentro de una función afectará al objeto
original fuera de la función.

const cambiarNombre = (persona) => {
    persona.nombre = "Tony";
    return persona;
}

let peter = {nombre: "Peter"};
let tony = cambiarNombre(peter);

console.log(peter, tony);//Ambos imprime el nombre de Tony

Vamos a solucionarlo con el operador spread:
*/
const cambiarNombre = (...persona) => {
    persona.nombre = "Tony";
    return persona;
}

let peter = {nombre: "Peter"};
let tony = cambiarNombre(peter);

//Spread operator con arreglos:

const frutas = ["manzana", "pera", "piña"];
const otrasFrutas = [...frutas];

otrasFrutas.push("mango");
console.table({frutas, otrasFrutas});