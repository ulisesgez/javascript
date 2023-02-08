/*
Secuencia de caracteres que forman un patron de busqueda y que principalmente es utilizado
en la busqueda de patrones de  cadenas de texto.
*/

let cadena = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sapiente voluptate eaque quia aut, perferendis nostrum harum reiciendis, maxime aliquid magni beatae voluptas! Laboriosam, dolorem? Alias dicta expedita ipsam incidunt."

let expReg = new RegExp("lorem", "i")//los lorem sin importar que la palabra este con mayucula o minuscula

console.log(expReg.test(cadena));//Probar que la expresion regular exista dentro de la cadena, true

console.log(expReg.exec(cadena));//Devuelve un arreglo.

//Otra forma de escribir una expresion regilar

let expRegTwo = /lorem/i;//los lorem sin importar que la palabra este con mayucula o minuscula.