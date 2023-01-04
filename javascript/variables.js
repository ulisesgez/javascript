//Tipos de datos:
string = "cadena de texto"
numero = 19
booleano = true

//Existe en el programa, pero no tiene valor:
let undefined
alert(undefined)

//declaracion de variables: var, let, const:
let numerodos;

//Inicializarla dandole valor:
numerodos = 30

//Declarada e inicializada (const debe ser declarada e inicializada, si no tira error):
let numero = 40
//Dandole otro valor:
numero = 50
/* 
Scope: Alcance de las variable, es mala práctica usar var, es mejor let, tiene menos alcance.
*/

//Declarada e inicializada (varias)

let numero1, numero2, numero3;

numero1 = 3;
numero2 = 6;
numero3 = 9;

let numero4 = 3, numero5 = 6, numero6 = 9;

/* Declarar una variable de solo lectura con la palabra clave const
La palabra clave letno es la única forma nueva de declarar variables.
En ES6, también puede declarar variables usando la constpalabra clave.
Const tiene todas las increíbles características que lettiene,
con la ventaja adicional de que las variables declaradas usando constson
de solo lectura. Son un valor constante, lo que significa que una vez que
se asigna una variable const, no se puede reasignar:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
La consola mostrará un error debido a la reasignación del valor de FAV_PET.

Siempre debe nombrar las variables que no desea reasignar usando la constpalabra clave.
Esto ayuda cuando accidentalmente intenta reasignar una variable que debe permanecer constante.

Nota: es común que los desarrolladores usen identificadores de variables 
en mayúsculas para valores inmutables y minúsculas o camelCase para valores 
mutables (objetos y matrices). Aprenderá más sobre objetos, matrices y valores 
inmutables y mutables en desafíos posteriores. También en desafíos posteriores, 
verá ejemplos de identificadores de variables en mayúsculas, minúsculas o 
camelCase. */