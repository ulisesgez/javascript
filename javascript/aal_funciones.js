/*
Funciones:
Conjunto de sentencias que nosotros podemos utilizar para generar ciertas
acciones con los valores que ya guardamos antes en la variables.
En JavaScript, podemos dividir nuestro código en partes reutilizables llamadas
funciones. Las funciones son consideradas objetos.
He aquí un ejemplo de una función:
 */
function functionName() {
    console.log("Hello World");
}

/*
Puede llamar o invocar esta función usando su nombre seguido de paréntesis, así:
functionName();
Cada vez que se llame a la función, se imprimirá el mensaje Hello World en la consola de desarrollo.
Todo el código entre llaves se ejecutará cada vez que se llame a la función.

Funcion declarada:
A diferencia de una funcion expresada esta puede ser llamada en cualquier parte y funcionara:
*/
funcionDeclarada();//Puedo invocarme en cualquier parte del codigo, incluso antes.

function funcionDeclarada() {
    console.log("Puedo invocarme en cualquier parte del codigo, incluso antes");//Puedo invocarme en cualquier parte del codigo, incluso antes
};

funcionDeclarada();//Puedo invocarme en cualquier parte del codigo, incluso antes.

//Funcion declarada, ademas de que devuelve un valor por el return:
function miFuncion(){
    return 3;
}

let result = miFuncion();
console.log(result);

//Es muy diferente a esto:
function imprimeLogs() {
    console.log("a");
    console.log("b");
    console.log("c");
    return "d";//Solo imprimira a, b, c
}

//Tambien es muy diferente a esto:
function imprimirLogReturn() {
    console.log("a");
    return "d";
    console.log("b");
    console.log("c");
}

let imprimir = imprimirLogReturn();
console.log(imprimir);//Solo imprimira a

//Otro ejemplo de función declarada:
function saludar(){
    respuesta = prompt("hello, how is your day today?");
    if (respuesta == "bien"){
        alert("cool")
    } else {
        alert("sorry bro")
    }
}

//Invocacion de funcion. Se repetira 3 veces:
saludar();//hello, how is your day today?
saludar();//hello, how is your day today?
saludar();//hello, how is your day today?

/*
Función expresada (función de expresión, función anonima, no tiene nombre):
Es una función que se le asigna a una variable, es decir que ese conjunto de instrucciones
no va a tener ningun nombre y nosotros lo podemos guardar dentro de una variable.
*/
const funcionExpresada = function() {
    console.log("No puedo invocarme en cualquier parte del codigo como una funcion declarada");//No puedo invocarme en cualquier parte del codigo como una funcion declarada
};

funcionExpresada();

//Funcion anonima, otro ejemplo:
const miFuncionDos = function(a, b){
    return a + b;
}

miFuncionDos();

//Funcion anonima usando el constructor funcion:
const miFuncionTres = new Function ("a", "b", "return a*b");
const resultadoTres = miFuncionTres(5, 7);
alert(resultadoTres);//35

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

/*
Formas de escribir las funciones anonimas autoejecutables:
Clasica:
*/
(function(){
    console.log("versión clásica");
})();

//Crockford (Javascript The Good Parts):
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

//Asignar valor a los parametros || parametros opcionales:
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

/*
Devolver patrón temprano para funciones:

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

Return en funciones, sin la linea return "exit", marca undefined:
saludo es igual a lo que retorna.
*/
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

Usando return:
*/
function resta(num3, num4){
    let res = num3 - num4;
    return res;
}
let resultado = resta(10, 5);
document.write(resultado);

/*
Devolver un valor de una función con retorno.

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

Comprender el valor indefinido devuelto por una función

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

Parámetros por exceso:
*/
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

/*
Funciones flecha:
Son un tipo mas compacto de funciones que podemos escribir en javascript que normalmente se
utilizan cunado necesitamos definir funciones anonimas. Las funciones anonimas son funciones
que no tiene un nombre especifico, ejemplo:

const fecha = function() {
    return new Date();
}

Introducidas a partir de ECMAS 6:
Es una expresion de funcion que nos va a permitir tener una
alternativa a una funcion, que normalmente las conocemos como function.

Diferencias y limitaciones:
No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo.
*/

//Funcion normal:
function comparacion(num) {
    return num * num;
};

//Arrow function:
const comparacionUno = (num) => {
    return num* num;
};

//Arrow function, return implicito:
const comparacionDos = num => num * num;

//Otro ejemplo:
const helloArrow = () => {
    console.log('Hello Arrow Function');//Hello Arrow Function
}

//De lo anterior podemos reducirlo a:
const helloArrowDos = () => console.log('Hello Arrow Function');//Hello Arrow Function

//Ahora con un argumento:
const helloArrowTres = nombre => console.log(`Hello ${nombre}`);//Hello Ulises

//Otro ejemplo:
const numeroAleatorio = () => Math.random();

//Otro ejemplo:

const fecha = () => new Date();

//Otro ejemplo, concatenar arrays:
const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);

//Otro ejemplo:
const sumarFuncion = (a, b) => a + b;
resultado = sumarFuncion(3, 5);
console.log(resultado);//8

//Otro ejemplo, valor por defecto:
const incrementar = (num, valorDefecto = 1) => num + valorDefecto;

console.log(incrementar(5));//6
console.log(incrementar(5, 3));//8


//Otro ejemplo:
const saludar = (nombre)=>{
    let frase = `hola ${nombre} ¿como estas?`;
    document.write(frase);
}
saludar("oscar");

/*
En esta sección se retomara el mismo tema pero de otra fuente:
Función expresada se genera cuando a una variable le asignas el valor de una función anonima.
Funcion anonima:
*/

const bienvenido = function() {
    console.log(`Hola, bienvenido`);//Hola, bienvenido
}

bienvenido();

//Arrow Function:
const adios = () => {
    console.log(`Adios, nos vemos`);//Adios, nos vemos
}

adios();

/*
Cuando tenemos una sola linea en la funcion, podemos omitir la llaves y dejar la funcion asi:
Mas expresivo, aqui no recibe parametros por lo que se colocan parentesis: () =>:

const adios = () => console.log(`Adios, nos vemos`);

adios();

Recibir parametros en funciones flecha, aqui podemos quitar los parentesis: () => ,
esto solo ocurre si tenemos un parametro:
*/
const miNombre = otroNombre => console.log(`Hola me llamo Ulises y tu nombre es ${otroNombre}`);//Hola me llamo Ulises y tu nombre es Irma
miNombre('Irma');


//Return implicito:
const multiplicar = (a, b) => a + b;
console.log(multiplicar(9, 9));//81

const funcionVariasLineas = () => {
    console.log('a');//a
    console.log('b');//b
    console.log('c');//c
}

funcionVariasLineas();// a b c

//Iteracion:
const numeros = [1, 2, 3, 4, 5];
numeros.forEach((element, index) => console.log(`${element} esta en la posición ${index}`));//1 esta en la posición 0
//1 esta en la posición 0
//2 esta en la posición 1
//3 esta en la posición 2
//4 esta en la posición 3
//5 esta en la posición 4