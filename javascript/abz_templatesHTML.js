/*
Template(modelo a seguir, como una clase o molde):
En el contexto del Document Object Model (DOM) y JavaScript,
un "template" se refiere a un elemento HTML utilizado para almacenar contenido
que puede ser clonado y usado dinámicamente para crear elementos adicionales
con la misma estructura.

La etiqueta <template> es un contenedor especial en HTML que no se muestra en la
página cuando se carga, pero puede contener fragmentos de código HTML que no se
renderizan inicialmente. Se utiliza como una especie de "molde" o "plantilla" que
puede clonarse y manipularse mediante JavaScript para generar elementos visibles
en la página.

Es una etiqueta que no se visualiza.
*/
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,//acceder a su contenido
$fragment = document.createDocumentFragment(),
//Simulacion de AJAX o Fetch:
cardContent = [
    {
        title: "tech",
        img: "https://placeimg.com/200/200/tech"
    },
    {
        title: "animals",
        img: "https://placeimg.com/200/200/animals"
    },
    {
        title: "people",
        img: "https://placeimg.com/200/200/people"
    },
    {
        title: "archArch",
        img: "https://placeimg.com/200/200/archArch"
    },
    {
        title: "nature",
        img: "https://placeimg.com/200/200/nature"
    }
]
cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figcaption").textContent = el.title;
    let $clone = document.importNode($template, true);//true para copiar la estructura interna, figure, img, etc
    $fragment.appendChild($clone);
});
$cards.appendChild($fragment);