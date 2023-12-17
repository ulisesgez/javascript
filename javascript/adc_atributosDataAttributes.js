/*
Data Attributes:
Los atributos de datos (data attributes) en HTML permiten almacenar información
personalizada o adicional dentro de los elementos HTML. Estos atributos se denominan
"atributos de datos" porque su sintaxis comienza con "data-" seguido de un nombre
que defines para representar el dato que deseas almacenar.
Por ejemplo, en HTML puedes tener un elemento así:

<div id="miElemento" data-valor="10" data-nombre="Ejemplo"></div>

En este caso, el elemento <div> tiene dos atributos de datos: data-valor con
el valor "10" y data-nombre con el valor "Ejemplo".

En JavaScript, puedes acceder a estos atributos de datos utilizando el método
dataset del elemento DOM correspondiente. Por ejemplo:

const elemento = document.getElementById('miElemento');

// Acceder a los atributos de datos
const valor = elemento.dataset.valor; // valor será "10"
const nombre = elemento.dataset.nombre; // nombre será "Ejemplo"


Los atributos de datos son útiles para:

Almacenar información adicional: Puedes adjuntar datos específicos a elementos HTML
sin la necesidad de usar atributos estándar que tengan un significado predefinido
para el navegador o el validador HTML.

Manipulación y acceso a datos en JavaScript: Permiten acceder y manipular datos
asociados con elementos HTML directamente desde JavaScript, facilitando el
intercambio de información entre el HTML y el código JavaScript.

Mejorar la legibilidad del código: A menudo se utilizan en aplicaciones web para
almacenar configuraciones, identificadores o datos específicos necesarios para
el funcionamiento de la interfaz de usuario.
*/
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