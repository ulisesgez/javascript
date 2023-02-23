//Interactuar con los estilos de nuestro html:
const linkDom = document.querySelector(".link-dom");
console.log(linkDom.style);
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
//No es necesario el window
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
*/

//Variables CSS - Custom Propieries CSS:
//documentElement representa/accedemos html.
//tiene $ al inicio por que son referencias.
//Hemos agregado estilos <style> :root { --yellow-color: #F7DF1E; --dark-color: #222; </style>
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