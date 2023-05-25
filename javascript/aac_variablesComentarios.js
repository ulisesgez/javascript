/*
Comentarios
Los comentarios se comportan como espacios en blanco y se descartan durante la ejecución del script.
La sintaxis de los comentarios es la misma que en C++ y en muchos otros lenguajes:
*/
// a one line comment

/* this is a longer,
 * multi-line comment
 */
/*
No puede anidar comentarios de bloque. Esto sucede a menudo cuando accidentalmente incluye un asterisco - diagonal secuencia en su comentario, lo que terminará el comentario.
En este caso, debe romper el asterisco - diagonal patrón. Por ejemplo, al insertar una barra invertida:
*/
/* You can /* nest comments *\/ by escaping slashes */

/*
Declaraciones
JavaScript tiene tres tipos de declaraciones de variables.

var
Declara una variable, opcionalmente inicializándola a un valor.

let
Declara una variable local con ámbito de bloque y, opcionalmente, la inicializa en un valor.

const
Declara una constante con nombre de solo lectura y ámbito de bloque.

Variables:
Utiliza variables como nombres simbólicos para valores en su aplicación. Los nombres de las variables, llamados identificadores , se ajustan a ciertas reglas.

Un identificador de JavaScript generalmente comienza con una letra, un guión bajo ( _) o un signo de dólar ( $). Los caracteres subsiguientes también pueden ser dígitos ( 0- 9).
Dado a que JavaScript distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres Ahasta Z(mayúsculas) y ahasta z(minúsculas).

Puedes utilizar la mayoría de las letras ISO 8859-1 o Unicode, como åy üen los identificadores. (Para obtener más detalles, consulte esta publicación de blog o la referencia de gramática léxica ). También puede usar las secuencias de escape Unicode como caracteres en los identificadores.

Algunos ejemplos de nombres legales son Number_hits, temp99, $credity _name.

Declaración de variables
Puede declarar una variable de dos maneras:

Con la palabra clave var. Por ejemplo, var x = 42. Esta sintaxis se puede utilizar para declarar variables locales y globales , según el contexto de ejecución .
Con la palabra clave consto let. Por ejemplo, let y = 13. Esta sintaxis se puede utilizar para declarar una variable local de ámbito de bloque. (Consulte Alcance variable a continuación).
Puede declarar variables para desempaquetar valores utilizando la sintaxis de asignación de desestructuración . Por ejemplo, const { bar } = foo. Esto creará una variable nombrada bary le asignará el valor correspondiente a la clave del mismo nombre de nuestro objeto foo.

Las variables siempre deben declararse antes de que se utilicen. JavaScript solía permitir la asignación a variables no declaradas, lo que crea una variable global no declarada . Este es un error en modo estricto y debe evitarse por completo.

Declaración e inicialización
En una declaración como let x = 42, la let xparte se llama declaración y la = 42parte se llama inicializador . La declaración permite acceder a la variable más tarde en el código sin lanzar un ReferenceError, mientras que el inicializador asigna un valor a la variable. En las declaraciones vary let, el inicializador es opcional. Si una variable se declara sin inicializador, se le asigna el valor undefined.

let x;
console.log(x); // logs "undefined"
Copiar al portapapeles
En esencia, let x = 42es equivalente a let x; x = 42.

constlas declaraciones siempre necesitan un inicializador, porque prohíben cualquier tipo de asignación después de la declaración, y es probable que inicializarlas implícitamente undefinedsea un error del programador.


*/

//declaración de variables: var, let, const:
let numerodos;

//Inicializarla dándole valor:
numerodos = 30

//Declarada e inicializada (const debe ser declarada e inicializada, si no tira error):
let numero = 40
//Dandole otro valor:
numero = 50

//Declarada e inicializada (varias)

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
camelCase. */

//Template literals:

/*
Nos va a permitir concatenar strings de una forma mas amigable,
jugar con variables, elementos:
*/

let hello = 'hello';
let world = 'world';

let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//Ahora con template literals:

let phraseTemplateLiterals = `${hello} ${world}!`;