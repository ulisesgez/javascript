/*
Funciones: Conjunto de sentencias que nosotros podemos utilizar para generar ciertas
acciones con los valores que ya guardamos antes en la variables.

En JavaScript, podemos dividir nuestro código en partes reutilizables llamadas funciones .

La sfunciones son consideradas objetos.

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

/*
Funcion declarativa / funcion declarada:
A diefrencia de una funcion expresada esta puede ser llamada en cualquier parte y funcionara:
*/
funcionDeclarada();

function funcionDeclarada() {
    console.log("Puedo invocarme en cualquier parte del codigo, incluso antes");
};

funcionDeclarada();

//Funcion declarativa / funcion declarada, ademas de
//que devuelve un valor por el return:

function miFuncion(){
    return 3;
}

let result = miFuncion();
console.log(result);

/*
Es muy diferente a esto:
*/

function imprimeLogs() {
    console.log("a");
    console.log("b");
    console.log("c");
    return "d";//Solo imprimira a, b, c
}

/*
Tambien es muy diferente a esto:
*/

function imprimirLogReturn() {
    console.log("a");
    return "d";
    console.log("b");
    console.log("c");
}

let imprimir = imprimirLogReturn();
console.log(imprimir);//Solo imprimira a y d

// Otro ejemplo de función:
function saludar(){
    respuesta = prompt("hello, how is your day today?");
    if (respuesta == "bien"){
        alert("cool")
    } else {
        alert("sorry bro")
    }
}

//Invocacion de funcion. Se repetira 3 veces:

saludar();
saludar();
saludar();

//Función de expresión / funcion expresada / funcion ma:

//funcionExpresada(); Marca error

const funcionExpresada = function() {
    console.log("No puedo invocarme en cualquier parte del codigo como una funcion declarada");
};

funcionExpresada();

//Función de expresión / funcion expresada / funcion anonima, no tiene nombre:
//ojo, se hace uso de parametros
const miFuncionDos = function(a, b){
    return a + b;
}

miFuncionDos();

//Funcion anonima usando el constructor funcion:

const miFuncionTres = new Function ("a", "b", "return a*b");
const resultadoTres = miFuncionTres(5, 7);
alert(resultadoTres);

//Funcion anonima autoinvocada:

(function () {alert("helloWorld");}());

//Otro ejemplo:

(function() {
    console.log("Mi primer IIFE");
})();

(function() {
    console.log("Mi segunda IIFE");
})();

//Con paso de parametros:

(function(d, w, c) {
    console.log("Mi tercera IIFE");
    console.log(d);//Imprime document
    console.log(w);//Imprime window
    console.log(c);//Imprime console
    c.log("Este es un console log")
})(document, window, console);//Estamos pasando esto a los parametros

//Formas de escribir las funciones anonimas autoejecutables:

//Clasica:
(function(){
    console.log("versión clásica");
})();

//Crockford (Javascript The Good Parts)
((function() {
    console.log("versión crockford");
})());

//Unaria:
+function(){
    console.log("versión Unaria");
}();

//Facebook:
!function(){
    console.log("versión Facebook");
}();


/*
Funcion anonima, otro ejemplo:
Funcion que no tiene nombre, es decir que ese conjunto de instrucciones no va a
tener ningun nombre y nosotros lo podemos guardar dentro de una variable.
*/

let pelicula = function(nombre) {
    return "La pellicula es " + nombre;
}

/*
Introduccion a callback:
Es una funcion que se ejecuta dentro de otra, es una funcion dentro de otra funcion.
*/

function sumame (numeroUno, numeroDos, sumaYmuestra, sumaPorDos){
    let sumar = numeroUno + numeroDos;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}
sumame(5, 7, function(dato) {
    console.log("la suma es ", dato);//la suma es 12
},
function (dato) {
    console.log("La suma por dos es ", (dato*2));//la suma es 24
}
)

/*
Asignar valor a los parametros || parametros opcionales:
*/

function saludo (nombre = "jesus", edad = 24) {
    console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludo();//hola mi nombre es jesus y tengo 24 años

//Asigar funcion en variable:

saludar = function(){
    respuesta = prompt("hello, how is your day today?");
    if (respuesta == "bien"){
        alert("cool")
    } else {
        alert("sorry bro")
    }
}

//Devolver patrón temprano para funciones:

/*
Cuando return se llega a una declaración, la ejecución de la función actual se detiene
y el control vuelve a la ubicación de llamada.

Ejemplo
*/

function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();

/*
Lo anterior mostrará la cadena Helloen la consola y devolverá la cadena World.
La cadena byebyenunca se mostrará en la consola, porque la función
finaliza en la returndeclaración.
*/

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

//Comprender el valor indefinido devuelto por una función

/*
Una función puede incluir la returndeclaración pero no tiene que hacerlo.
En el caso de que la función no tenga una returndeclaración, cuando la llama,
la función procesa el código interno pero el valor devuelto es undefined.
*/

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

/*
addSumes una función sin returnsentencia.
La función cambiará la sumvariable global pero el valor devuelto de la función es undefined.
*/

//Parámetros por exceso:

function pasarValores() {
    alert("El numero de valores es "+arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        alert("Argumentos " + i + "=" + arguments[i]);
    };
};

pasarValores(4, 5, 6, 7, 8, 9, 0);


//Parámetros por defecto, antes de ECMAS6:

function newUser(name, age, country) {
    let name = name || 'oscar';
    let age = age || 30;
    let country = country || 'MX';
    console.log(name, age, country);
}

newUser();//Oscar 30 MX
newUser('David', 15, 'CO');//David 15 CO

//Parámetros por defecto con ECMAS6

function newAdmin(name = 'Oscar', age = 31, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();//Oscar 31 CL
newAdmin('Ana', 20, 'PE');//Ana 20 PE

//Funciones Self Invoking, se ejecuta asi misma una vez:

(function (a, b){
    console.log("La suma es: " + (a + b));//La suma es: 7
}(3, 4));