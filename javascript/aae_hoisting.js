/*
Hoisting:
Cuando las variables y las funciones se declaran antes que se procese cualquier
tipo de codigo.
 */

console.log(miNombre);//Imprime undefinied
var miNombre = "Ulises";
console.log(miNombre);//Imprime Ulises


/*
En funciones:
En este caso imprime hola mi nombre es undefinied:
*/

hey();//Imprime hola mi nombre es undefinied

function hey(){
    console.log("hola mi nombre es " + nickname);//Imprime hola mi nombre es undefinied
}

let nickname = "uli";