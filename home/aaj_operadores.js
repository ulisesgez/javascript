/*
Operadores:
Los operadores son símbolos que realizan operaciones en variables y valores.
Los operadores son usados para realizar operaciones aritméticas, de comparación,
lógicas, de asignación, etc.

Aritméticos:
Toman valores numéricos( ya sean literales o variables)
como sus operandos y retornan un valor numérico único.
*/

numero = 20
numero--

//Resta 1
alert(numero)//19

//En cambio es deferente:
numero = 100

//Aqui no se resta 1, por que la resta se hace después de que se procesa.
alert(numero--)//100

/*
De Asignación:
Asigna un valor al operando de la izquierda
basado en el valor del operando de la derecha.

Asignación: x = y --> x = y
*/
nombre = "ulises"

//Asignación de adicción: x += y --> x = x + y
let numero = 10;

//Si sumaramos 5, seria: numero = numero + 5; en lugar de esto aplicamos:
numero +=  5;

//document.write no escribe en el documento, imprime 15:
document.write("Asignación de adicción: " + numero)//15

//Asignación de sustracción: x -= y --> x = x - y
numero -=  5;
document.write("Asignación de sustracción: " + numero)//10

//Asignación de multiplicación: x *= y --> x = x * y
numero *=  5;
document.write("Asignación de multiplicación: " + numero)//50

//Asignación de división: x /= y --> x = x /y
numero /=  5;
document.write("Asignación de división: " + numero)//10

//Asignación de Resto: x %= y --> x = x % y
numero = 20;
numero %=  5;

//Ya en esta parte se complica, que hace el de resto, nos imprime el resto de la división.
document.write("Asignación de Resto: " + numero)//0
numero = 100;
numero %=  5;
document.write("Asignación de Resto: " + numero)//0

//Asignación de exponenciación: x ** = y --> x = x ** y
numero = 10;
numero **=  2;

//10 a la 2
document.write(numero)//100
/*
Asignación de desplazamiento a la izquierda: x <<= y --> x = x << y
Asignación de desplazamiento a la derecha: x >>= y --> x = x >> y
Asignación sin signo de desplazamiento a la derecha: x >>>= y --> x = x >>> y
Asignación AND: x &= y --> x = x & y
Asignación XOR: x ^= y --> x = x ^ y
Asignación OR: x |= y --> x = x | y

Operadores de comparación: Comparan dos expresiones y devuelven un valor Boolean
que representa la relación de sus valores.

Comparación con el Operador de Igualdad:

Hay muchos operadores de comparación en JavaScript. Todos estos operadores devuelven un
valor booleano true o false.

El operador más básico es el operador de igualdad ==. El operador de igualdad compara
dos valores y devuelve true si son equivalentes o false no. Tenga en cuenta que la igualdad
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
(por ejemplo, numbers strings), debe convertir un tipo en otro.
Esto se conoce como tipo de coerción. Sin embargo, una vez que lo hace, puede comparar
términos de la siguiente manera:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

Comparación con el Operador de Igualdad Estricta:

La igualdad estricta ( ===) es la contrapartida del operador de
igualdad ( ==). Sin embargo, a diferencia del operador de igualdad,
que intenta convertir ambos valores que se comparan con un tipo común,
el operador de igualdad estricta no realiza una conversión de tipo.

Si los valores que se comparan tienen tipos diferentes,
se consideran desiguales y el operador de igualdad estricta devolverá falso.

Ejemplos:

3 ===  3  // true
3 === '3' // false

Comparación con el Operador de Desigualdad
El operador de desigualdad ( !=) es lo opuesto al operador de igualdad.
Significa no igual y vuelve false donde volvería la igualdad truey
viceversa . Al igual que el operador de igualdad, el operador de
desigualdad convertirá tipos de datos de valores al comparar.

Ejemplos

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

Comparación con el Operador de Desigualdad Estricta:

El operador de desigualdad estricta ( !==) es el opuesto lógico del
operador de igualdad estricta. Significa "Estrictamente no igual" y
regresa false donde regresaría la igualdad estricta true y viceversa .
El operador de desigualdad estricta no convertirá estos tipos de datos.

Ejemplos:

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

Comparación con el operador mayor que

El operador mayor que ( >) compara los valores de dos números.
Si el número de la izquierda es mayor que el número de la derecha,
devuelve true. De lo contrario, devuelve false.

Al igual que el operador de igualdad, el operador mayor que convertirá
tipos de datos de valores al comparar.

Ejemplos:

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

Comparación con el operador mayor o igual que:

El operador mayor o igual que ( >=) compara los valores de dos números.
Si el número de la izquierda es mayor o igual que el número de la derecha,
devuelve true. De lo contrario, devuelve false.

Al igual que el operador de igualdad, el operador mayor o igual que
convertirá los tipos de datos durante la comparación.

Ejemplos

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

Comparación con el operador menor que:

El operador menor que ( <) compara los valores de dos números.
Si el número de la izquierda es menor que el número de la derecha,
devuelve true. De lo contrario, devuelve false. Al igual que el operador
de igualdad, el operador menor que convierte los tipos de datos al comparar.

Ejemplos

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

Comparación con el operador menor o igual que:

El operador menor o igual que ( <=) compara los valores de dos números.
Si el número de la izquierda es menor o igual que el número de la derecha,
devuelve true. Si el número de la izquierda es mayor que el número de la
derecha, devuelve false. Al igual que el operador de igualdad, el operador
menor o igual que convierte los tipos de datos.

Ejemplos

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false

Operadores de comparación: Comparan dos expresiones y
devuelven un valor Boolean que representa la relación de sus valores
*/
let numero1 = 23;
let numero2 = 15;
let numero3 = 23;
let texto = "23"

