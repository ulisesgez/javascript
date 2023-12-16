function flujoEventos(e) {
    console.log(`hola te saluda ${this}, el click lo origino ${e.target.className}`);
}
//Como el document es el nodo raiz de nuestro documento, ya no hay un elemento padre despues de el, no es necesario el manejo de stopPropagation
document.addEventListener("click", (e) => {
    console.log("click en ", e.target);//NOs dice en consola a que le estamos dando click

    if(e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")) {
        alert('youtube');
        //Cancelar la accion que tenga por default el elemento (enlace), en este caso no va hacia youtube
        e.preventDefault();
    }
});