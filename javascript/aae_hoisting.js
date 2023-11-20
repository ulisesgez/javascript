/*
Hoisting:
Cuando las variables y las funciones se declaran antes que se procese cualquier
tipo de codigo.
El hoisting es un comportamiento de JavaScript en el que las declaraciones de
variables y funciones son movidas al comienzo del ámbito actual antes de que
cualquier otro código sea ejecutado. Esto significa que las declaraciones de
variables y funciones pueden ser utilizadas antes de haber sido declaradas en el código.
 */

console.log(x);
var x = 1;

/*
JavaScript interpreta este código como si estuviera escrito de la siguiente manera:
var x;
console.log(x);
x = 1;

Esto significa que cuando se ejecuta el código, el valor de x será undefined en la primera línea, ya que la declaración de x ha sido movida al comienzo del ámbito.

Sin embargo, es importante tener en cuenta que las asignaciones no son movidas a
comienzo del ámbito, sólo las declaraciones. Esto significa que el siguiente código
dará un error:
*/

console.log(miNombre);
miNombre = "Ulises";
console.log(miNombre);


/*
En funciones:
En este caso imprime hola mi nombre es undefinied:
*/

hey();//Imprime hola mi nombre es undefinied

function hey(){
    console.log("hola mi nombre es " + nickname);//Imprime hola mi nombre es undefinied
}

let nickname = "uli";