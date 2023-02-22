//No es un arreglo, es una coleccionde cuantos li tenemos:
console.log(document.getElementsByTagName("li"));
//Coleccion de elementos con la clase card, no lleva el punto:
console.log(document.getElementsByClassName("card"));
//Input
console.log(document.getElementsByName("nombre"));
//Por id
console.log(document.getElementById("menu"));
//Trae el elemento de acuerdo al selector:
console.log(document.querySelector("#menu"));
//Trae el primer elemento de acuerdo a los selectores:
console.log(document.querySelector("#menu li"));
//solo trae el primero que encuentra
console.log(document.querySelector("a"));
//Trae todos:
console.log(document.querySelectorAll("a"));
//Dimension:
console.log(document.querySelectorAll("a").length);
//Recorre e imprime cada uno:
document.querySelectorAll("a").forEach(element => console.log(element));