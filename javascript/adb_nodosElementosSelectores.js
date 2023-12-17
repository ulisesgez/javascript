/*
Nodos:
Los nodos son objetos que representan diferentes partes de un documento HTML.
El DOM organiza estos nodos en una estructura de árbol, donde cada nodo puede
ser un elemento HTML, un atributo, un fragmento de texto o algún otro tipo de entidad.
Los tipos principales de nodos incluyen:
Element nodes: Representan elementos HTML, como <div>, <p>, <ul>, etc.
Text nodes: Contienen texto dentro de un elemento HTML.
Attribute nodes: Representan atributos de un elemento HTML.

Elementos:
Los elementos son un tipo específico de nodo en el DOM que representa etiquetas HTML.
Los elementos pueden tener atributos, pueden contener texto y pueden
tener elementos secundarios anidados (hijos).
Algunos métodos útiles para trabajar con elementos incluyen getElementById,
getElementsByClassName, getElementsByTagName, querySelector y querySelectorAll.

Selectores:
Los selectores son patrones que permiten seleccionar uno o varios
elementos dentro del DOM.
Se utilizan en combinación con métodos como document.querySelector y
document.querySelectorAll para encontrar y seleccionar elementos específicos
en función de ciertos criterios, como el nombre de la etiqueta, la clase,
el ID o incluso selectores más complejos como selectores CSS.
Por ejemplo:
document.getElementById('miId') selecciona un elemento por su ID.
document.getElementsByClassName('miClase') selecciona elementos por su clase.
document.getElementsByTagName('div') selecciona elementos por su nombre de etiqueta.
document.querySelector('.miClase') selecciona el primer elemento que coincida con
el selector CSS proporcionado.
document.querySelectorAll('p') selecciona todos los elementos <p> del documento.
*/
//No es un arreglo, es una coleccion de cuantos li tenemos:
console.log(document.getElementsByTagName("li"));//HTMLCollection(5) [li, li, li, li, li]
//Coleccion de elementos con la clase card, no lleva el punto:
console.log(document.getElementsByClassName("card"));//HTMLCollection(5) [figure.card, figure.card, figure.card, figure.card, figure.card]
//Input
console.log(document.getElementsByName("nombre"));//NodeList [input]
//Por id
console.log(document.getElementById("menu"));//Devuelve el nav
//Query selector o consulta de selector:
//Trae el elemento de acuerdo al selector:
console.log(document.querySelector("#menu"));
//Trae el primer elemento de acuerdo a los selectores:
console.log(document.querySelector("#menu li"));//Aqui si hay que poner el gato
//solo trae el primero que encuentra
console.log(document.querySelector("a"));
//Trae todos:
console.log(document.querySelectorAll("a"));
//Dimension:
console.log(document.querySelector("a").length);//undefined
console.log(document.querySelectorAll("a").length);//5
//Recorre e imprime cada uno:
document.querySelectorAll("a").forEach(element => console.log(element));
console.log(document.querySelectorAll(".card")[2]);//alt="People"
/*
Este ejemplo no abarca este html:
En caso de ser un <div id= "micaja">soy una caja</div>
con lo siguente en la consola obtenemos:

let cajaUno = document.getElementById("micaja");//<div id= "micaja">soy una caja</div>
let cajaDos = document.getElementById("micaja").innerHTML;//soy una caja
cajaDos.innerHTML = "soy otra";//Modificamos el div a: soy otra caja

//conseguir elemento desde id concreto:

cajaDos.style.background = "red";//fondo rojo
cajaDos.style.padding = "20px";//padding 20 px
cajaDos.style.color = "white";//Texto white
cajaDos.className = "hola hola2"//cambiar el nombre de la clase
const cajaDos = document.querySelector("#micaja");//seleccionar elemento

function cambiaColor(color) {
    cajaDos.style.background = color;
}

//conseguir elementos por su etiqueta:
let todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);//array de elementos de los divs

let contenidoEnTexto = todosLosDivs[2].textContent;
console.log(contenidoEnTexto);//muestra el texto del div


let contenidoEnTexto = todosLosDivs[2].innerHTML;
console.log(contenidoEnTexto);//tambien muestra el texto del div

let contenidoEnTexto.innerHTML = "otro texto";
console.log(contenidoEnTexto);//cambiar el texto del div


cambiaColor("green");

*/