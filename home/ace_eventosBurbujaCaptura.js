/*
Flujo de eventos (Burbuja y Captura):
Burubuja: Se propaga desde el elemento mas interno al mas externo.
Captura: Se propaga desde el elemento mas externo al mas interno.
*/

const $divEventos = document.querySelectorAll(".eventos-flujo div");

//console.log($divEventos);//NodeList(3) [div.uno, div.dos, div.tres]

function flujoEventos(e) {
    //console.log("Hola");//Imprime 3 veces Hola si se hace click en el div padre, contrario a si comentamos la linea con false y descomentamos en true.
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);//Imprime 3 mensajes: Hola te saluda uno/dos/tres, el click lo originó tres.
}

//AddEventListener de forma dinaica:
$divEventos.forEach((div) => {
    //Fase de burbuja(Por defecto viene en false):
    //div.addEventListener("click", flujoEventos);
    //Fase de burbuja(Especificandolo de forma explicita):
    div.addEventListener("click", flujoEventos, false);//console.log("Hola");//Imprime 3 veces Hola si se hace click en el div padre, contrario a si comentamos la linea con false y descomentamos en true.
    //Fase de captura:
    //div.addEventListener("click", flujoEventos, true);
}
);