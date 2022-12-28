/**
 * Funciones: 
 */

function saludar(){
    respuesta = prompt("hello, how is your day today?");
    if (respuesta == "bien"){
        alert("cool")
    } else {
        alert("sorry bro")
    }
}

//Se repetira 3 veces:

saludar();
saludar();
saludar();

//Asigar funcion en variable:

saludar = function(){
    respuesta = prompt("hello, how is your day today?");
    if (respuesta == "bien"){
        alert("cool")
    } else {
        alert("sorry bro")
    }
}

//Return en funciones, sin la linea return "exit", marca undefined:
//saludo es igual a lo que retorna.

function saludardos(){
    alert("hola");
    return "exit"
    alert("no retorna");
}

let saludo = saludardos();
document.write(saludo);