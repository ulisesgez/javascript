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

/*
Filter: Nos ayuda a filtar ciertas cosas, el filter va a validar si algo es
verdad o falso y lo va a meter en un nuevo array, este metodo no modificara
el array original que es products.

filter() lo que hace es filtrar el array original en base a una condición, los
que la cumplan estaran en el nuevo array creado.
Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:
- cero coincidencias
- todas coincidencias
- algunas coincidencias
Pero nunca más coincidencias que el tamaño del array original.
*/

let filterProducts = products.filter(function(product){
    return product.cost <= 500
});

//Filtra los articulos menores o iguales a 500
//De cierta forma crea un nuevo array con los productos que se filtraron
//book y keyboard

console.log(filterProducts);

//Otro ejemplo:

const words = ['hello', 'world', 'javascript'];

const newWords = words.filter(item => item.length >= 8)
console.log(words);//['hello', 'world', 'javascript']
console.log(newWords);//['javascript']

//otro ejemplo:

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: false,
    },
];

/*
const deliver = orders.filter(item => item.delivered)
console.log(orders);
//true:
console.log(deliver);
0: {customerName: 'Nicolas', total: 60, delivered: true}
1: {customerName: 'Santiago', total: 180, delivered: true}
*/

const deliver = orders.filter(item => item.delivered && item.total >= 100)
console.log(orders);
//true:
console.log(deliver);
/*
0: {customerName: 'Santiago', total: 180, delivered: true}
*/

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

//Otro ejemplo:

/*
Convertir:

let nombres = ["Emmanuel", "Jose", "Paco", "Toño", "Ulises"];

for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
*/

let nombres = ["Emmanuel", "Jose", "Paco", "Toño", "Ulises"];

nombres.forEach(nombre => console.log(nombre));

//Otro ejemplo:

let names = ["anna", "isis", "hannah", "bob", "otto"];

names.forEach(name => {
    console.log(name + " is the best");
});
/*
ana is the best
VM60:4 dave is the best
VM60:4 hannah is the best
VM60:4 bob is the best
VM60:4 otto is the best
*/

//Otro ejemplo:
let lenguajes = new Array("php", "js", "java", "c#", "c", "pascal", "go");

lenguajes.forEach((elemento, index , data) => {
    console.log(data);
    console.log(`${index}: ${elemento}`);
});

//Metodos para recorrer el contenido del array:

//Some: De igual forma regresa una validacion de verdadero o falso para articulos que cumplan cone sa validacion:

let cheapTelevisions = televisions.some(function(television){
    return television.cost <= 15000;
});

console.log(cheapTelevisions);//true

//Otro ejemplo:

let precios = [10, 15, 20, 30, 45, 70, 100];

let busqueda = precios.some(precio => precio < 100);
console.log(busqueda);//true

//Manipular arreglos con push()

/*
Una manera fácil de agregar datos al final de una matriz es a través de la push()función.

.push()toma uno o más parámetros y los "empuja" al final de la matriz.

Ejemplos:
*/

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

/*
arr1ahora tiene el valor [1, 2, 3, 4]y arr2tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].
*/

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

//Manipular matrices con shift ()

/*
pop()siempre elimina el último elemento de una matriz.
¿Qué sucede si desea eliminar el primero?

Ahí es donde .shift()entra en juego. Funciona igual que .pop(), excepto que elimina 
el primer elemento en lugar del último.

Ejemplo:
*/

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

/*
removedFromOurArraytendría un valor de la cadena Stimpsony ourArraytendría ["J", ["cat"]].
*/

/**
 * Shift: Ahora pasemos a la otra cara de la moneda donde necesitamos 
 * eliminar un elemento del array. .shift() eliminar el primer elemento 
 * de un array, es decir, elimina el elemento que esté en el índice 0.
 */

//Creamos el array
let array = [1,2,3,4,5];
console.log(array);

// Aplicamos .shift()
let shiftArray = array.shift();

//Revisamos. El output debe de ser [2,3,4,5]
console.log(array);

//Manipular matrices con unshift()

/*
No sólo puede shiftsacar elementos del principio de una matriz, sino que también puede 
unshiftagregar elementos al principio de una matriz, es decir, agregar elementos 
delante de la matriz.

.unshift()funciona exactamente igual que .push(), pero en lugar de agregar el 
elemento al final de la matriz, unshift()agrega el elemento al principio de la matriz.
*/

const myArray = ["Stimpson", "J", "cat"];
myArray.shift();
myArray.unshift("Happy");

/*
Después de shift, ourArraytendría el valor ["J", "cat"].
Después de unshift, ourArraytendría el valor ["Happy", "J", "cat"].
*/

// Manipular arreglos con pop()

/*
Otra forma de cambiar los datos en una matriz es con la .pop()función.
.pop()se utiliza para extraer un valor del final de una matriz.
Podemos almacenar este valor extraído asignándolo a una variable.
En otras palabras, .pop()elimina el último elemento de una matriz y devuelve ese elemento.
Cualquier tipo de entrada se puede extraer de una matriz: números, cadenas, incluso matrices anidadas.
*/

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// El primero console.logmostrará el valor 6y el segundo mostrará el valor [1, 4].

//Otro ejemplo:

//Creamos el array
let arrayDos = [1,2,3,4,5]
console.log(arrayDos)

// Aplicamos .shift()
let shiftArrayDos = arrayDos.pop()

//Revisamos. El output debe de ser [1,2,3,4]
console.log(arrayDos)