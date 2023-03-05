//Detener propagacion del tema anterior (burbuja o captura).
const $divEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a")

function flujoEventos(e) {
    console.log(`hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();//Elimina la propagación al dar click
}

console.log($divEventos);

$divEventos.forEach(div => {
    div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", (e) => {
    alert('youtube');
    //Cancelar la accion que tenga por default el elemento (enlace), en este caso no va hacia youtube
    e.preventDefault();
    e.stopPropagation();//En este ya no sale el mensaje en la consola al dar click en el enlace.
});