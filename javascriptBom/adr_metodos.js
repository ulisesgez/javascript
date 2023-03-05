//Metodos:
//window.alert('alerta');
//window.confirm('confirmación');
//window.prompt('aviso');

const $abrirVentana = document.getElementById("abrirVentana"),
$cerrarVentana = document.getElementById("cerrarVentana"),
$imprimirVentana = document.getElementById("imprimirVentana");

let ventana;//undefined

$abrirVentana.addEventListener("click", (e) => {
    //DE igual forma no es necesario añadir el window, ejem open("https://www.youtube.com/");
    ventana = window.open("https://www.youtube.com/");
});
$cerrarVentana.addEventListener("click", (e) => {
    //window.close();//Se cierra la ventana en la que nos encontramos
    ventana.close();//Se cierra la ventana que abrimos con id="abrirVentana"
});
$imprimirVentana.addEventListener("click", (e) => {
    window.print();
});