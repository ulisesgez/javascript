//Comparación con el Operador de Igualdad

/*
Hay muchos operadores de comparación en JavaScript. Todos estos operadores devuelven un
valor booleano trueo false.

El operador más básico es el operador de igualdad ==. El operador de igualdad compara
dos valores y devuelve truesi son equivalentes o falseno. Tenga en cuenta que la igualdad
es diferente de la asignación ( =), que asigna el valor a la derecha del operador a una
variable a la izquierda.
*/

function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

/*
Si myVales igual a 10, el operador de igualdad devuelve true, por lo que el código 
entre llaves se ejecutará y la función devolverá Equal. De lo contrario, la función
devolverá Not Equal. Para que JavaScript compare dos tipos de datos diferentes 
(por ejemplo, numbersy strings), debe convertir un tipo en otro.
Esto se conoce como tipo de coerción. Sin embargo, una vez que lo hace, puede comparar 
términos de la siguiente manera:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

*/

//Comparación con el Operador de Igualdad Estricta

/*
La igualdad estricta ( ===) es la contrapartida del operador de 
igualdad ( ==). Sin embargo, a diferencia del operador de igualdad,
que intenta convertir ambos valores que se comparan con un tipo común,
el operador de igualdad estricta no realiza una conversión de tipo.

Si los valores que se comparan tienen tipos diferentes,
se consideran desiguales y el operador de igualdad estricta devolverá falso.

Ejemplos:

3 ===  3  // true
3 === '3' // false
*/

/*
Comparación con el Operador de Desigualdad
El operador de desigualdad ( !=) es lo opuesto al operador de igualdad.
Significa no igual y vuelve falsedonde volvería la igualdad truey 
viceversa . Al igual que el operador de igualdad, el operador de 
desigualdad convertirá tipos de datos de valores al comparar.

Ejemplos

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
*/

/*
Comparación con el Operador de Desigualdad Estricta

El operador de desigualdad estricta ( !==) es el opuesto lógico del 
operador de igualdad estricta. Significa "Estrictamente no igual" y 
regresa falsedonde regresaría la igualdad estricta truey viceversa .
El operador de desigualdad estricta no convertirá tipos de datos.

Ejemplos

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
*/

/*
Comparación con el operador mayor que

El operador mayor que ( >) compara los valores de dos números.
Si el número de la izquierda es mayor que el número de la derecha,
devuelve true. De lo contrario, vuelve false.

Al igual que el operador de igualdad, el operador mayor que convertirá
tipos de datos de valores al comparar.

Ejemplos

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
*/

/*
Comparación con el operador mayor o igual que

El operador mayor o igual que ( >=) compara los valores de dos números.
Si el número de la izquierda es mayor o igual que el número de la derecha,
devuelve true. De lo contrario, vuelve false.

Al igual que el operador de igualdad, el operador mayor o igual que
convertirá los tipos de datos durante la comparación.

Ejemplos

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
*/

/*
Comparación con el operador menor que

El operador menor que ( <) compara los valores de dos números.
Si el número de la izquierda es menor que el número de la derecha,
devuelve true. De lo contrario, vuelve false. Al igual que el operador
de igualdad, el operador menor que convierte los tipos de datos al comparar.

Ejemplos

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
*/

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