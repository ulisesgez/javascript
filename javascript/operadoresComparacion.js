/**
 * Operadores de compración: Comparan dos expresiones y
 * devuelven un valor Boolean que representa la relación de sus valores
 */
let numero = 23;
let numero2 = 15;
let numero3 = 23;
let texto = "23"

// Esta primera compara mas no asigna, por lo que al comparar da falso
document.write(numero == numero2);

//Al comparar da true
document.write(numero == numero3);

//Al comparar da true
document.write(numero != numero2);

/**
 * Igualdad a == b
 * Exactamente / estrictamente identicos === b
 * ejemplo:
 */
//Da true, a pesar que son diferente tipo de dato
document.write(numero == texto);
//Da false por que es estricto
document.write(numero === texto);

/**
 * mayor que y menor que:
 */
//true
 document.write(numero > numero2);

 //false
 document.write(numero < numero2);