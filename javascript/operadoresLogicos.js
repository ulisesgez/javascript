/*
Comparaciones con el operador lógico Y

A veces necesitará probar más de una cosa a la vez.
El operador lógico and&& ( ) devuelve truesi y solo
si los operandos a la izquierda y a la derecha son verdaderos.

Se podría lograr el mismo efecto anidando una sentencia
if dentro de otra if:
*/

if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
}
return "No";

//Solo regresará Yessi numes mayor que 5y menor que 10. La misma lógica se puede escribir como:

if (num > 5 && num < 10) {
    return "Yes";
}
return "No";

//Comparaciones con el operador lógico o

/*
El operador lógico o|| ( ) devuelve truesi alguno de los operandos es true.
De lo contrario, vuelve false.

El operador lógico o se compone de dos símbolos de tubería: ( ||).
Por lo general, esto se puede encontrar entre las teclas Retroceso y Intro.

El siguiente patrón debería resultarle familiar por los puntos de ruta anteriores:
*/

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

//regresará Yessolo si numestá entre 5y 10(5 y 10 incluidos).
//La misma lógica se puede escribir como:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

/*
 Nos devuelven unresultado a partir de que se cumpla (o no)
 una condición, su resultado es booleano y 
 sus operandos son valores logicos o asimilables a ellos
 */

let valor = true;
let valor2 = true;
//true, ya que si las dos condiciones se cumplen devuelve true
let resultado = valor && valor2;
//true, ya que si con que una sea verdadera devuelve verdadero
let resultado2 = valor || valor2;
//false, negación de true
let resultado3 = !valor;

document.write(resultado)