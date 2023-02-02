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