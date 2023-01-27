/*
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
    console.log(`Buenas tardes ${nombre}`);
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