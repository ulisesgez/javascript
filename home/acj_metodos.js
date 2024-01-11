/*
Metodos del BOM:
    alert()
    confirm()
    prompt()
    print()
    addEventListener()
    navigator
    geolocation
    localStorage
    sessionStorage
    fetch()
    getComputedStyle()
    scrollTo()
    setInterval()
    setTimeout()

Metodos previamente vistos:
window.alert('alerta');
window.confirm('confirmación');
window.prompt('aviso');
*/
const $abrirVentana = document.getElementById("abrirVentana"),
$cerrarVentana = document.getElementById("cerrarVentana"),
$imprimirVentana = document.getElementById("imprimirVentana");

let ventana;//undefined

$abrirVentana.addEventListener("click", (e) => {
    //De igual forma no es necesario añadir el window, ejem open("https://www.youtube.com/");
    ventana = window.open("https://www.youtube.com/");//Hacemos uso de la variable ventana para almacenar la ventana que previamente abrimos (guardar la referencia)
});
$cerrarVentana.addEventListener("click", (e) => {
    //window.close();//Se cierra la ventana en la que nos encontramos
    ventana.close();//Se cierra la ventana que abrimos con id="abrirVentana"
});
$imprimirVentana.addEventListener("click", (e) => {
    window.print();
});