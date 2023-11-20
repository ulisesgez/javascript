/*
Tipo de datos:
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
/*
Valores especiales:
null
undefined
NaN
Infinity
*/

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

Undefined, Nan y null:

Tanto null como undefined van a representar un valor ausente, es decir una
variable que no tiene valor, pero la gran diferencia es que mientras undefined es una
variable que no ha sido inicializada.

Undefined:
El valor undefined es un tipo de dato que representa un valor que aún no ha sido
asignado o que no tiene un valor válido. En JavaScript, podemos utilizar la palabra
clave undefined para representar el valor undefined.
Indica que no se ha inicializado una variable y que el valor esta ausente.
*/
let indefinida;

console.log(indefinida);//undefined

/*
Nos dice que la variable esta vacia, pero es intencional,
a diferencia de undefined, con null le decimos que no va
a tener un valor (nulo o vacio):
*/

let numero = null;

/*
Null:
El valor null es un tipo de dato que representa un valor vacío o nulo.
En JavaScript, podemos utilizar la palabra clave null para representar el valor nulo.
A menudo, utilizamos null para representar un valor que aún no ha sido inicializado o
para representar un valor que no tiene sentido en el contexto actual.
Es un valor especial que indica la ausecia de un valor numerico valido.
*/
let nullo = null;
console.log(nullo);//null

/*
Diferencias entre Null y Undefined
Es importante tener en cuenta que null y undefined son valores diferentes en JavaScript.
null representa un valor intencionalmente vacío, mientras que undefined representa
un valor que aún no ha sido asignado o que no tiene un valor válido.

Nan o no es un numero:
Es un valor especial que indica que una operacion matematica no es valida.
*/

let numero2 = 5;
let numero3 = "pedro";

alert(numero2 * numero3);//NaN