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