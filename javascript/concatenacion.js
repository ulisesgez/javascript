/**
 * Concatenacion: Unir strings
 */
saludo = "hola Jhon!";
pregunta = " ¿Como estas?";

frase = saludo + pregunta;
document.write(frase);

//Con numeros lo anterior no seria posible ya que se sumaria

numero1 = 10;
numero2 = 20;

resultado = numero1 + numero2;
document.write(resultado);

//Una forma de solucionarlo es usando cadena de texto al iniciar. Por que cuando el string detecta texto convierte automaticamente todo en una cadena de texto (tipado dinamico):

numero1 = 15;
numero2 = 25;

resultado = "" + numero1 + numero2;
document.write(resultado);

//Otra forma es usar concat, pero para ello primero debe detectar que hay un string:

numero1 = "56";
numero2 = 89;

resultado = numero1.concat(numero2);
document.write(resultado);

//Otra forma es usando backtiks y la variable entre ${}
frase1 = "ulises";
frasecompleta = "soy " + frase1 + " y estoy caminando";

document.write(frasecompleta);

//Mejor y con esto evitamos muchos errores:
frase1 = "bruno";
frasecompleta = `soy ${frase1} y estoy caminando`;//Interpolación de variables

document.write(frasecompleta);

//Podemos hacer:
frase1 = "karina";
frasecompleta = `soy ${frase1} y
 estoy caminando`;

document.write(frasecompleta);

//Ejemplo con html:
frase = `<div>
<h1>hello</h1>
<h2>world</h2>
</div>`;

document.write(frase);

//Escape de comillas simples:
frase = "mi nombre es 'Ulises'y soy el mejor";

/**
 * Es posible imprimirse con comillas simples ahora con comillas dobles:
 * 
 * frase = "mi nombre es "Ulises"y soy el mejor";
 * 
 * Como vemos marca error asi que:
 */

//Escape de comillas dobles:
frase = 'mi nombre es "Ulises"y soy el mejor';
//o
frase = "mi nombre es 'Ulises'y soy el mejor";

//Concatenación de cadenas con el operador más igual a

/*
También podemos usar el +=operador para concatenar una cadena al final de una
variable de cadena existente. Esto puede ser muy útil para dividir una cadena
larga en varias líneas.

Nota: Cuidado con los espacios. La concatenación no agrega espacios entre cadenas
concatenadas, por lo que deberá agregarlos usted mismo.
*/

let ourStr = "I come first. ";
ourStr += "I come second.";

// ourStrahora tiene un valor de la cadena I come first. I come second..

//Construcción de cadenas con variables:

/*
A veces necesitará construir una cadena.
Al usar el operador de concatenación ( +),
puede insertar una o más variables en una cadena que está creando.
*/

const ourName = "freeCodeCamp";
const helloStr = "Hello, our name is " + ourName + ", how are you?";

//Agregar variables a cadenas

/*
Así como podemos construir una cadena en varias líneas a partir de literales 
de cadena , también podemos agregar variables a una cadena usando 
el +=operador más igual ( ).
*/

const anAdjective = "awesome!";
let freeStr = "freeCodeCamp is ";
ourStr += anAdjective;

//ourStrtendría el valor freeCodeCamp is awesome!.

//Use la notación de corchetes para encontrar el primer carácter en una cadena

/*
La notación de corchetes es una forma de obtener un carácter en un índice
específico dentro de una cadena.

La mayoría de los lenguajes de programación modernos, como JavaScript,
no comienzan a contar desde 1 como lo hacen los humanos. Comienzan en 0.
Esto se conoce como indexación basada en cero .

Por ejemplo, el carácter en el índice 0 de la palabra Charleses C.
Entonces const firstName = "Charles", si puede obtener el valor de la primera
letra de la cadena usando firstName[0].
*/

const firstName = "Charles";
const firstLetter = firstName[0];

//firstLettertendría un valor de la cadena C.

//Comprender la inmutabilidad de cadenas

/*
En JavaScript, Stringlos valores son inmutables , lo que significa que no se
pueden modificar una vez creados.

Por ejemplo, el siguiente código generará un error porque la letra Bde la
cadena Bobno se puede cambiar a la letra J:
*/

let myStr = "Bob";
myStr[0] = "J";

/*
Tenga en cuenta que esto no significa que myStrno se pueda reasignar.
La única forma de cambiar myStrsería asignarle un nuevo valor, así:
*/

let myStr = "Bob";
myStr = "Job";

//Use la notación de corchetes para encontrar el último carácter en una cadena

/*
Para obtener la última letra de una cadena, puede restar una de la longitud de
la cadena.

Por ejemplo, si const firstName = "Ada", puede obtener el valor de la última
letra de la cadena usando firstName[firstName.length - 1].
*/

const secondName = "Ada";
const lastLetter = secondName[secondName.length - 1];
const thirdToLastLetter = secondName[secondName.length - 3];

//lastLettertendría un valor de la cadena a.
//thirdToLastLettertendría un valor de la cadena s.