/*
Comentarios
Los comentarios se comportan como espacios en blanco y se descartan durante la
ejecución del script. La sintaxis de los comentarios es la misma que en C++
y en muchos otros lenguajes:
*/

// a one line comment

/*
this is a longer,
multi-line comment
*/

/*
No puede anidar comentarios de bloque. Esto sucede a menudo cuando accidentalmente
incluye un asterisco - diagonal secuencia en su comentario, lo que terminará el
comentario.
En este caso, debe romper el asterisco - diagonal patrón.
Por ejemplo, al insertar una barra invertida:
*/

/* You can /* nest comments *\/ by escaping slashes */

/*
Variables:
Una variable es un contenedor para un valor, como un número, una cadena o un objeto.
En JavaScript, las variables se declaran con la palabra clave var.

Las variables son ubicaciones de almacenamiento en la memoria de la computadora que
se utilizan para guardar valores que se pueden utilizar más tarde en el programa.
En JavaScript, existen 3 formas de declarar variables: var, let y const.

Las variables declaradas con var y let pueden cambiar su valor a lo largo del tiempo,
mientras que las variables declaradas con const son constantes y no pueden cambiar su
valor una vez asignado.

Declara una variable:
el proceso de declarar una variable es especificar su nombre sin asignarle ningún valor,
esto solo se puede hacer con variables (let y var) debido a que const al no poder
cambiar su valor, no podremos inicializarla sin declararla al mismo tiempo.
JavaScript tiene tres tipos de declaraciones de variables.

Inicialización de una variable:
El proceso de inicialización de una variable es especificar su nombre y asignarle un
valor inicial durante la declaración. Esto se puede hacer en la misma línea que se
declara la variable o en líneas separadas, pero siempre antes de que se utilice la
variable por primera vez. Inicializar una variable es el asignarles cualquier valor.

Var:
Declara una variable, opcionalmente inicializándola a un valor.

Let:
Declara una variable local con ámbito de bloque y opcionalmente, la inicializa en un valor.

Const:
Declara una constante con nombre de solo lectura y ámbito de bloque.

Variables:
Utiliza variables como nombres simbólicos para valores en su aplicación.
Los nombres de las variables, llamados identificadores , se ajustan a ciertas reglas.

Un identificador de JavaScript generalmente comienza con una letra,
un guión bajo ( _) o un signo de dólar ( $). Los caracteres subsiguientes también pueden
ser dígitos ( 0- 9).
Dado a que JavaScript distingue entre mayúsculas y minúsculas, las letras incluyen los
caracteres Ahasta Z(mayúsculas) y ahasta z(minúsculas). Puedes utilizar la mayoría de
las letras ISO 8859-1 o Unicode, como åy üen los identificadores. (Para obtener más
detalles, consulte esta publicación de blog o la referencia de gramática léxica ).
También puede usar las secuencias de escape Unicode como caracteres en los identificadores.

Algunos ejemplos de nombres legales son Number_hits, temp99, $credity _name.

Declaración de variables:
Puede declarar una variable de dos maneras:
> Con la palabra clave var. Por ejemplo, var x = 42. Esta sintaxis se puede utilizar para
declarar variables locales y globales , según el contexto de ejecución.

> Con la palabra clave consto let. Por ejemplo, let y = 13. Esta sintaxis se puede utiliza
para declarar una variable local de ámbito de bloque. (Consulte Alcance variable a continuación).

También puedes simplemente asignar un valor a una variable. Por ejemplo, x = 42.
Este formulario crea una variable global no declarada. También genera una advertencia estricta
de JavaScript. Las variables globales no declaradas a menudo pueden provocar un comportamiento
inesperado. Por lo tanto, se desaconseja utilizar variables globales no declaradas.

Puede declarar variables para desempaquetar valores utilizando la sintaxis de asignación de
desestructuración . Por ejemplo, const { bar } = foo. Esto creará una variable nombrada bary
le asignará el valor correspondiente a la clave del mismo nombre de nuestro objeto foo.
Las variables siempre deben declararse antes de que se utilicen. JavaScript solía permitir la
asignación a variables no declaradas, lo que crea una variable global no declarada.
Este es un error en modo estricto y debe evitarse por completo.

Evaluar variables:
Una variable declarada usando la instrucción var o let sin un valor asignado especificado
tiene el valor de undefined.
Un intento de acceder a una variable no declarada da como resultado el disparo de una
excepción ReferenceError:
*/
var a;
console.log('El valor de a es ' + a); // El valor de a es undefined
console.log('El valor de b es ' + b); // El valor de b es undefined
var b;

//Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación
console.log('El valor de c es ' + c); // Error de referencia no detectado: c no está definida

let x;
console.log('El valor de x es ' + x); // El valor de x es undefined
console.log('El valor de y es ' + y); // Error de referencia no detectada: y no está definida
let y;

/*
Puedes usar undefined para determinar si una variable tiene un valor. En el siguiente código,
a la variable input no se le asigna un valor y la declaración if evalúa a true.
*/
var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}

/*
El valor undefined se comporta como false cuando se usa en un contexto booleano.
Por ejemplo, el siguiente código ejecuta la función myFunction porque el elemento myArray
es undefined:
*/
var myArray = [];
if (!myArray[0]) myFunction();

//El valor undefined se convierte en NaN cuando se usa en contexto numérico.
var a;
a + 2;  // Evalúa a NaN

