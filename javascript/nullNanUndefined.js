/*
Undefined: Tanto null como undefined van a representar un valor ausente, es decir una
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

alert(numero2 * numero3);