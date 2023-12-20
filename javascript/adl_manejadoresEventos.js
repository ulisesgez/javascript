/*
Manejadores de eventos;
Los manejadores de eventos son funciones que se ejecutan automaticamente cuando
ocurre un evento.
*/

function holaMundo() {
    alert('hola mundo');
    console.log(event);//PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
}

const $eventoSemantico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");//con esto podemos ejecutar varias funciones en un evento

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