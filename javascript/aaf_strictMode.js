/*
Modo estricto:
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