/*
La elección de qué ciclo usar depende de la situación y de lo que se quiera lograr.
Aquí hay algunas consideraciones generales:

- `while` se utiliza cuando no se sabe cuántas veces se debe repetir el ciclo,
pero se sabe cuál es la condición de salida. El ciclo se ejecutará mientras la
condición sea verdadera.

- `do while` es similar a `while`, pero se asegura de que el ciclo se ejecute
al menos una vez antes de verificar la condición de salida. Se utiliza cuando
se necesita que el ciclo se ejecute al menos una vez.

- `for` se utiliza cuando se sabe cuántas veces se debe repetir el ciclo.
Es útil cuando se necesita iterar sobre una estructura de datos, como un arreglo.

En el código que has compartido, se utilizan los tres tipos de ciclos para iterar sobre un arreglo de carros. El ciclo `while` se utiliza para imprimir los elementos del arreglo, el ciclo `do while` se utiliza para hacer lo mismo, y el ciclo `for` se deja sin terminar.
*/
//While:
const carros = [ "Ford", "Mazda", "Honda", "Toyota"];

let i = 0;

while(i < carros.length){
    console.log(carros[i]);//Ford Mazda Honda Toyota
    i++;
}

//Do while:

let j = 0;

do {
    console.log(carros[j]);//Ford Mazda Honda Toyota
    i++;
} while(i < carros.length);

//For:

for(let i = 0; i < carros.length; i++){
    console.log(carros[i]);//Ford Mazda Honda Toyota
}

//Otro ejemplo:

const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);//Batman Superman Mujer Maravilla Aquaman
}

//Ejemplo con for:

let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (let i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}
/**
 *  Hola, Maria
 *  Hola, Sergio
 *  Hola, Rosa
 *  Hola, Daniel
 */

//Otra forma de crear el saludo:

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (let estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

/**
 *  Hola, Maria
 *  Hola, Sergio
 *  Hola, Rosa
 *  Hola, Daniel
 */

//While:

let frutas = ["Manzana", "Pera", "Uva", "Cereza"];

function comprarFrutas(fruta){
    console.log(`Yo compre ${fruta}`);
}
while (frutas.length > 0){
    let fruta = frutas.shift();
    comprarFrutas(fruta);
}

/**
 *  Yo compre Manzana
 *  Yo compre Pera
 *  Yo compre Uva
 *  Yo compre Cereza
 */

// Ejemplo con If, en este caso solo se va sumando de 1 en 1, compara y muestra resultado:
//Imprime 1
let numero = 0;

if (numero < 10) {
    numero++;
    document.write(numero);
}
//Imprime 2
let numerodos = 0;

if (numerodos < 10) {
    numerodos++;
    numerodos++;
    document.write(numerodos);
}

// Ejemplo con While:
//La página no responde, ya que al comparar siempre es menor a 10:
let numerotres = 0;

while (numerotres < 10) {
    document.write(numerotres);
}

// Ahora si no muestra el error:

while (numerotres < 6) {
    numerotres++;
    document.write(numerotres);
}

//Do while, hacer mientras:

let numerocuatro = 0;

do {
    numerocuatro++;
    document.write(numerocuatro + "<br>");
}
while (numerocuatro <= 6);

/**
 * For: lo utilizamos cuando sabemos cuantas iteraciones van a ser necesarias.
 * - Declaramos
 * - Inicializamos
 * - Iteramos
 */

for (let i = 0; i < 6; i++){
    document.write(i);
};

//Imprime hasta 11:

for (let i = 0; i < 20; i++){
    if(i == 12) {
        break;
    }
    document.write(i);
};

//Se salta el 12:

for (let i = 0; i < 20; i++){
    if(i == 12) {
        continue;
    }
    document.write(i);
};
/**
 * For in y for of
 */

let animales = ["gato", "perro", "pajaro"];

// Imprime 0 1 2, devuelve la posición

for (animal in animales){
    document.write(animal + "<br>");
}

// Asi imprimimos los animales:

for (animal in animales){
    document.write(animales[animal] + "<br>");
}

// Imprime gato perro pajaro, devuelve el valor de los elementos

for (animal of animales){
    document.write(animal + "<br>");
}

//Otro ejemplo:
console.log("For in");
for (let i in heroes) {
    console.log(heroes[i]);
}

//Otro ejemplo:
let lenguajes = new Array("php", "js", "java", "c#", "c", "pascal", "go");

for(let lenguaje in lenguajes) {
    console.log(lenguajes[lenguaje]);
};

//Haciendo uso de busquedas:

let busqueda = lenguajes.find(lenguaje => lenguaje == "php");
console.log(busqueda);//php

/*
Anidamiento de bucles:

Si tiene una matriz multidimensional, puede usar la misma lógica que el
punto de referencia anterior para recorrer tanto la matriz como las sub-matrices.
Aquí hay un ejemplo:
*/

const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

  /*
  Esto da salida a cada subelemento de arruno en uno.
  Tenga en cuenta que para el bucle interno, estamos comprobando .lengthof arr[i], 
  ya que arr[i]es en sí mismo una matriz.
  */

//Otro ejemplo:
console.log("For of");
for (let heroe of heroes) {
    console.log(heroe);
}