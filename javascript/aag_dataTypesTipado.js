/*
Grammar and types
JavaScript toma prestada la mayor parte de su sintaxis de Java, C y C++, pero también ha sido
influenciado por Awk, Perl y Python.

JavaScript distingue entre mayúsculas y minúsculas y utiliza el juego de caracteres Unicode.
Por ejemplo, la palabra Früh (que significa "temprano" en alemán) podría usarse como nombre
de variable.

*/
const Früh = "foobar";
console.log(Früh);//foobar
/*
Pero, la variable frühno es la misma Frühporque JavaScript distingue entre mayúsculas y
minúsculas.

En JavaScript, las instrucciones se llaman sentencias y están separadas por punto y coma (;).

No es necesario un punto y coma después de una declaración si se escribe en su propia línea.
Pero si se desea más de una declaración en una línea, entonces deben estar separadas por
punto y coma.

Tipos de datos:

Primitivos:
Se accede directamente al valor.
- number
- string
- boolean
- null
- undefined
- symbol

Compuestos:
Se accede a la referencia del valor.
- object
- array
- function
- class
- map
- set
- weakmap
- weakset
*/
//Tipos de datos:
string = "cadena de texto"
numero = 19
booleano = true
flotante = 3.1416
//Valores especiales:
//null
//undefined
//NaN
//Infinity

//Existe en el programa, pero no tiene valor:
let undefined
alert(undefined)

// Otro ejemplo:

4 + "7"; // 47
4 * "7"; // 28
2 + true // 3
false - 3 // -3

//Covertir un string a un number:

let falseNumber = "33";

console.log(Number(falseNumber) + 7);//40
/*
console.log(parseInt(falseNumber) + 7); numero entero, tambien lo convierte.
console.log(parseFloat(falseNumber) + 7); l0o convierte a decimal.

Undefined:
Tanto null como undefined van a representar un valor ausente, es decir una
variable que no tiene valor, pero la gran diferencia es que mientras undefined es una
variable que no ha sido inicializada:
*/
let indefinida;//undefined

console.log(indefinida);

/*
Nos dice que la variable esta vacia, pero es intencional,
a diferencia de undefined, con null le decimos que no va
a tener un valor (nulo o vacio):
*/

let numero = null;

//Nan o no es un numero:

let numero2 = 5;
let numero3 = "pedro";

alert(numero2 * numero3);//NaN