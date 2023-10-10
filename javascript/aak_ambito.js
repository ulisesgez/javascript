/*
Ambito de las variables:

Las variables pueden ser globales o locales, esto depende de donde se declaren.
Las variables globales son aquellas que se declaran fuera de una función y estan
disponibles dentro y fuera de las funciones.
*/

var texto = "Hola mundo soy una variable global"
var numero = 12;
console.log(texto);
console.log(numero);

function holaMundo(texto) {
    console.log(texto);
    console.log(numero);
    var hola_mundo = "Texto dentro de funcion"
    console.log(hola_mundo);
}
holaMundo(texto);

/*
¡Que pasaria si quisieramos acceder a numero dentro de la función?
function holaMundo(texto) {
    console.log(texto);
}
var texto = "Hola mundo soy una variable global" 
holaMundo(texto);

//En este caso si que se puede e imprime 12:

function holaMundo(texto) {
    console.log(texto);
    console.log(numero);
}
var numero = 12;
var texto = "Hola mundo soy una variable global" 
holaMundo(texto);

//Ahora:

*/
function holaMundo(texto) {
    var hola_mundo = "Texto dentro de funcion"
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}
var numero = 12;
var texto = "Hola mundo soy una variable global" 
holaMundo(texto);

console.log(hola_mundo);//Error, no esta definido en el ambito global, si en la función