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
frasecompleta = `soy ${frase1} y estoy caminando`;

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