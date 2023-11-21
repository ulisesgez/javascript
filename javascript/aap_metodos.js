//Metodos para introducir o mostrar texto en la ventana del navegador del Objeto Window:
console.log(window);//Window Object
window.alert('alerta');
window.confirm('confirmación');
window.prompt('aviso');

let alerta = alert("Hola, soy una alerta");//No es necesario guardar el valor en una variable.
let confirmacion = confirm("Hola, soy una confirmación");
let aviso = prompt("Hola, soy un aviso");

console.log(alerta);//undefined
console.log(confirmacion);//true o false
console.log(aviso);//vacio, null o string

//Metodos que nos van a permitir transformar textos:

var numero = 444;
var texto1 = "bienvenido";
var texto2 = "adios";

var dato = numero.toString();//cambiamos el tipo de dato
dato = texto1.toUpperCase();//cambiamos el texto a mayusculas
dato = texto2.toLocaleLowerCase();//cambiamos el texto a minusculas
console.log(dato);

//Objeto console y metodos:

console.log(console);//Console Object
console.log(window);//Window Object
console.dir(window);//DOM
console.log(global);
console.log(globalThis);
console.log(document);//Window Object
console.dir(document);

console.log("Soy un mensaje");//Soy un mensaje
console.error("Esto es un error");//Esto es un error
console.warn("Esto es un aviso");//Esto es un aviso
console.info("Mensaje informativo");//Mensaje informativo

let miNombre = "name"
let miApellido = "last name"
let miEdad = 20

console.log(miNombre , miApellido, miEdad);//name last name 20

//Usando comodines:

console.log(`hola mi miNombre es % %s y tengo %d años`, miNombre , miApellido, miEdad);

console.clear();//limpiar todo de la consola

console.group("lista de compras:");
console.log("producto 1");
console.log("producto 2");
console.log("producto 3");
console.log("producto 4");
console.log("producto 5");
console.log("producto 6");
console.log("producto 7");
console.groupEnd();//termina

console.groupCollapsed("lista de compras:");
console.log("producto 1");
console.log("producto 2");
console.log("producto 3");
console.log("producto 4");
console.log("producto 5");
console.log("producto 6");
console.log("producto 7");
console.groupEnd();//termina

console.table(Object.entries(console));//Genenrar fila con entries por cada una de las propiedades del objeto console.
console.table(Object.entries(console).sort);//Ordenar de forma ascendente

//Otros ejemplos con table

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const vocales = ["a", "e", "i", "o", "u"];
const carro = {
    marca: "tesla",
    año: 2022
};

console.table(numeros);
console.table(vocales);
console.table(carro);

//console.timeEnd("Cuanto tiempo tarda mi codigo") aqui vemos un uso de console time
//console.count("Cuantas veces intento mi codigo")

//Para hacer testing, esto no imprime nada por que se cumple:

let x = 1,//Si lo remplazamos por ejemplo con un 3 marca error e imprime el mensaje
    y = 2,
    testXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, {x, y, testXY});

//Objeto Math, Date y sus metodos:

console.log(Math);//Imprime los metodos disponibles del objeto
console.log(Math.PI);//3.1416
console.log(Math.abs(7.8));//Valor absoluto de un numero
console.log(Math.abs(-7.8));//7.8
console.log(Math.ceil(7.8));//Redondea hacia arriba 8
console.log(Math.floor(7.8));//Redondea hacia abajo 7
console.log(Math.round(7.49));//7
console.log(Math.sqrt(81));//Raiz cuadrada 9
console.log(Math.pow(2,5));//Potencia, 2 a la quinta = 32
console.log(Math.sign(-7.8));//Positivo, negativo, cero -1 0 1
console.log(Math.random());//valor aleatorio entre 0 y 1
console.log(Math.random()*1000);//valor aleatorio entre 0 y 1000

console.log(Date);//Imprime varios datos, entre elos la fecha, hora, region

