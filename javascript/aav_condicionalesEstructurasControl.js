//Utilice la lógica condicional con declaraciones If

/*
ifLas declaraciones se utilizan para tomar decisiones en el código.
La palabra clave ifle dice a JavaScript que ejecute el código entre llaves
bajo ciertas condiciones, definidas entre paréntesis. Estas condiciones se
conocen como Booleancondiciones y solo pueden ser trueo false.

Cuando la condición se evalúa como true, el programa ejecuta la declaración
dentro de las llaves. Cuando la condición booleana se evalúa como false,
la declaración dentro de las llaves no se ejecutará.

if ( la condición es verdadera ) { la
  declaración se ejecuta
}
*/

function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
}
  
test(true);
test(false);

/*
test(true)devuelve la cadena It was truey test(false)devuelve la cadena It was false.

Cuando testse llama con un valor de true, la ifdeclaración evalúa myConditionpara ver
si es así trueo no. Como lo es true, la función devuelve It was true. Cuando llamamos
testcon un valor de false, no lomyCondition es y la declaración entre llaves no se ejecuta
y la función regresa . trueIt was false
*/

/*
Condicionales: Reglas que aplicamos para validar si algo es verdadero o falso 
y podamos nopsotros generar ciertas acciones con ello.
*/

if (true){
    console.log("hola");//hola
}


if (false){
    console.log("hola");
} else {
    console.log("soy falso");//soy falso
}

//Ahora un ejemplo con 3 diferentes casos:

let edad = 18;

if (edad === 18){
    console.log("Puedes votar, es tu 1ra vez votando");
} else if (edad > 18){
    console.log("Puedes votar");
} else {
    console.log("No puedes votar");
}

//Otro ejemplo:
nombre = "alex";
texto = "tu nombre es ";

if (nombre == "alex") {
    alert(texto + nombre);
}
else if (nombre == "jhon") {
    alert(texto + nombre);
}
else {
    alert("no se quien eres");
}

//operador terneario:

condition ? true : false;

let numero = 1;

let res = numero === 1 ? "soy un 1" : "no soy uno";//soy un 1

/*
Utilice el operador condicional (ternario)

El operador condicional , también llamado operador ternario ,
se puede usar como una expresión if-else de una línea.

La sintaxis es a ? b : c, donde a es la condición,
b es el código que se ejecutará cuando la condición regrese true y c
es el código que se ejecutará cuando la condición regrese false.

La siguiente función usa una if/elsedeclaración para verificar una condición:
*/

function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
}

 //Esto se puede reescribir usando el operador condicional:

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}

/*
Usar múltiples operadores condicionales (ternarios)

En el desafío anterior, utilizó un solo operador condicional.
También puede encadenarlos para verificar múltiples condiciones.

La siguiente función usa declaraciones if,
else ify elsepara verificar varias condiciones:
*/

function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
}

//La función anterior se puede reescribir usando múltiples operadores condicionales:

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
}

/*
Se considera una buena práctica formatear múltiples operadores condicionales
de modo que cada condición esté en una línea separada, como se muestra arriba.
El uso de varios operadores condicionales sin la sangría adecuada puede dificultar
la lectura del código. Por ejemplo:
*/

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}

//switch:

let numeros = 1;
switch (numeros){
    case 1:
        console.log("soy uno");
        break;
    case 10:
        console.log("soy diez");
        break;
    case 100:
        console.log("Soy un 100");
        break;
    default:
        console.log("No es un numero");
}