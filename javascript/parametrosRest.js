/*
Parametros Rest:
Una forma de virtualmente ir agregando paarmetros infinitos
ya sea a una funcion, variable, etc.

La sintaxis de los parámetros rest nos permiten representar un número
idefinido de argumentos como un array
*/

//ES5

function myList(a, b){
    console.log("Arguments");
    console.log("a="+a);
    console.log("b="+b);
    console.log("Resto de elementos de la lista: ", arguments);
    console.log("Tamaño: "+arguments.length);
    console.log(arguments[2]);
}

myList("pera", "manzana", "zanahoria", "limon", "lima");

/*
Arguments
a=pera
b=manzana
Resto de elementos de la lista:  Arguments(5) ['pera', 'manzana', 'zanahoria', 'limon', 'lima']
0
: 
"pera"
1
: 
"manzana"
2
: 
"zanahoria"
3
: 
"limon"
4
: 
"lima"
Tamaño: 5
zanahoria
*/

//ES6

function myListTwo(a, b, ...otrosElementos){
    console.log("Rest");
    console.log("a="+a);
    console.log("b="+b);
    console.log("Resto de elementos de la lista: ", otrosElementos);
    console.log("Tamaño: "+otrosElementos.length);
    console.log(otrosElementos[2]);
}

myListTwo("pera", "manzana", "zanahoria", "limon", "lima");

/*
Rest
a=pera
b=manzana
Resto de elementos de la lista: Array(3)
0
: 
"zanahoria"
1
: 
"limon"
2
: 
"lima"
Tamaño: 3
lima
*/

//Otro ejemplo:

function sumar (a, b, ...c) {
    let resultado = a + b;
    c.forEach(function(n) {
        resultado += n
    })
}
console.log(sumar(1, 2));//3
console.log(sumar(1, 2, 3));//6
console.log(sumar(1, 2, 3, 4));//10
console.log(sumar(1, 2, 3, 4, 5));//15

//Otro ejemplo:

function sumaRest(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sumaRest(1, 1, 2, 3);
/*
Se imprime lo siguiente:

[1 ,2, 3]
2

¿Por que no aparece el primer uno?
Por que ese ya esta asignado a el nombre num or lo tanto no es parte de values,
no esta siendo agredado al array.

El valor 2 ya es el resultante de lo que es el valor num mas el primer elemento del array
que estaria dentro de values --> 1 + 1
*/

//Otro ejemplo:

function listadoFrutas (fruta1, fruta2) {
    console.log("fruta 1: ", frruta1);
    console.log("fruta 2: ", frruta2);
}

listadoFrutas("Naranja", "Manzana");

//queremos pasar una serie de paarmetros que son indefinidos:
//listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melón", "Coco");

function listadoFrutasDos (fruta1, fruta2, ...restoDeFrutas) {
    console.log("fruta 1: ", frruta1);
    console.log("fruta 2: ", frruta2);
}
//Imprime un array ["Sandia", "Pera", "Melón", "Coco"]
listadoFrutasDos("Naranja", "Manzana", "Sandia", "Pera", "Melón", "Coco");