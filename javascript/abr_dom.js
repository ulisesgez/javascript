/*
DOM (Document Object Model):
El DOM representa a los elementos como nodos y objetos con los cuales podemos
trabajar en javascript.
Es una API para documentos HTML y XML.
Es una representacion del documento.
Define la estructura logica de los documentos y la forma de acceder y manipular
un documento.
Es un estandar, es decir, que todos los navegadores lo implementan.
Representar el documento html a traves del dom nos permite acceder
a sus elementos y manipularlos.

Nodo:
Un punto especifico del diagrama o arbol de nodos del DOM. Los nodos
el DOM incluyen:
- Documento.
- Elementos HTML.
- Texto.
- Comentarios.

Root Node (Nodo raiz):
Nodo ubicado en la parte superior de la jerarquia de nodos del DOM.
En HTML es <html> y representa a todo el documento.

Parent Node (Nodo padre):
Nodo que contiene a otro nodo de la jerarquia de nodos del DOM.
En HTML, el nodo padre de un elemento es el elemento que lo contiene,
por ejemplo, el nodo padre de <h1> es <body>, el nodo padre de title es <head>.

Child Node (Nodo hijo):
Nodo contenido directamente dentro de otro nodo.
En HTML por ejemplo, <p> es un nodo hijo de <body>.

Descendant Node (Nodo descendiente):
Nodo contenido dentro de otro nodo en la jerarquia de DOM(directa o indirectamente).
En HTML por ejemplo de <body> descienden <h1> <p> y <div> y a su vez de <div> descienden
<h2> y <p>, por lo tanto <h2> y <p> son nodos descendientes de <body>.

Sibling Node (Nodo hermano):
Nodos ubicados en el mismo nivel de jerarquia de nodos del DOM.
En HTML por ejemplo <head> y <body> son nodos hermanos(comparten el mismo nodo padre).

Nodo vs Elemento:
El concepto de nodo es mas amplio que el de elemento.
Un nodo puede ser un elemento HTML, pero tambien puede ser texto o comentarios en el documento.
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