/*
Cuando evalúas una variable null, el valor nulo se comporta como 0 en contextos numéricos
y como false en contextos booleanos. Por ejemplo:
*/
var n = null;
console.log(n * 32); // Registrará 0 en la consola

/*
Ámbito de variables
Cuando declaras una variable fuera de cualquier función, se denomina variable global,
porque está disponible para cualquier otro código en el documento actual. Cuando declaras una
variable dentro de una función, se llama variable local, porque solo está disponible dentro
de esa función.

JavaScript anterior a ECMAScript 2015 no tiene el ámbito de la declaración de bloque.
Más bien, una variable declarada dentro de un bloque es local a la función (o ámbito global)
en el que reside el bloque.

Por ejemplo, el siguiente código registrará 5, porque el ámbito de x es el contexto global
(o el contexto de la función si el código es parte de una función). El ámbito de x no se
limita al bloque de instrucciones if inmediato.
*/
if (true) {
    var a = 5;
  }
  console.log(a);  // a es 5

//Este comportamiento cambia cuando se usa la declaración let (introducida en ECMAScript 2015).

if (true) {
    let b = 5;
}
console.log(b); // ReferenceError: y no está definida

/*
Declaración e inicialización:
En una declaración como let x = 42, la let xparte se llama declaración y la = 42parte se
llama inicializador . La declaración permite acceder a la variable más tarde en el código
sin lanzar un ReferenceError, mientras que el inicializador asigna un valor a la variable.
En las declaraciones vary let, el inicializador es opcional. Si una variable se declara sin
inicializador, se le asigna el valor undefined.

let x;
console.log(x); // logs "undefined"
Copiar al portapapeles
En esencia, let x = 42es equivalente a let x; x = 42.

constlas declaraciones siempre necesitan un inicializador, porque prohíben cualquier tipo de asignación después de la declaración, y es probable que inicializarlas implícitamente undefinedsea un error del programador.

Declaración de variables: var, let, const:
*/

let numerodos;

//Inicializarla dándole valor:
numerodos = 30

//Declarada e inicializada o asignada (const debe ser declarada e inicializada, si no tira error):
let numero = 40

//Dandole otro valor (yas si escribimos let numero = 50, tira error):
numero = 50

//Declarada e inicializada (varias):
let numero1, numero2, numero3;

numero1 = 3;
numero2 = 6;
numero3 = 9;

let numero4 = 3, numero5 = 6, numero6 = 9;

//Declarada y asignada:
let fruta = 'banana';

/* Declarar una variable de solo lectura con la palabra clave const
La palabra clave let no es la única forma nueva de declarar variables.
En ES6, también puede declarar variables usando la const palabra clave.
Const tiene todas las increíbles características que lettiene,
con la ventaja adicional de que las variables declaradas usando const son
de solo lectura. Son un valor constante, lo que significa que una vez que
se asigna una variable const, no se puede reasignar:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
La consola mostrará un error debido a la reasignación del valor de FAV_PET.

Siempre debe nombrar las variables que no desea reasignar usando la const palabra clave.
Esto ayuda cuando accidentalmente intenta reasignar una variable que debe permanecer constante.

Nota: es común que los desarrolladores usen identificadores de variables
en mayúsculas para valores inmutables y minúsculas o camelCase para valores
mutables (objetos y matrices). Aprenderá más sobre objetos, matrices y valores
inmutables y mutables en desafíos posteriores. También en desafíos posteriores,
verá ejemplos de identificadores de variables en mayúsculas, minúsculas o
camelCase.

Reasignación y redeclaración:

En JavaScript, la reasignación y la redeclaración son dos conceptos diferentes
relacionados con las variables.
Reasignación se refiere al proceso de darle un nuevo valor a una variable existente.
*/
let nombre = 'Juan';
nombre = 'Pedro';
console.log(nombre);//Pedro
//Con const no podemos reasignar valores, pero si podemos mutarlos:
const nombre2 = 'Juan';
nombre2 = 'Pedro';//Esto no va a funcionar
console.log(nombre2);//Juan
//Pero si podemos mutarlos:
const nombre3 = [];
nombre3.push('Juan');
console.log(nombre3);//["Juan"]
nombre3.push('Pedro');
console.log(nombre3);//["Juan", "Pedro"]
/*
Redeclaración se refiere al proceso de crear una nueva variable con el mismo
nombre de una variable existente.

let nombre4 = 'Juan';
let nombre4 = 'Pedro';
console.log(nombre4);//Esto no va a funcionar
//Con const tampoco podemos redeclarar:
const nombre5 = 'Juan';
const nombre5 = 'Pedro';
console.log(nombre5);//Esto no va a funcionar
//Pero si podemos redeclarar con var:
var nombre6 = 'Juan';
var nombre6 = 'Pedro';
console.log(nombre6);//Pedro
*/
/*

Template literals:
Nos va a permitir concatenar strings de una forma mas amigable,
jugar con variables, elementos:
*/

let hello = 'hello';
let world = 'world';

let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//Ahora con template literals:
let phraseTemplateLiterals = `${hello} ${world}!`;

let helloWorld = 'Jello World!';
console.log(helloWorld);
helloWorld[0] = 'H';//Esto no va a funcionar, porque las strings son inmutables.
helloWorld = 'Hello World!';//Esto si va a funcionar, porque estamos reasignando la variable.
console.log(helloWorld);//Hello World!