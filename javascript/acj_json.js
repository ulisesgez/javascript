/*
Es un formato ligero de intercambio de datos.
*/

//Objeto, pares clave y valor:
const user = {
    "name": "ulises",
    "lastname": "gutierrez",
    slaudar() {
        return 'hello'//Las funciones no se añaden al JSON
    }
}
//objeto no valido de JSON, solo usable en nuestro sistema:
console.log(user);

//Convertir objeto a json, es posible usarlo en otro sistema por la conversion:
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