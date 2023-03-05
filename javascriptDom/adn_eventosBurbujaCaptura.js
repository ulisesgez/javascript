const $divEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
    //console.log(`hola`);
    console.log(`hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

console.log($divEventos);
//Crear addEventListener de manera dinamica para los divs(3):

$divEventos.forEach(div => {
    //Podemos ver que al dar click en los divs esto se propaga en los mensajes que se imprime.
    //Fase de burbuja, va del elemento mas interno al mas externo:
    //div.addEventListener("click", flujoEventos, {
    //    capture: false
    //});
    //div.addEventListener("click", flujoEventos);
    //div.addEventListener("click", flujoEventos, false);
    //Captura, va del elemento mas externo al mas interno:
    //div.addEventListener("click", flujoEventos, {
    //    capture: true
    //});
    //div.addEventListener("click", flujoEventos, {
    //capture: true,
    //Con este solo nos deja dar un click:
    //onnce: true
    //});
    div.addEventListener("click", flujoEventos, true);
})