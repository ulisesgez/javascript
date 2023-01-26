console.log(console);//Console Object
console.log(document);//Window Object
console.log(document);//DOM

console.log("Soy un mensaje");
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Mensaje informativo");

let nombre = "name"
let apellido = "last name"
let edad = 20

console.log(nombre , apellido, edad);

//Usando comodines:

console.log(`hola mi nombre es % %s y tengo %d años`, nombre , apellido, edad);

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