/*
Eventos con parametros y remover eventos:
Para pasar parametros a una funcion manejadora de eventos, se puede hacer de dos formas:
1.- Usando una funcion anonima
2.- Usando una arrow function

Para remover un evento, se usa el metodo removeEventListener, el cual recibe
dos parametros:
1.- El tipo de evento
2.- La funcion manejadora del evento

Para desabilitar un boton, se usa la propiedad disabled, la cual recibe un
valor booleano:
true: desabilita el boton
false: habilita el boton

Para ver los eventos que se pueden usar en un elemento, se puede usar el
metodo getEventListeners, el cual recibe como parametro el elemento del cual se quiere ver los eventos.
*/
const $btnParametros = document.getElementById("evento-parametros");
const $btnRemover = document.getElementById("evento-remover");

function saludar(nombre = "desconocido") {
    alert(`hola ${nombre}`);
}
/*
$btnParametros.addEventListener("click", saludar);//hola [object PointerEvent], no imprime "hola desconocido" como pudieramos pensar.

Para solucionar esto, se puede usar una funcion anonima o una arrow function:
1.- Usando una funcion anonima:
*/

$btnParametros.addEventListener("click", function() {
    saludar("ulises");
}
);
//2.- Usando una arrow function:
$btnParametros.addEventListener("click", () => {
    saludar("jose");
}
);
/*
Remover eventos:
El siguiente ejemplo remueve el evento saludar, al dar click en el boton remover eventos.

$btnRemover.addEventListener("click", () => {
    $btnParametros.removeEventListener("click", saludar);//No funciona, no remueve el evento.
}
);

//Para que funcione, se debe usar una funcion anonima:
const saludarUlises = function() {
    saludar("Ulises");
};
$btnParametros.addEventListener("click", saludarUlises);

const saludarJose = () => {
    saludar("Jose");
};
$btnParametros.addEventListener("click", saludarJose);

$btnRemover.addEventListener("click", () => {
    $btnParametros.removeEventListener("click", saludarUlises);
    $btnParametros.removeEventListener("click", saludarJose);
});
Remover eventos:
*/
const removerClick = () => {
    alert("remover click, solo se puede remover una vez");
    $btnRemover.removeEventListener("click", removerClick);
    $btnRemover.disabled = true;//Desabilita el boton remover eventos una vez que se removio el evento.
}
$btnRemover.addEventListener("click", removerClick);//Segun la logica del programa solo podemos remover una vez el evento.