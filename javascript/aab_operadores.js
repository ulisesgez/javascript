/**
 * Aritméticos: Toman valores númericos( ya sean literales o variables) como sus operandos y retornan un valor númerico único.
 */
numero = 20
numero--
//Resta 1
alert(numero)

//En cambio es deferente:
numero = 100
//Aqui no se resta 1, por que la resta se hace despues de que se procesa.
alert(numero--)

/**
 * De Asignación: Asigna un valor al operando de la izquierda basado en el valor del operando de la derecha.
 */

//Asignación: x = y --> x = y
nombre = "ulises"
//Asignación de adicción: x += y --> x = x + y
let numero = 10;
//Si sumaramos 5, seria: numero = numero + 5; en lugar de esto aplicamos:
numero +=  5;
//document.write no escribe en el documento, imprime 15:
document.write("Asignación de adicción: " + numero)

//Asignación de sustracción: x -= y --> x = x - y
numero -=  5;
document.write("Asignación de sustracción: " + numero)

//Asignación de multiplicación: x *= y --> x = x * y
numero *=  5;
document.write("Asignación de multiplicación: " + numero)

//Asignación de división: x /= y --> x = x /y
numero /=  5;
document.write("Asignación de división: " + numero)

//Asignación de Resto: x %= y --> x = x % y
numero = 20;
numero %=  5;
//Ya en esta parte se complica, que hace el de resto, nos imprime el resto de la division.
document.write("Asignación de Resto: " + numero)

numero = 100;
numero %=  5;
document.write("Asignación de Resto: " + numero)

//Asignación de exponenciación: x ** = y --> x = x ** y
numero = 10;
numero **=  2;
//10 a la 2
document.write(numero)

//Asignación de desplazamiento a la izquierda: x <<= y --> x = x << y
//Asignación de desplazamiento a la derecha: x >>= y --> x = x >> y
//Asignación sin signo de desplazamiento a la derecha: x >>>= y --> x = x >>> y
//Asignación AND: x &= y --> x = x & y
//Asignación XOR: x ^= y --> x = x ^ y
//Asignación OR: x |= y --> x = x | y