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

/* 
Cuando está definiendo una cadena, debe comenzar y terminar con una comilla 
simple o doble. ¿Qué sucede cuando necesita una cita literal: "o 'dentro de 
su cadena?

En JavaScript, puede evitar que una comilla se considere como una comilla de 
fin de cadena colocando una barra invertida ( \) delante de la comilla.
*/

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

/*
Esto le indica a JavaScript que la siguiente cita no es el final de la cadena,
sino que debería aparecer dentro de la cadena. Entonces, si tuviera que imprimir
esto en la consola, obtendría:

Alan said, "Peter is learning JavaScript".
*/

//Citar Cadenas:

/*
Los valores de cadena en JavaScript se pueden escribir con comillas simples o
dobles, siempre que comience y termine con el mismo tipo de comillas.
A diferencia de otros lenguajes de programación, las comillas simples y dobles
funcionan igual en JavaScript.
*/

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

/*
La razón por la que podría querer usar un tipo de comillas sobre la otra es 
si desea usar ambas en una cadena. Esto podría suceder si desea guardar una 
conversación en una cadena y tener la conversación entre comillas.
Otro uso sería guardar una <a>etiqueta con varios atributos entre comillas,
todo dentro de una cadena.
*/

const conversation = 'Finn exclaims to Jake, "Algebraic!"';

/*
Sin embargo, esto se convierte en un problema si necesita usar las comillas 
más externas dentro de él. Recuerde, una cadena tiene el mismo tipo de comillas 
al principio y al final. Pero si tiene la misma cita en algún lugar en el medio, 
la cadena se detendrá antes de tiempo y generará un error.
*/

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
// const badStr = 'Finn responds, "Let's go!"';

/*
Aquí badStrarrojará un error.

En goodStr anterior, puede usar ambas comillas de forma segura usando la
barra invertida \como carácter de escape.

Nota: la barra invertida \ no debe confundirse con la barra inclinada /.
No hacen lo mismo.

Secuencias de escape en cadenas:
\'    single quote - comilla simple
\"    double quote - comilla doble
\\    backslash - barra invertida
\n    newline - nueva línea
\r    carriage return - retorno de carro
\t    tab - tabulación
\b    backspace - retroceso
\f    form feed - alimentación de formulario
*/