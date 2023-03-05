window.addEventListener("resize", (e) => {
    console.clear();//Limpiear antes del resize
    console.log("----> Evento Resize <---");
    //Propiedades dentro la ventana, ancho y alto de nuestra ventana:
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    //tamaño ventana del navegador:
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

//Evento scroll:

window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("----> Evento Scroll <---");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

//Evento load:

window.addEventListener("load", (e) => {
    console.clear();
    console.log("----> Evento Load <---");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

//Esta opcion es mas rapida a la anterior:

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("----> Evento DOMContentLoaded <---");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})