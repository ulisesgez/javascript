/**
 Array: Estructura de datos - lista de datos. Conjunto de datos, alos que despues podemos llamar, estos estan asociados a un indice, el primer elemento se encuentra en la posicion 0
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

//Otra forma de hacerlo es:
document.write(pc.nombre);

frase = `Nombre de pc: ${nombre}, <br>
        procesador: ${procesador}, <br>
        memoria ram: ${ram}, <br>
        almacenamiento: ${espacio}`

document.write(frase);

//Otro ejemplo con arrays usando const:
const arreglo = new Array(100);//Array de 100 elementos
console.log(arreglo);//(100) [empty × 100]

//Otro ejemplo de como podemos definir un array:
const array = Array.of("x", "y", "z", 1, 2, 3);

//O :
const array2 = Array(10).fill("x");

//O :
const array3 = Array(10).fill(5);

//O (arreglo vacio):
const array4 = [];

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

//ECMA6:

const anArray = Array.of("x", "y", "z", 1, 2, 3);
console.log(anArray);//["x", "y", "z", 1, 2, 3]

//Fill, array. fill es una funcion, un metodo dentro de los arrays de javascript que nos permite
//lenar un array con cualquier cosa que necesite:

const unos = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];//Array con muchos unos
unos.fill(0);//Llenarlos de 0
console.log(unos);//(15) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//Crear un array con 100 elementos
const falseArray = Array(100).fill(false);
console.log(falseArray);//[false, false, false, false, .....]

//Ademas fill permite añadir otros dos parametros
//El segundo es el valor de start:
unos.fill(0, 2);//Llenarlos de 0, a partir del segundo parametro
console.log(unos);//(15) [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//El tercer parametro es valor de limite:
unos.fill(0, 2, 5);//Aqui termina antes del indice 5, no en el indice 5
console.log(unos);//(15)  [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

//Recorrer arrays con for each:
const letras = ['a', 'b', 'c'];

letras.forEach(item => console.log(item));

//Ahora queremos llenar con hola un array, pero esto puede salir mal, con fill lo solucionamos:
/*
const vacios = new Array(20).forEach(() => console.log('hola'));
console.log(vacios);//undefined
Mejor:
*/
const vacios = new Array(20).fill(undefined).forEach(() => console.log('hola'));
console.log(vacios);//20 hola

//Acceder a un elemento de un array:
let arregloCosas =[
  true,
  123,
  'Alejandro',
  1+2,
  function(){},
  ()=>{},
  {nombre: 'Fernando'},
  ['X','Megaman','Zero','Dr. Light',[
    'Dr. Willy',
    'Woodman'
  ]]
]
//Para acceder a un elemento de un array, se hace con el indice:
console.log(arregloCosas[0]);//true

//Ahora si queremos acceder a un elemento de un array dentro de otro array:
console.log(arregloCosas[7][4][1]);//Woodman