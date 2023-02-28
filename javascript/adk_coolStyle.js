const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");
/*
$newCard.innerHTML = `<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>`;
*/

let $contentCard = `<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>`;

$newCard.classList.add("card");
//Insertar tarjeta antes del nodo de referencia, antes de los hijos:
//$cards.insertAdjacentElement("beforebegin", $newCard);

//Insertar la tarjeta como primer nodo:
//$cards.insertAdjacentElement("afterbegin", $newCard);

//Insertar la tarjeta como ultimo nodo, ultimo hijo:
//$cards.insertAdjacentElement("beforeend", $newCard);

//Se agrega como hermano posterior:
//$cards.insertAdjacentElement("afterend", $newCard);

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

//Insertar tarjeta antes del nodo de referencia, antes de los hijos:
//$cards.insertAdjacentElement("afterbegin", $newCard);

//Insertar tarjeta antes del nodo de referencia, antes de los hijos:
//$cards.before($newCard);

//Insertar la tarjeta como primer nodo:
//$cards.prepend($newCard);

//Insertar la tarjeta como ultimo nodo, ultimo hijo:
//$cards.append($newCard);

//Se agrega como hermano posterior:
$cards.after($newCard);