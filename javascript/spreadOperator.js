/*
Spread Operator: NOs va a permitir que cuando una expresión la tengamos que expandir  en situaciones
donde tengamos multiples o tengamos que guardar almacenar multiples argumentos o elementos
lo podamos hacer (teenr en cuenta que es diferente a los parametros Rest).

Operador de propagación, nos vaa permitir a nosotros trabajar seg´´ún sea el caso
con una lógica que podamos propagar la información hacia otros elementos sin tener que volverla
a pasar como normalmente la estamos asignando.
*/

const arr1 = [1 ,2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

/*
crear arreglo a partir de los anteriores.
Esto no es lo correcto:
const arr3 = [arr1, arr2];
console.log(arr3);
Con esto ahora si solo tenemos un unico arreglo:
*/

const arr3 = [...arr1, ...arr2];
console.log(arr3);//[1 ,2, 3, 4, 5, 6, 7, 8, 9, 0]

//otro ejemplo:

let person = {name: 'luis', age: 29};
let country = 'MX';
let data = { id: 1, ...person, country};
console.log(data);//{id: 1, name: 'luis', age: 29, country: 'MX'}

//Otro ejemplo:

function listadoFrutasDos (fruta1, fruta2, ...restoDeFrutas) {
    console.log("fruta 1: ", frruta1);
    console.log("fruta 2: ", frruta2);
}

let frutas = ["Naranja", "Manzana"];//fruta 1 y fruta 2
listadoFrutasDos(...frutas, "Sandia", "Pera", "Melón", "Coco");