let fecha = new Date();
console.log(fecha.getDate());//Imprime dia del mes.
console.log(fecha.getDay());//Numero del dia de la semana, domingo -> 0.
console.log(fecha.getMonth());//NUmero del mes
console.log(fecha.getFullYear());//Año actual
console.log(fecha.getHours());//Hora de 0 a 24
console.log(fecha.getMinutes());// Minutos
console.log(fecha.getSeconds());// Segundos
console.log(fecha.getMilliseconds());// Milisegundos

//Formas mas humanas:

console.log(fecha.toString());//Imprime la fecha en formato string
console.log(fecha.toDateString());//Imprime la fecha en formato string
console.log(fecha.toLocaleString());//Imprime la fecha en formato string
console.log(fecha.toLocaleDateString());//Imprime la fecha en formato string
console.log(fecha.toLocaleTimeString());//Imprime la fecha en formato string
console.log(fecha.getTimezoneOffset());//Imprime la fecha en formato string

//Metodos para busqueda:
let textoUno = "uno, dos, tres, cuatro, cinco, seis, siete, ocho";
let textoDos = "uno, dos, tres, cuatro, cinco, seis, tres, ocho";

let busquedaUno = textoUno.indexOf("seis");//marca la posicion en la que se encuentra
console.log(busquedaUno);

let busquedaDos = textoDos.lastIndexOf("tres");//marca la posicion en la que se encuentra el ultimo
console.log(textoDos);

let busquedaTres = textoDos.search("tress");//manda -1 si es que no le encuentra
console.log(busquedaTres);

let busquedaCuatro = textoUno.match(/tres/g);//devuelve array de los resultados que encuentra
console.log(busquedaCuatro);

let busquedaCinco = textoUno.substring(5, 10);//devuelve cadena de texto a partir de un rango
console.log(busquedaCinco);

let busquedaSeis = textoUno.charAt(5);//devuelve caracter partir de un rango
console.log(busquedaSeis);

let busquedaSiete = textoDos.includes("cinco");//devuelve true o false si encuentra la busqueda
console.log(busquedaSiete);

//Metodos para reemplazar:
let texto = "uno, dos, tres, cuatro, cinco, seis, siete, ocho, noSoyNumber";
let textoTrim = "    uno, dos, tres, cuatro   ";

let reemplazoUno = texto.replace("noSoyNumber", "nueve");//reemplaza primer valor por el segundo
console.log(reemplazoUno);

let reemplazoDos = texto.slice(14, 22);//Recorta string
console.log(reemplazoDos);

let reemplazoTres = texto.split();//Lo mete a un array
console.log(reemplazoTres);

let reemplazoCuatro = texto.split(" ");//Un array separado
console.log(reemplazoCuatro);

let reemplazoCinco = textoTrim.trim();//quita espacios por delante y por detras
console.log(reemplazoCinco);

//Metodos para separar:
let textoSplit = "uno, dos, tres, cuatro, cinco, seis, siete, ocho";

let separarUno = textoSplit.split(",");//Lo mete a un array

console.log(separarUno);

//Metodos para unir:
let textoJoin = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho"];

let unirUno = textoJoin.join();//Lo mete a un array

console.log(unirUno);

//Metodos para cortar:
let textoSlice = "uno, dos, tres, cuatro, cinco, seis, siete, ocho";

let cortarUno = textoSlice.slice(5);//Lo mete a un array

console.log(cortarUno);

//Metodos en arrays y objetos:


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

lenguajes.forEach((element, index , data) => {
    console.log(data);
    console.log(`${index}: ${element}`);
});

//Otro ejemplo:
//forEach() es un método que nos permite ejecutar una función por cada elemento de un array.
//Esto nos imprimira el array completo en cada iteracion:
let juegos = ["Mario", "Zelda", "Metroid", "Chrono"];
juegos.forEach((elemento, indice, arreglo) => {
  console.log(arreglo);
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