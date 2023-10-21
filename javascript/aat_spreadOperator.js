/*
Spread Operator: Nos va a permitir que cuando una expresión la tengamos que expandir  en situaciones
donde tengamos multiples o tengamos que guardar almacenar multiples argumentos o elementos
lo podamos hacer (tener en cuenta que es diferente a los parametros Rest).

Operador de propagación, nos vaa permitir a nosotros trabajar seg´´ún sea el caso
con una lógica que podamos propagar la información hacia otros elementos sin tener que volverla
a pasar como normalmente la estamos asignando.
*/

const arr1 = [1 ,2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);//[1 ,2, 3, 4, 5] [6, 7, 8, 9, 0]

/*
crear arreglo a partir de los anteriores.
Esto no es lo correcto:
const arr3 = [arr1, arr2];
console.log(arr3);//[[1 ,2, 3, 4, 5], [6, 7, 8, 9, 0]]
Con esto ahora si solo tenemos un unico arreglo:
*/

const arr3 = [...arr1, ...arr2];
console.log(arr3);//[1 ,2, 3, 4, 5, 6, 7, 8, 9, 0]

//otro ejemplo:

const numeros = [1, 2, 3];

function sumar(x, y, z) {
    return x + y + z;
}

console.log(sumar(...numeros));//6

//otro ejemplo:

let person = {name: 'luis', age: 29};
let country = 'MX';
let data = { id: 1, ...person, country};
console.log(data);//{id: 1, name: 'luis', age: 29, country: 'MX'}

//Otro ejemplo:

function listadoFrutasDos (fruta1, fruta2, ...restoDeFrutas) {
    console.log("fruta 1: ", frruta1);//Naranja
    console.log("fruta 2: ", frruta2);//Manzana
}

let frutas = ["Naranja", "Manzana"];//fruta 1 y fruta 2
listadoFrutasDos(...frutas, "Sandia", "Pera", "Melón", "Coco");

/*
Pasar informacion por valor y por referencia:
Cuando trabajamos con primitivos cualquier tipo de asignacion como la siguiente,
o cuando lo mandamos a una funcion como un argumento lo estamos mandando por valor
(primitivos se pasan por valor): 
*/
let a = 10;
let b = a;
a = 30;

console.log({a, b});//a: 30 b: 10

/*
Paso por referencia
(objetos se pasan por referencia):
*/
let juan = {nombre: "juan"};
let ana = juan;//ana, depues de escribir la siguiente linea de codigo
ana.nombre = "ana";

console.log({juan, ana});//juan: {nombre: "ana"} ana: {nombre: "ana"}

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

const autos = ["bmw", "nissan", "toyota"];
const otrosAutos = [...autos];

otrosAutos.push("audi");
console.table({autos, otrosAutos});//autos: (3) ["bmw", "nissan", "toyota"] otrosAutos: (4) ["bmw", "nissan", "toyota", "audi"]