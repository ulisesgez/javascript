/**
 * Funciones: Conjunto de sentencias que nosotros podemos utilizar para generar ciertas acciones con los valores que ya guardamos antes en la variables.
 */
//Funcion declarativa:

function miFuncion(){
    return 3;
}

// Otro ejemplo de función:
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

//Función de expresión:
//ojo, se hace uso de parametros
const miFuncionDos = function(a, b){
    return a + b;
}

miFuncion();

miFuncionDos();

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

//Parametros:

function suma(num1, num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}
suma(1, 2);
suma(5, 10);

//Usando return:

function resta(num3, num4){
    let res = num3 - num4;
    return res;
}
let resultado = resta(10, 5);
document.write(resultado);