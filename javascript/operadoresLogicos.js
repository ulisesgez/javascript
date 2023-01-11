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

/*
 Nos devuelven unresultado a partir de que se cumpla (o no)
 una condicióiin, su resultado es booleano y 
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