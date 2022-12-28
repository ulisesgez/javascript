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