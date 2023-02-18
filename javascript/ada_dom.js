console.log('Elementos del documento|');
console.log(window.document);
console.log(document);
console.log(document.documentElement);//html
console.log(document.head);
console.log(document.body);
console.log(document.doctype);//tipo de documento
console.log(document.links);//encuentra links en la pagina
console.log(document.images);//Encuentra imagenes en la pagina
console.log(document.styleSheets);//css
console.log(document.scripts);//javascript
document.write("<h2>helloWorld!</h2>")
/*
En caso de ser un <div id= "micaja">soy una caja</div>
con lo siguente en la consola obtenemos:
*/
let cajaUno = document.getElementById("micaja");//<div id= "micaja">soy una caja</div>
let cajaDos = document.getElementById("micaja").innerHTML;//soy una caja
cajaDos.innerHTML = "soy otra";//Modificamos el diav a: soy otra caja

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

/*
let contenidoEnTexto = todosLosDivs[2].innerHTML;
console.log(contenidoEnTexto);//tambien muestra el texto del div

let contenidoEnTexto.innerHTML = "otro texto";
console.log(contenidoEnTexto);//cambiar el texto del div
*/

cambiaColor("green");