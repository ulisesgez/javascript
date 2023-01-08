/*
Funciones: Conjunto de sentencias que nosotros podemos utilizar para generar ciertas
acciones con los valores que ya guardamos antes en la variables.

En JavaScript, podemos dividir nuestro código en partes reutilizables llamadas funciones .

He aquí un ejemplo de una función:
 */

function functionName() {
    console.log("Hello World");
}

/*
Puede llamar o invocar esta función usando su nombre seguido de paréntesis, así: functionName();
Cada vez que se llame a la función, se imprimirá el mensaje Hello Worlden la consola de desarrollo.
Todo el código entre llaves se ejecutará cada vez que se llame a la función.
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

/*
Los parámetros son variables que actúan como marcadores de posición para los valores que 
se deben ingresar a una función cuando se la llama. Cuando se define una función,
normalmente se define junto con uno o más parámetros. Los valores reales que se ingresan (o "pasan" )
en una función cuando se llama se conocen como argumentos .

Aquí hay una función con dos parámetros, param1y param2:
*/

function testFun(param1, param2) {
    console.log(param1, param2);
}

/*
Entonces podemos llamar testFunasí: testFun("Hello", "World");.
Hemos pasado dos argumentos de cadena, Helloy World. Dentro de la función, param1será igual 
a la cadena Helloy param2será igual a la cadena World. Tenga en cuenta que podría testFunvolver
 a llamar con diferentes argumentos y los parámetros tomarían el valor de los nuevos argumentos.
*/

//Usando return:

function resta(num3, num4){
    let res = num3 - num4;
    return res;
}
let resultado = resta(10, 5);
document.write(resultado);

//Devolver un valor de una función con retorno

/*
Podemos pasar valores a una función con argumentos .
Puede usar una returndeclaración para enviar un valor de vuelta fuera de una función.
*/

function plusThree(num) {
    return num + 3;
}

const answer = plusThree(5);

/*
answertiene el valor 8.
plusThreetoma un argumento a favor numy devuelve un valor igual a num + 3.
*/