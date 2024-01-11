/*
JSON (JavaScript Object Notation):
Json es un formato de texto sencillo para el intercambio de datos.
JSON es texto, escrito con notación de objeto de JavaScript.
JSON es "auto-descriptivo" y fácil de entender.
Es un formato ligero de intercambio de datos.

Stringify:
Convierte un objeto o valor de JavaScript en una cadena JSON, opcionalmente
reemplaza valores si se indica una función de reemplazo, o si se especifican
las propiedades mediante un array de reemplazo.

Parse:
Analiza una cadena de texto como JSON, transformando opcionalmente el valor
producido por el análisis.

Uso de Parse:
*/
console.log(JSON);//JSON es un objeto de JS
console.log("{}")//Imprime un objeto vacio de tipo texto.
console.log(JSON.parse("{}"))//Imprime un objeto vacio de tipo Objeto.
console.log(JSON.parse("{}").toString())//Imprime un objeto vacio de tipo texto.
console.log(JSON.parse("[1, 2, 3]"))//Imprime un Array.
console.log(JSON.parse("true"))//Imprime un booleano.
console.log(JSON.parse("19"))//Imprime un numero.

//Uso de Stringify:
console.log(JSON.stringify({}))//Imprime un objeto vacio de tipo texto.
console.log(JSON.stringify([]))//Imprime un Array vacio de tipo texto.
console.log(JSON.stringify([1, 2, 3]))//Imprime un Array de tipo texto.
console.log(JSON.stringify(true))//Imprime un booleano de tipo texto.
console.log(JSON.stringify(19))//Imprime un numero de tipo texto.

//Objeto, pares clave y valor:
const user = {
    "name": "ulises",
    "lastname": "gutierrez",
    slaudar() {
        return 'hello'//Las funciones no se añaden al JSON
    }
}
//Objeto no valido de JSON, solo usable en nuestro sistema:
console.log(user);

//A continuacion lo convertiremos en un JSON valido:
console.log(JSON.stringify(user));//contrario a stringify es parse.

//Ahortta veamoslo fisicamente, en este acarpeta se encuentra un archivo con extension json:

const json = {
    cadena: 'cadena',
    numero: 30,
    booleano: true,
    arreglo: ['cadena', 30, true],
    objeto: {
        cadena: 'cadena',
        numero: 30,
        booleano: true,
        arreglo: ['cadena', 30, true]
    }
}

console.log(JSON.stringify(json));