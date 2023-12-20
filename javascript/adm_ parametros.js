/*
Eventos con parametros y remover eventos:
Para pasar parametros a una funcion manejadora de eventos, se puede hacer de dos formas:
1.- Usando una funcion anonima
2.- Usando una arrow function

Para remover un evento, se usa el metodo removeEventListener, el cual recibe dos parametros:
1.- El tipo de evento
2.- La funcion manejadora del evento

Para desabilitar un boton, se usa la propiedad disabled, la cual recibe un valor booleano:
true: desabilita el boton
false: habilita el boton

Para ver los eventos que se pueden usar en un elemento, se puede usar el metodo getEventListeners, el cual recibe como parametro el elemento del cual se quiere ver los eventos.
*/

function holaMundo() {
    alert('hola mundo');
    console.log(event);//PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
}

function saludar(nombre = "desconocido") {
    alert(`hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");//con esto podemos ejecutar varias funciones en un evento
const $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;//Sin parentesis, ya que se ejecutara cuando entremos a la pagina.
//Ya no se ejecutara la funcion anterior, se reemplaza, veamos en accion los eventos multiples:
$eventoSemantico.onclick = function(e) {
    alert('nuevo manejador de eventos semantico');
    console.log(e);//event, pasado como parametro, suele escribirse solo la e
    //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log(event);//event
    //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
}

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("multiple");
    console.log(e);//event
    console.log(e.type);//tipo de eevento, click
    console.log(e.target);//objeto que origina el evento, <button>...<button>
});

/*
hola [object PointerEvent], no manda a traer el parametro predefinido de desconocido:

function saludar(nombre = "desconocido") {
    alert(`hola ${nombre}`);
}

$eventoMultiple.addEventListener("click", saludar);

Tampoco lo solucionamos:

function saludar(nombre = "desconocido") {
    alert(`hola ${nombre} - ${event}`);
}
//Imprime: hola [object PointerEvent] - [object PointerEvent]
$eventoMultiple.addEventListener("click", saludar);

Solucion antes:

//Imprime: hola desconocido:

$eventoMultiple.addEventListener("click", function () {
    saludar();
});

//Solucion nueva usando arrow functions:
//Aqui si ponemos el parentesis, por que la funcion manejadora es la arrow function
$eventoMultiple.addEventListener("click", () => saludar());
*/
$eventoMultiple.addEventListener("click", () => {
    saludar();//hola desconocido
    saludar("jesus");//hola jesus
});

const removerDobleClick = (e) => {
    alert(`removiendo el evento del tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;//Con esto desabilitamos el botos despues de presionar dos veces

}
//solo funcionara 1 vez despues de dar doble click sobre el boton, despues de ello ya no hara nada.
$eventoRemover.addEventListener("dblclick", removerDobleClick);