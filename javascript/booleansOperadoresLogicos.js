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
