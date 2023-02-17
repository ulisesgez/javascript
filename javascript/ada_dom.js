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
