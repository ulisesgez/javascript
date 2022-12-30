//Recorridos con arrays:

let products = [
    { name: "bike", cost: 3000 },
    { name: "tv", cost: 2500 },
    { name: "book", cost: 320 },
    { name: "mobile", cost: 10000 },
    { name: "laptop", cost: 20000 },
    { name: "keyboard", cost: 500 },
    { name: "earphones", cost: 2000 }
];

//Metodos para recorrer el contenido del array:

//Filter: Nos ayuda a filtar ciertas cosas, el filter va a validar si algo es verdad o falso y lo va a meter en un nuevo array, este metodo no modificara el array original que es products.

let filterProducts = products.filter(function(product){
    return product.cost <= 500
});

//Filtra los articulos menores o iguales a 500
//De cierta forma crea un nuevo array con los productos que se filtraron
//book y keyboard

console.log(filterProducts);

//Metodos para recorrer el contenido del array:

//Map: nOs ayudara a mapear ciertos articulos, de igual forma, este metodo nos va a generar un nuevo array, no va a modificar el array que ya tenemos:

let computers = [
    { brand: "apple", cost: 50000 },
    { brand: "dell", cost: 15000 },
    { brand: "samsung", cost: 13000 },
    { brand: "hp", cost: 10000 },
    { brand: "toshiba", cost: 14000 },
    { brand: "lenovo", cost: 18000 },
    { brand: "asus", cost: 25000 }
];

// Con esto le pedimos que nos regrese de todos los articulosel nombre de los articulos:
 
let brandComputers = computers.map(function(computer){
    return computer.brand
});

console.log(brandComputers);

//Metodos para recorrer el contenido del array:

//Find: Nos va a ayudar a encontrar algo adentro del array, valida un true o un false, genera un nuevo array en caso de que exista lo que buscamos:

let televisions = [
    { brand: "tcl", cost: 10000 },
    { brand: "sony", cost: 30500 },
    { brand: "samsung", cost: 13000 },
    { brand: "hisense", cost: 25000 },
    { brand: "panasonic", cost: 20000 },
    { brand: "sharp", cost: 15000 },
    { brand: "philips", cost: 12000 }
];

let findTelevision = televisions.find(function(television){
    return television.brand === "sony"
});

console.log(findTelevision);

//Metodos para recorrer el contenido del array:

//For Each: No generara un nuevo array solo hara el filtrado sobre el array anterior sin modificarlo:

televisions.forEach(function(television){
    console.log(television.brand);
});

//Metodos para recorrer el contenido del array:

//Some: De igualñ forma regresa una validacion de verdadero o falso para articulos que cumplan cone sa validacion:

let cheapTelevisions = televisions.some(function(television){
    return television.cost <= 15000;
});

console.log(cheapTelevisions);//true

/**
 * El método .push() nos permite agregar uno o más elementos al final 
 * de un array. A continuación veremos un ejemplo aplicado con un array 
 * que contiene números:
 */

let numArray = [1,2,3,4,5]

function newNum(){
  numArray.push(6,7)
}

newNum()

/**
 * Shift: Ahora pasemos a la otra cara de la moneda donde necesitamos 
 * eliminar un elemento del array. .shift() eliminar el primer elemento 
 * de un array, es decir, elimina el elemento que esté en el índice 0.
 */

//Creamos el array
let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray = array.shift()

//Revisamos. El output debe de ser [2,3,4,5]
console.log(array)

// --- POP ---

//Creamos el array
let arrayDos = [1,2,3,4,5]
console.log(arrayDos)

// Aplicamos .shift()
let shiftArrayDos = arrayDos.pop()

//Revisamos. El output debe de ser [1,2,3,4]
console.log(arrayDos)