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
Cuando declara una variable fuera de cualquier función, se denomina variable global , porque está disponible para cualquier otro código en el documento actual. Cuando declara una variable dentro de una función, se denomina variable local , porque solo está disponible dentro de esa función.

let y const las declaraciones también se pueden limitar a la declaración de bloque en la que se declaran.
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

/*
Otro ejemplo:
Debemos tener cuidado con este formato, se encuentra en un bloque:
*/

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

/*
Closure:
Cuando una funcion cualquiera accede a una variable fuera de su contexto.
Permiten acceder al ambito de una funcion exterior desde una funcion interior.
En javascript, las clausuras se crean cada vez que una funcion es creada.
*/

const myGlobal = 0;

function myFunction() {
  const myNumber =  1;
  console.log(myGlobal);//0
  function parent() {//funcion interna, closure
    const inner = 2;
    console.log(myNumber, myGlobal);//1 0
    function child() {
      console.log(inner, myNumber, myGlobal);//2 1 0
    }
    return child();
  }
  return parent();
}

myFunction();
/*
0
1 0
2 1 0
*/

//Otro ejemplo:

function saludar() {
  let userName = 'Oscar'
  
  function displayUserName() {
    return `hello ${userName}`;
  }
  return displayUserName;
}

const g = saludar();
console.log(g);
console.log(g());

/*
ƒ displayUserName() {
    return `hello ${userName}`;
  }
VM54:12 hello Oscar
*/

/*
Otro ejemplo:
No funciona la alcancia:
function moneybox(coins) {
  let saveCoins = 0;
  saveCoins += coins;
  console.log(`money box: $ ${saveCoins}`);
}

moneybox(5);
moneybox(10);
*/

function moneybox(coins) {
  let saveCoins = 0;
  
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`money box: $ ${saveCoins}`);
  }
  return countCoins;
}

const myMoneybox = moneybox();
myMoneybox(5);
myMoneybox(10);
myMoneybox(20);

const moneyboxAna = moneybox();
moneyboxAna(300);
moneyboxAna(10);
moneyboxAna(25);