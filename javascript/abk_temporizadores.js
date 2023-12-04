/*
Temporizadores:
Un temporizador es una funcion que se ejecuta en un tiempo determinado o
cada cierto tiempo.

Set time out:
Recibe una callback, recibe una funcion que va a ejecutar y recibe un
tiempo expresado en milisegundos. El tiempo que se le pasa es el tiempo
que tardara en ejecutarse la funcion.

Set interval:
Recibe una funcion y un intervalo de tiempo. La funcion se ejecutara
indefinidamente cada cierto intervalo de tiempo.

console.log("set time out");
setTimeout(() => {
    console.log("Ejecutando un set time out, esto se ejecutara UNA SOLA VEZ");
}, 3000);//tres mil milisegundos / tres segundos

console.log("set interval");
setInterval(() => {
    console.log("Ejecutando un set interval, esto se ejecutara indefinidamente(N CANTIDAD DE VECES)cada cierto intervalo de tiempo");
}, 3000);//tres mil milisegundos / tres segundos
*/

console.log("dar hora");
setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);//tres mil milisegundos / tres segundos

//Contraparte del set time out y set time interval:

let temporizadorUno = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
}, 3000);//tres mil milisegundos / tres segundos

clearTimeout(temporizadorUno);//cancela un set time out, nunca se imprime
console.log("Despues del clearTimeout");

let temporizadorDos = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 3000);//tres mil milisegundos / tres segundos

clearInterval(temporizadorDos);//cancela un set interval, nunca se imprime
console.log("Despues del clearInterval");