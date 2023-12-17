/*
Estilos en el DOM:
Acceder y modificar estilos CSS:
Puedes acceder y modificar los estilos CSS de un elemento HTML utilizando
la propiedad style del objeto del elemento.

// Acceder al estilo de un elemento
const miElemento = document.getElementById('miId');
miElemento.style.color = 'red'; // Modificar el color del texto a rojo
miElemento.style.fontSize = '20px'; // Modificar el tamaño de la fuente
miElemento.style.backgroundColor = '#f0f0f0'; // Modificar el color de fondo

Obtener estilos computados:
También puedes obtener los estilos computados (ya calculados) de un elemento
mediante window.getComputedStyle.

const elemento = document.getElementById('miId');
const estilosComputados = window.getComputedStyle(elemento);
console.log(estilosComputados.color); // Acceder al color computado del elemento
console.log(estilosComputados.fontSize); // Acceder al tamaño de la fuente computado

const elemento = document.getElementById('miId');
const estilosComputados = window.getComputedStyle(elemento);
console.log(estilosComputados.color); // Acceder al color computado del elemento
console.log(estilosComputados.fontSize); // Acceder al tamaño de la fuente computado

Variables CSS (Custom Properties):
Definir variables CSS:
Las variables CSS (también conocidas como Custom Properties) se definen
en CSS utilizando la sintaxis --nombre-variable: valor.

:root {
  --color-primario: #3498db;
  --padding-horizontal: 10px;
}

Acceder y modificar variables CSS desde JavaScript:
Puedes acceder y modificar las variables CSS definidas en el documento
desde JavaScript mediante getComputedStyle y setProperty.

// Acceder al valor de una variable CSS
const rootStyles = getComputedStyle(document.documentElement);
const colorPrimario = rootStyles.getPropertyValue('--color-primario');

// Modificar el valor de una variable CSS
document.documentElement.style.setProperty('--color-primario', 'green');

Usar variables CSS en estilos de elementos:
Una vez que tienes definidas las variables CSS,
puedes usarlas en los estilos de los elementos.

// Usar variables CSS en estilos de elementos
const elemento = document.getElementById('miElemento');
elemento.style.setProperty('color', rootStyles.getPropertyValue('--color-primario'));
elemento.style.setProperty('padding-left', rootStyles.getPropertyValue('--padding-horizontal'));

Estos métodos te permiten interactuar con los estilos CSS y las variables CSS
desde JavaScript, brindándote flexibilidad para modificar dinámicamente la apariencia de los elementos en tu página web.
*/
//Interactuar con los estilos de nuestro html:
const linkDom = document.querySelector(".link-dom");
console.log(linkDom.style);//CSSStyleDeclaration {}
/*
CSSStyleDeclaration {0: 'color', 1: 'background-color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
0: "color"
1: "background-color"
*/
//Hay diferencia con el anterior:
console.log(linkDom.getAttribute("style"));//color: white; background-color: black;
//Acceder a una propiedad:
console.log(linkDom.style.backgroundColor);//black
console.log(linkDom.style.color);//white
//Otra forma de acceder a las propiedades:
console.log(window.getComputedStyle(linkDom));//Un mapa diferente al anterior.
//No es necesario el window:
console.log(getComputedStyle(linkDom).getPropertyValue("color"));//rgb(255, 255, 255)
//Modificar propiedades:
linkDom.style.setProperty("text-decoration", "none");
linkDom.style.setProperty("display", "block");
linkDom.style.width = "50%";
linkDom.style.textAlign = "center";
linkDom.style.marginLeft = "auto";
linkDom.style.marginRight = "auto";
linkDom.style.borderRadius = ".5rem";

console.log(linkDom.style);
/*
CSSStyleDeclaration {0: 'color', 1: 'background-color', 2: 'text-decoration-line', 3: 'text-decoration-thickness', 4: 'text-decoration-style', 5: 'text-decoration-color', 6: 'display', 7: 'width', 8: 'text-align', 9: 'margin-left', 10: 'margin-right', 11: 'border-top-left-radius', 12: 'border-top-right-radius', 13: 'border-bottom-right-radius', 14: 'border-bottom-left-radius', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
0: "color"
1: "background-color"
2: "text-decoration-line"
3: "text-decoration-thickness"
4: "text-decoration-style"
5: "text-decoration-color"
6: "display"
7: "width"
8: "text-align"
9: "margin-left"
10: "margin-right"
11: "border-top-left-radius"
12: "border-top-right-radius"
13: "border-bottom-right-radius"
14: "border-bottom-left-radius"

Variables CSS - Custom Propieries CSS:
documentElement representa/accedemos html.
tiene $ al inicio por que son referencias.
Hemos agregado estilos <style> :root { --yellow-color: #F7DF1E; --dark-color: #222; </style>
*/

const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);// #222  #F7DF1E
//Se lo asignamos al body, desde el html:
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
//modificar las variables:
$html.style.setProperty("--dark-color", "#000");//modificamos el fondo, pero en html.
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);