// Esta primera compara mas no asigna, por lo que al comparar da falso
document.write(numero1 == numero2);//false

//Al comparar da true
document.write(numero1 == numero3);//true

//Al comparar da true
document.write(numero1 != numero2);//true

/*
Igualdad a == b
Exactamente / estrictamente idénticos === b
ejemplo:
*/

//Da true, a pesar que son diferente tipo de dato
document.write(numero1 == texto);//true
//Da false por que es estricto
document.write(numero1 === texto);//false

//mayor que y menor que:

 document.write(numero1 > numero2);//true

 document.write(numero1 < numero2);//false

/*
Operadores Lógicos: Toman valores booleanos (ya sean literales o variables)
como sus operandos y retornan un valor booleano único.

Comparaciones con el operador lógico &&:
A veces necesitará probar más de una cosa a la vez.
El operador lógico and && ( ) devuelve true si y solo
si los operandos a la izquierda y a la derecha son verdaderos.
Se podría lograr el mismo efecto anidando una sentencia
if dentro de otra if:
*/

if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
}
return "No";
  
//Solo regresará Yessi numes mayor que 5 y menor que 10. La misma lógica se puede escribir como:
  
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
  
/*
Comparaciones con el operador lógico o:
El operador lógico o|| ( ) devuelve true si alguno de los operandos es true.
De lo contrario, devuelve false.

El operador lógico o se compone de dos símbolos de tubería: ( ||).
Por lo general, esto se puede encontrar entre las teclas Retroceso e Intro.

El siguiente patrón debería resultarle familiar por los puntos de ruta anteriores:
*/

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";

//Regresará Yes solo si num está entre 5 y 10(5 y 10 incluidos).
//La misma lógica se puede escribir como:

if (num > 10 || num < 5) {
return "No";
}
return "Yes";

/*
Nos devuelven un resultado a partir de que se cumpla (o no)
una condición, su resultado es booleano y
sus operandos son valores lógicos o asimilables a ellos
*/

let valor = true;
let valor2 = true;
//true, ya que si las dos condiciones se cumplen devuelve true
let resultado = valor && valor2;
//true, ya que si con que una sea verdadera devuelve verdadero
let resultado2 = valor || valor2;
//false, negación de true
let resultado3 = !valor;

document.write(resultado);//true

/*
Operadores de Corto Circuito: Cuando JavaScript intenta evaluar ciertos
contextos lógicos, devuelve el valor de uno de los operandos basado en el
valor de la expresión lógica en su conjunto. Estos se conocen como operadores
de cortocircuito.

Funcionan poniendo dos condiciones ya sea utilizando el operador llogico or o el oprador logico and.

Corto circuito or:
cuando el valor de la izquierda en la expresión siempre pueda
validar a true, es el valor quese cargara por defecto.

cortocircuito and:
Cuando el valor de la izquierda en la expresion siempre pueda validar a false,
es el valor que se cargara por defecto
*/
//Tomando este ejemplo:
function saludoUno(nombre = "Desconocido") {
    console.log(`Buenos dias ${nombre}`);
}

saludoUno();//Buenos dias desconido
saludoUno("ulises");//Buenos dias ulises

//OR:

function saludoDos(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Buenas tardes ${nombre}`);//Buenas tardes desconido
}

saludoDos();//Buenas tardes desconido
saludoDos("ulises");//Buenas tardes ulises
console.log(-7 || "valor de la derecha");//-7
console.log(true || "valor de la derecha");//-true
console.log(undefined || "valor de la derecha");//valor de la derecha
console.log(0 || "valor de la derecha");//valor de la derecha

//AND:
console.log(-7 && "valor de la derecha");//valor de la derecha
console.log(true && "valor de la derecha");//valor de la derecha

console.log(undefined && "valor de la derecha");//undefined
console.log(0 && "valor de la derecha");//0