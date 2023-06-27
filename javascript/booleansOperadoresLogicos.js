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