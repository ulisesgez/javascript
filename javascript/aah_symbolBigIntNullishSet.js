/*
Tipo de dato Symbol:
Los símbolos son un tipo de dato único en JavaScript que se utiliza para crear
identificadores únicos. Cada vez que se crea un símbolo, se genera un nuevo
identificador único, lo que lo hace ideal para usar como claves de objetos o
para identificar elementos de manera única en una aplicación.
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

for (let i in persona) {
    console.log(i);//NOMBRE
    console.log(persona[i]);//ulises gutierrez
}

//metodos, funciones:

const SALUDAR = Symbol();

persona[SALUDAR] = function() {
    console.log('hola');//hola
}

persona[SALUDAR]();//hola

/*
Tipos de datos BigInt:
Los bigint son un nuevo tipo de dato en JavaScript que se usa para representar
números enteros de un tamaño mayor al que puede manejar JavaScript de manera nativa.
Los bigint se escriben con el sufijo n, por ejemplo: 12345678901234567890n.

Es importante tener en cuenta que los bigint solo pueden ser usados para operaciones
matemáticas y no pueden ser usados con operadores de comparación, como == o ===.
En su lugar, debes usar los métodos BigInt.asIntN y BigInt.asUintN para hacer
comparaciones entre bigint y números normales.

También es importante tener en cuenta que los bigInt no son compatibles con todas
las funciones y métodos de JavaScript que aceptan números, por lo que debes asegurarte
de verificar la documentación de la función o método que quieres usar antes de intentar
usar bigInt con ellos.
*/
const aBigNUmber = 12098734650912874365n;//antes
const anotherBigNUmber = BigInt(12098734650912874365);//despues

console.log(aBigNUmber);//12098734650912874365n
console.log(anotherBigNUmber);//12098734650912874365n

//Nullish

const anotherNUmber = 1;
const validate = anotherNUmber ?? 5;//Si este valor es null
console.log(validate);//1

const anotherNUmberTwo = null;
const validateTwo = anotherNUmberTwo ?? 5;//Si este valor es null
console.log(validateTwo);//5

/*
Set:
Un set es una lista de valores sin duplicados.
Nuevo tipo de dato ECMAS6
Arreglo mejorado de javascript que solo acepta valores unincos, hablando de valores primitivos.
*/

const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, "hola", "HOLA"]);
console.log(set);//Set(10) { 1, 2, 3, 4, 5, true, false, {…}, 'hola', 'HOLA' }
console.log(set.size);//10

/*
0: 1
1: 2
2: 3
3: 4
4: 5
5: true
6: false
7: Object
8: "hola"
9: "HOLA"
size: 10
*/

//Recorrer sus elementos:

for(item of set) {
    console.log(item);
}

//Acceder a una posición, para eso tenemos que convertir nuestro set comon si fuera un arreglo con from:
let arr = Array.from(set);
console.log(arr[0]);//1
console.log(arr[8]);//hola

//Eliminar valores de set:

set.delete("HOLA");
console.log(set.size);//9

//Comprobar si existe tal valor dentro de la coleccion:

console.log(set.has("HOLA"));//false, ya fue eliminado

//Pasarle valores:

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

//Recorrer sus elementos:

set2.forEach(item => console.log((item)));

//Limpiar un set:

set2.clear();
console.log(set2);//No tiene valores

//otro ejemplo:

const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');

console.log(list);

/*
Set(3) { 'item 1', 'item 2', 'item 3' }
*/