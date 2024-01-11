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

//Booleanos y operadores lógicos:

console.log("Negación");
console.log(!true);//false
console.log(!false);//true

console.log("And");
console.log(true && true);//true
console.log(true && false);//false
console.log(false && true);//false
console.log(false && false);//false

console.log("Or");
console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false

console.log("Mix");
console.log(true && (false || true));//true
console.log(false || (true && false));//false
console.log((false || true) && (true && true));//true

//Asignaciones:

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150;//150
const a2 = "Hola" && "Mundo" && soyFalso && true;//false
const a3 = soyFalso || "Ya no soy falso" || soyUndefined || soyNull;//Ya no soy falso
const a4 = soyFalso || soyUndefined || "Ya no soy falso" || soyNull;//Ya no soy falso
const a5 = soyFalso || soyUndefined || soyNull || "Ya no soy falso";//Ya no soy falso
const a6 = soyFalso || soyUndefined || soyNull || "Ya no soy falso" || true;//true
const a7 = soyFalso || soyUndefined || soyNull || "Ya no soy falso" || true || false;//true
const a8 = soyFalso || soyUndefined || soyNull || "Ya no soy falso" || true || false || "Ya no soy falso";//true
const a9 = soyFalso || soyUndefined || soyNull || "Ya no soy falso" || true || false || "Ya no soy falso" || "Ya no soy falso";//true
const a10 = soyFalso || soyUndefined || soyNull || "Ya no soy falso" || true || false || "Ya no soy falso" || "Ya no soy falso" || "Ya no soy falso";//true
const a11 = soyFalso || soyUndefined || soyNull || "Ya no soy falso" || true || false || "Ya no soy falso" || "Ya no soy falso" || "Ya no soy falso" || "Ya no soy falso";//true
const a12 = soyFalso || "Ya no soy falso" || soyUndefined || soyNull;//Ya no soy falso
const a13 = soyFalso || "Ya no soy falso";//Ya no soy falso

console.log(a1);
console.log(a2);