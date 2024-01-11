/*
Delegacion de eventos:
Es una tecnica que consiste en asignar un evento a un elemento padre y
a traves de este, determinar el elemento al cual se le disparo el evento.

Ventajas:
1. Optimizar recursos del navegador
2. Evitar asignacion de eventos a elementos que aun no existen en el DOM
3. Evitar bucles de eventos
*/

function flujoEventos(e) {
    console.log(`hola te saluda ${this}, el click lo origino ${e.target.className}`);
}
//Como el document es el nodo raiz de nuestro documento, ya no hay un elemento padre despues de el, no es necesario el manejo de stopPropagation
document.addEventListener("click", (e) => {
    console.log("click en ", e.target);//Nos dice en consola a que le estamos dando click

    if(e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")) {
        alert('youtube');
        //Cancelar la accion que tenga por default el elemento (enlace), en este caso no va hacia youtube
        e.preventDefault();
    }
});