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

console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());