/*
Scope: Alcanmce de las variables dependiendo su ubicacion.
Alcance de las variables, es mala práctica usar var, es mejor let, tiene menos alcance.
*/

//Scope global:

var miNombre = "Ulises";

//Otro ejemplo:

var fruit = 'apple';//No esta dentro de un bloque

function bestFruit() {
  console.log(fruit);
}

bestFruit();//apple

//Otro ejemplo:
//Debemos tener cuidado con este formato, seencuentra en un bloque:
function countries() {
  country = 'colombia';//global
  console.log(country);
}

countries();//colombia
console.log(country);//colombia

//Function scope:

function greeting() {
  let userName = 'Ana';
  console.log(userName);
  if(userName === 'Ana') {
    console.log(`hello ${userName}`);
  }
}

greeting();// Ana y hello Ana

//Otro ejemplo:

console.log(userName);//userName is not defined

//Scope local:
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
  }
  console.log(animal1);
  console.log(animal2);
  console.log(animal3);
}

animals();

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

nombres();
/*
otto
bob
ana
*/

//Alcance global y funciones

/*
En JavaScript, el alcance se refiere a la visibilidad de las variables.
Las variables que se definen fuera de un bloque de funciones tienen alcance global .
Esto significa que se pueden ver en todas partes en su código JavaScript.

Las variables que se declaran sin las palabras clave leto constse crean automáticamente
en el globalalcance. Esto puede crear consecuencias no deseadas en otras partes de su código
o al ejecutar una función nuevamente. Siempre debe declarar sus variables con leto const.
*/

/*
Las variables que se declaran dentro de una función, así como los parámetros de la función,
tienen alcance local . Eso significa que solo son visibles dentro de esa función.

Aquí hay una función myTestcon una variable local llamada loc.
*/

function myTest() {
    const loc = "foo";
    console.log(loc);
}

myTest();
console.log(loc);

/*
La myTest()llamada a la función mostrará la cadena fooen la consola.
La console.log(loc)línea (fuera de la myTestfunción) arrojará un error,
ya locque no está definidafuera de la función.
*/

//Comprender el valor indefinido devuelto por una función

/*
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
addSumes una función sin returnsentencia.
La función cambiará la sumvariable global pero el valor devuelto de la función es undefined.
*/

//Ejemplo con arrow function:

const fruits  = () => {
  if(true) {
      var fruit1 = 'apple';//function scope, global, si imprime
      let fruit2 = 'kiwi';//block scope, solo pueden ser accedidas dentro del bloque donde son declaradas
      const fruit3 = 'banana';//block scope, solo pueden ser accedidas dentro del bloque donde son declaradas
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();//Error