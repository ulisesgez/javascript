//Template(modelo a seguir, como una clase o molde) es una etiqueta que no se visualiza.
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