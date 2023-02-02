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

//Do while:

let numerocuatro = 0;

do {
    numerocuatro++;
    document.write(numerocuatro + "<br>");
}
while (numerocuatro <= 6);

/**
 * For:
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

document.write("<br>");


// Imprime gato perro pajaro, devuelve el valor de los elementos

for (animal of animales){
    document.write(animal + "<br>");
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