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

Nota: la barra invertida \no debe confundirse con la barra inclinada /.
No hacen lo mismo.
*/