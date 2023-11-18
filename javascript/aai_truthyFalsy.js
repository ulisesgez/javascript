//Tipo de valor verdadero y falso:

console.log(Boolean(0));//falso
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(""));

console.log(Boolean(1));//Verdadero
console.log(Boolean(-7));
console.log(Boolean("a"));
console.log(Boolean([]));
console.log(Boolean({}));

/*
Otro tipo de datos es el booleano .
Los valores booleanos solo pueden ser uno de dos valores: trueo false.
Son básicamente pequeños interruptores de encendido y apagado, donde trueestá encendido y
falseapagado. Estos dos estados son mutuamente excluyentes.

Nota: los valores booleanos nunca se escriben entre comillas.
Las cadenas "true"y "false"no son booleanas y no tienen un
significado especial en JavaScript

Usando el constructor:
*/

let v = Boolean(true);
let f = Boolean(false);

//OR:
console.log(-7 || "valor de la derecha");//-7
console.log(true || "valor de la derecha");//-true
console.log(undefined || "valor de la derecha");//valor de la derecha
console.log(0 || "valor de la derecha");//valor de la derecha

//AND:
console.log(-7 && "valor de la derecha");//valor de la derecha
console.log(true && "valor de la derecha");//valor de la derecha
console.log(undefined && "valor de la derecha");//undefined
console.log(0 && "valor de la derecha");//0