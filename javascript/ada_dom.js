/*
DOM (Document Object Model):
Es una API para documentos HTML y XML.
Es una representacion del documento.
Define la estructura logica de los documentos y la forma de acceder y manipular
un documento.
Es un estandar, es decir, que todos los navegadores lo implementan.
*/
console.log('Elementos del documento');
//Esto:
console.log(window.document);
//es equivalente a este, no es necesario el window:
console.log(document);//Imprime el #document
console.log(document.head);//Devuelve cabeza del html
console.log(document.body);//Devuleve lo que hay en body del html
console.log(document.html);//Esto genera undefined, no es como los anteriores.
console.log(document.documentElement);//html, con esto si generamos el html o lo que hay en la etiqueta html.
console.log(document.doctype);//Devuleve tipo de documento
console.log(document.charset);//Juego de caracteres.
console.log(document.title);//Devuelve el titulo
console.log(document.links);//Encuentra links en la pagina
console.log(document.images);//Encuentra imagenes en la pagina
console.log(document.forms);//Devuelve los formularios.
console.log(document.styleSheets);//css
console.log(document.scripts);//javascript
//Despues de 3 segundos nos marcara el texto que hemos seleccionado:
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>helloWorld!</h2>");//Se creara un h2 despues de todo enuestro contenido.