/**
 * Primitivos: string, number, boolean, null, undefined, NaN.
 * Compuestos: object, array, function, class, etc
 */
//Ejemplo:

4 + "7"; // 47
4 * "7"; // 28
2 + true // 3
false - 3 // -3

/**
 * Coerción: La forma en la que podemos cambiar un tipo de valor a otro tipo de valor( valor tipo numero a valor tipo string)
 * Coerción implicita: Es cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor 
 * Coerción explicita: Es la forma en la que nosotros obligamos a que un valor de un tipo cambie a otro valor de otro tipo
 */

//Coerción implicita:

var a = 4 + "7";// Si en la terminal damos typeof a nos dira que es un string

var b = 4 * "7";// Nos dira que es un number

//Coerción explicita:

var c = 10;
var d = c + "";

console.log(d);// Nos dira que es un string

//otro forma:

var e = String(c);// Nos dira que es un string

var f = Number(e);// Nos dira que es un number