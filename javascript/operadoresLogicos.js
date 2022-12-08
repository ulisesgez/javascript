/**
 * NOs devuelven unresultado a partir de que se cumpla (o no)
 * una condicióiin, su resultado es booleano y 
 * sus operandos son valores logicos o asimilables a ellos
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