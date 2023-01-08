/**
 * Scope: Alcanmce de las variables dependiendo su ubicacion
 */

//Scope global:

var miNombre = "Ulises";

//Scope local:
function nombre(){
    var miApellido = "Gutierrez";
    console.log(miNombre + " " + miApellido);
}
nombre();//Imprime Ulises Gutierrez
miNombre//Esto en consola imprime Ulises
miApellido//Esto en consola no imprime Gutierrez

//Alcance global y funciones

/*
En JavaScript, el alcance se refiere a la visibilidad de las variables.
Las variables que se definen fuera de un bloque de funciones tienen alcance global .
Esto significa que se pueden ver en todas partes en su código JavaScript.

Las variables que se declaran sin las palabras clave leto constse crean automáticamente
en el globalalcance. Esto puede crear consecuencias no deseadas en otras partes de su código
o al ejecutar una función nuevamente. Siempre debe declarar sus variables con leto const.
*/

/*
Las variables que se declaran dentro de una función, así como los parámetros de la función,
tienen alcance local . Eso significa que solo son visibles dentro de esa función.

Aquí hay una función myTestcon una variable local llamada loc.
*/

function myTest() {
    const loc = "foo";
    console.log(loc);
}

myTest();
console.log(loc);

/*
La myTest()llamada a la función mostrará la cadena fooen la consola.
La console.log(loc)línea (fuera de la myTestfunción) arrojará un error,
ya locque no está definidafuera de la función.
*/