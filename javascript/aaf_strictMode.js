/*
Modo estricto:

JavaScript cuenta con un modo estricto que es un conjunto de reglas y características
que proporcionan una mayor seguridad y control en el código.
El modo estricto se activa mediante la palabra clave “use strict” al comienzo de un
archivo o al principio de una función.

Una de las principales ventajas de utilizar el modo estricto es que ayuda a evitar
errores comunes en el código. Por ejemplo, en modo estricto, no se puede redeclarar
una variable con el mismo nombre en el mismo ámbito, lo que evita confusiones
y errores en el código.

Además, en modo estricto, no se puede cambiar el tipo de dato de una variable al
momento de hacer la reasignación.
El modo estricto también proporciona mejoras en la performance del código.
Por ejemplo, en modo estricto, el código se ejecuta más rápido ya que no se realizan
algunas comprobaciones y conversiones que se realizan en modo no estricto.

El modo estricto es una forma de introducir una sintaxis más estricta para JavaScript.
Con el modo estricto, puede no usar variables no declaradas, lo que hace que sea más
fácil escribir "código limpio".
*/
pi = 3.14; // Esto no causará un error
console.log(pi); // Esto imprimirá 3.14

"use strict";//Esto es el modo estricto
valorPi = 3.14; // Esto causará un error
console.log(valorPi); // Esto no se ejecutará

//Otro ejemplo:

function myFunction() {
    "use strict";
    return y = 3.14; // Esto causará un error
}
console.log(myFunction());//Esto no se ejecutará

/*
En resumen, el modo estricto es una herramienta útil en la programación en JavaScript
que proporciona una mayor seguridad, control y performance en el código.
Es recomendable utilizar el modo estricto en todos los proyectos de JavaScript para
evitar errores comunes y problemas de seguridad. Sin embargo, es importante tener
en cuenta que el modo estricto puede generar algunos problemas al trabajar con
código existente que no está escrito en modo estricto, por lo que se debe
utilizar con precaución.
*/