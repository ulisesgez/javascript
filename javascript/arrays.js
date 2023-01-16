/**
 * Array: Estructura de datos - lista de datos. Conjunto de datos, alos que despues podemos llamar, estos estan asociados a un indice, el primer elemento se encuentra en la posicion 0
 */
//Ejemplo:
let numeros = ["uno", 2, "tres", 4];

//Mostrar por posisiciones, en este caso se imprimira "uno":
document.write(numeros[0]);

//Tira undefined, por que no esta definido - declarada:
document.write(numeros[4]);

//Push, con esto agremgamos elementos a nuestro array:

let frutas = ["Manzana", "Platano", "Cerezas", "Fresas"];
let masFrutas = frutas.push("Uvas");

//Esto imprime : Manzana, Platano, Cerezas, Fresas, Uvas

//Unshift, con esto agrego mas elementos all inicio de nuestro array:

let automovil = ["uno", "dos", "tres"];
let otroAutomovil = automovil.unshift("cuatro");

//Esto imprime: uno, dos, tres, cuatro

//Pop, con esto eliminamos un elemento al final, para hacerlo al inicio seria con shift:

let ultimo = frutas.pop("Uvas");
document.write(frutas)

/**
 * Arrays Asociativos: Parecidos al formato json
 */
//Ejemplo:
let pc = {
    nombre: "mypc",
    procesador: "Intel",
    ram: "16GB",
    espacio: "1TB"
};

//Para este caso si queremos mandar a imprimir o tomar un elemento lo hacemos de la siguiente forma:
document.write(pc["nombre"]);

frase = `Nombre de pc: ${nombre}, <br>
        procesador: ${procesador}, <br>
        memoria ram: ${ram}, <br>
        almacenamiento: ${espacio}`

document.write(frase);

//Acceda a arreglos multidimensionales con índices

/*
Una forma de pensar en una matriz multidimensional es como una matriz de
matrices . Cuando usa corchetes para acceder a su matriz, el primer conjunto
de corchetes se refiere a las entradas en la matriz más externa (el primer nivel),
y cada par adicional de corchetes se refiere al siguiente nivel de entradas 
en el interior.
*/

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
  
/*
En este ejemplo, subarraytiene el valor [[10, 11, 12], 13, 14], 
nestedSubarraytiene el valor [10, 11, 12]y elementtiene el valor 11.
Nota: No debe haber espacios entre el nombre de la matriz y los corchetes,
como array [0][0]e incluso esto array [0] [0]no está permitido.
Aunque JavaScript puede procesar esto correctamente, esto puede confundir a 
otros programadores al leer su código.
*/

/*
Acceso a matrices anidadas

Como hemos visto en ejemplos anteriores, los objetos pueden contener 
tanto objetos anidados como matrices anidadas. De manera similar al 
acceso a objetos anidados, la notación de corchete de matriz se puede 
encadenar para acceder a matrices anidadas.

Aquí hay un ejemplo de cómo acceder a una matriz anidada:
*/

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];

/*
ourPets[0].names[1]sería la cadena Fluffy, y ourPets[1].names[0]sería la cadena Spot.
*/