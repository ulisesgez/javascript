/*
Nuevo tipo de dato ECMAS6
Arreglo mejorado de javascript que solo acepta valores unincos, hablando de valores primitivos.
*/

const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, "hola", "HOLA"]);
console.log(set);
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