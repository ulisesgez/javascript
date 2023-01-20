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