/*
Ambito de las variables / Alcance de las variables / Scope:
Las variables pueden ser globales o locales, esto depende de donde se declaren.
Las variables globales son aquellas que se declaran fuera de una función y estan
disponibles dentro y fuera de las funciones.

En JavaScript no todas las variables son iguales y es importante entender cómo
funciona el alcance de las variables.

En este lenguaje existen dos tipos de scope (alcance) de variables: global y local.

Las variables declaradas fuera de cualquier función tienen alcance global, lo que
significa que pueden ser accedidas y modificadas desde cualquier parte del código.
Por otro lado, las variables declaradas dentro de una función tienen alcance local,
lo que significa que solo pueden ser accedidas y modificadas dentro de esa función.

Es importante tener en cuenta que cuando se declara una variable con var dentro
de una función, esta variable tendrá alcance global, aunque esté dentro de una función.
Sin embargo, si se declara con let o const, la variable tendrá alcance local.

Otro concepto importante a entender es el de hoisting, que se refiere al comportamiento
de javascript de mover las declaraciones de variables al inicio del ámbito en el que
están declaradas. Esto significa que si se declara una variable dentro de una función,
javascript la moverá al inicio de la función, incluso antes de que se ejecute cualquier
línea de código dentro de la función.
*/
var texto = "Hola mundo soy una variable global"
var numero = 12;
console.log(texto);//Imprime Hola mundo soy una variable global
console.log(numero);//Imprime 12

function holaMundo(texto) {
    console.log(texto);//Imprime Hola mundo soy una variable global
    console.log(numero);//Imprime 12
    var hola_mundo = "Texto dentro de funcion"
    console.log(hola_mundo);//Imprime Texto dentro de funcion
}
holaMundo(texto);

/*
¡Que pasaria si quisieramos acceder a numero dentro de la función?
function holaMundo(texto) {
    console.log(texto);
}
var texto = "Hola mundo soy una variable global" 
holaMundo(texto);

//En este caso si que se puede e imprime 12:

function holaMundo(texto) {
    console.log(texto);
    console.log(numero);
}
var numero = 12;
var texto = "Hola mundo soy una variable global" 
holaMundo(texto);

Ahora:
*/
function holaMundo(texto) {
    var hola_mundo = "Texto dentro de funcion"
    console.log(texto);//Imprime Hola mundo soy una variable global
    console.log(numero);//Imprime 12
    console.log(hola_mundo);//Imprime Texto dentro de funcion
}
var numero = 12;
var texto = "Hola mundo soy una variable global" 
holaMundo(texto);//Imprime Hola mundo soy una variable global | 12 | Texto dentro de funcion

console.log(hola_mundo);//Error, no esta definido en el ambito global, si en la función

/*
Scope:
El alcance determina la accesibilidad (visibilidad) de las variables.
El scope determina la accesibilidad de variables, objetos y funciones
desde diferentes partes del código.
Alcance de las variables dependiendo su ubicacion.
Alcance de las variables, es mala práctica usar var, es mejor let, tiene menos alcance.

Alcance variable
Una variable puede pertenecer a uno de los siguientes ámbitos :

Ámbito global: el ámbito predeterminado para todo el código que se ejecuta en modo script.
Ámbito del módulo: el ámbito del código que se ejecuta en modo módulo.
Ámbito de función: el ámbito creado con una función .
Además, las variables declaradas con let o const pueden pertenecer a un ámbito adicional:

Ámbito de bloque: el ámbito creado con un par de llaves (un bloque ).
Cuando declara una variable fuera de cualquier función, se denomina variable global,
porque está disponible para cualquier otro código en el documento actual. Cuando declara
una variable dentro de una función, se denomina variable local , porque solo está
disponible dentro de esa función.

let y const las declaraciones también se pueden limitar a la declaración de bloque
en la que se declaran.
*/
console.log("Var:");
var musicaUno = "Rock";
console.log("Antes del bloque", musicaUno);//Rock
{
  var musicaUno = "Pop";
  console.log("Dentro del bloque", musicaUno);//Pop
}
console.log("Despues del bloque", musicaUno);//Pop

console.log("Let:");
let musicaDos = "Rock";
console.log("Antes del bloque", musicaDos);//Rock
{
  let musicaDos = "Pop";
  console.log("Dentro del bloque", musicaDos);//Pop
}
console.log("Despues del bloque", musicaDos);//Rock

//Otro ejemplo:

if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined

