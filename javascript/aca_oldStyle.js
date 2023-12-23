/*
Elementos para modificar el DOM:
    .innerHTML
    .textContent
    .createElement(element)
    .createTextNode(text)
    .appendChild(element)
    .prepend(element)
    .insertBefore(element, referenceElement)
    .removeChild(element)
    .replaceChild(newChild, oldChild)
    .cloneNode(true | false)
*/

const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");
//Para clonar:
$cloneCards = $cards.cloneNode(true);
//Si mandas false o se deja vacio no clona los hijos, solo el elemento padre:
//$cloneCards = $cards.cloneNode(false);


$newCard.innerHTML = `<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>`;
$newCard.classList.add("card");

//Reemplzar la tercera img [2]:
//$cards.replaceChild($newCard, $cards.children[2]);

//Insertarla antes de un nodo que tomemos como referencia, en este caso antes de la primera:
//$cards.insertBefore($newCard, $cards.firstElementChild);

//Eliminar la ultima tarjeta:
//$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);