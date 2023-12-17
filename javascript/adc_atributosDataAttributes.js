//Acceder al atributo lang que tiene la etiqueta html:
console.log(document.documentElement.lang);//en
//Aparentemente nos da el mismo resultado, pero no siempre pasa lo mismo:
console.log(document.documentElement.getAttribute("lang"));//en
//Trae:
console.log(document.querySelector(".link-dom").href);
//file:///C:/Users/techw/Desktop/main/myprojects/javascript/javascript/adc_atributosDataAttributes.html
//Trae:
console.log(document.querySelector(".link-dom").getAttribute("href"));
//./adc_atributosDataAttributes.html
//Cambiar lang
document.documentElement.lang = "es";
console.log(document.documentElement.lang);//es
//Cambiar lang, otra forma:
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);//es
//Uso de variables:
const linkDom = document.querySelector(".link-dom");
//Ahora abrimos una nueva ventana a google:
linkDom.setAttribute("target", "_blank");
linkDom.setAttribute("rel", "noopener");//Buenas practicas
linkDom.setAttribute("href", "https://www.google.com/");
//Comprobar un atributo:
console.log(linkDom.hasAttribute("rel"));//true, lo acabamos de añadir
linkDom.removeAttribute("rel");//lo removemos
console.log(linkDom.hasAttribute("rel"));//false

//Data atributes (html5), los cuales empiezan con data-

console.log(linkDom.getAttribute("data-description"));//Document Object Model --> <a class="link-dom" href="./adc_atributosDataAttributes.html" data-id="1" data-description = "Document Object Model">DOM</a>
console.log(linkDom.dataset);//Tipo de dato Mapa: DOMStringMap {description: 'Document Object Model'}
/*
Al agregar en el html data-id="1":
<a class="link-dom" href="./adc_atributosDataAttributes.html" data-id="1" data-description = "Document Object Model">DOM</a>
se imprime con:
console.log(linkDom.dataset);
DOMStringMap {id: '1', description: 'Document Object Model'}
*/
console.log(linkDom.dataset.description);//Document Object Model
linkDom.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log(linkDom.dataset.description);//Modelo de Objeto del Documento
linkDom.dataset.description = "helloWorld"
console.log(linkDom.dataset.description);//helloWorld