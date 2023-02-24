//Crear elementos dinamicamente con jascript.
//Crear una nueva tarjeta de manera dinamica:
const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
//Elemento padre donde vamos insertar esta tarjeta:
$cards = document.querySelector(".cards");
//Incorporarlas al arbol del Dom:
//$cards.appendChild($figure);//En Elements podemos visualizar que se ha agragado una <figure></figure>
//Incorporarlas al arbol del Dom, forma correcta:
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");//Por la parte de estilos
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
//Crear otra tarjeta(otra modo), de forma dinamica:
const $figureTwo = document.createElement("figure")
$figureTwo.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figureTwo.classList.add("card");//Por la parte de estilos
$cards.appendChild($figureTwo);
//Crear dinamicamente las list item del ul:
const estaciones = ["primavera", "verano", "otoño", "invierno"],
$ul = document.createElement("ul");
document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);
estaciones.forEach((el) => {
    //crear una variable li que va a ser document.createElement("li")
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li)
});
//Crear dinamicamente las list item del ul:
const continenetes = ["africa", "america", "asia", "europa", "oceania"],
$ulTwo = document.createElement("ul");
document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ulTwo);
$ulTwo.innerHTML = "";
continenetes.forEach(el => $ulTwo.innerHTML += `<li>${el}</li>`);
//Fragmentos:
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
$ulThree = document.createElement("ul"),
$fragment = document.createDocumentFragment();
meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});
document.write("<h3>Meses del año<h3>");
$ulThree.appendChild($fragment);
document.body.appendChild($ulThree);