/*
Sin embargo, las variables creadas con var no tienen un alcance de bloque, si no solo
locales para la función (o alcance global) en el que reside el bloque.

Por ejemplo, el siguiente código registrará 5 porque el alcance de x es el contexto
global (o el contexto de la función si el código es parte de una función).
El alcance de x no se limita al if bloque de declaración inmediata.
*/
if (true) {
  var x = 5;
}
console.log(x); // x is 5
/*
Elevación variable
var-Las variables declaradas se elevan , lo que significa que puede hacer referencia
a la variable en cualquier lugar de su alcance, incluso si aún no se ha alcanzado su
declaración. Puede ver varlas declaraciones como "elevadas" a la parte superior de
su función o alcance global. Sin embargo, si accede a una variable antes de que se
declare, el valor siempre es undefined, porque solo se iza su declaración , pero no
su inicialización .

Global Scope:
*/

var miNombre = "Ulises";

//Otro ejemplo:

var fruit = 'apple';//No esta dentro de un bloque

function bestFruit() {
  console.log(fruit);
}

bestFruit();//apple

//Otro ejemplo (Debemos tener cuidado con este formato, se encuentra en un bloque):

function countries() {
  //let country = 'colombia';//local
  country = 'colombia';//global cuando no iicializamos y declaramos con let
  console.log(country);
}

countries();//colombia
console.log(country);//colombia

//Function Scope(Local Scope):

function greeting() {
  let userName = 'Ana';
  console.log(userName);
  if(userName === 'Ana') {
    console.log(`hello ${userName}`);//hello Ana
  }
}

greeting();//Ana | hello Ana
console.log(userName);//userName is not defined , ya que esta en el scope local

//Scope Local:
function nombre(){
    var miApellido = "Gutierrez";
    console.log(miNombre + " " + miApellido);
}
nombre();//Imprime Ulises Gutierrez
miNombre//Esto en consola imprime Ulises
miApellido//Esto en consola no imprime Gutierrez


//Block Scope:
function animals() {
  if(true) {
    var animal1 = 'dog';//Function scope
    let animal2 = 'cat';//Block Scope
    const animal3 = 'bird';//Block Scope
    console.log(animal2);//cat
    console.log(animal3);//bird
  }
  console.log(animal1);//dog
  console.log(animal2);//ReferenceError: animal2 is not defined
  console.log(animal3);//ReferenceError: animal3 is not defined
}
animals();//dog | cat | bird

//Otro ejemplo:

function nombres() {
  if(true) {
    var nombres1 = 'ana';//Function scope
    let nombres2 = 'otto';//Block Scope
    const nombres3 = 'bob';//Block Scope
    console.log(nombres2);
    console.log(nombres3);
  }
  console.log(nombres1);
}

nombres();//ana | otto | bob

/*
Alcance global y funciones:

En JavaScript, el alcance se refiere a la visibilidad de las variables.
Las variables que se definen fuera de un bloque de funciones tienen alcance global .
Esto significa que se pueden ver en todas partes en su código JavaScript.

Las variables que se declaran sin las palabras clave leto constse crean automáticamente
en el globalalcance. Esto puede crear consecuencias no deseadas en otras partes de su código
o al ejecutar una función nuevamente. Siempre debe declarar sus variables con leto const.

Las variables que se declaran dentro de una función, así como los parámetros de la función,
tienen alcance local . Eso significa que solo son visibles dentro de esa función.

Aquí hay una función myTestcon una variable local llamada loc.
*/

function myTest() {
    const loc = "foo";
    console.log(loc);
}

myTest();
console.log(loc);//ReferenceError: loc is not defined

/*
La myTest()llamada a la función mostrará la cadena fooen la consola.
La console.log(loc)línea (fuera de la myTestfunción) arrojará un error,
ya locque no está definidafuera de la función.

Comprender el valor indefinido devuelto por una función:

Una función puede incluir la returndeclaración pero no tiene que hacerlo.
En el caso de que la función no tenga una returndeclaración, cuando la llama,
la función procesa el código interno pero el valor devuelto es undefined.
Ejemplo:
*/

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

/*
addSumes una función sin return sentencia.
La función cambiará la sumvariable global pero el valor devuelto de la función es undefined.

Ejemplo con arrow function:
*/

const fruits  = () => {
  if(true) {
      var fruit1 = 'apple';//function scope, global, si imprime
      let fruit2 = 'kiwi';//block scope, solo pueden ser accedidas dentro del bloque donde son declaradas
      const fruit3 = 'banana';//block scope, solo pueden ser accedidas dentro del bloque donde son declaradas
  }
  console.log(fruit1);//apple
  console.log(fruit2);//ReferenceError: fruit2 is not defined
  console.log(fruit3);//ReferenceError: fruit3 is not defined
}

fruits();//Error