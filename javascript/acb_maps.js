/*
Son objetos que nos sirven para almacenar conjunto de valores asociados a manera de objeto.
*/

let mapa = new Map();

mapa.set("nombre", "ulises");
mapa.set("apellido", "gutierrez");
mapa.set("edad", 35);

console.log(mapa);//Map(3) {'nombre' => 'ulises', 'apellido' => 'gutierrez', 'edad' => 35}

//Saber cuantos elemento tiene nuestor map:
console.log(mapa.size);//3

//Evaluar si existe la llave o no?
console.log(mapa.has("correo"));//false

//Mandar a consola el nombre:
console.log(mapa.get("nombre"));//ulises

//sobreescribir valor:
mapa.set("nombre", "jose");
console.log(mapa.get("nombre"));//jose

//Eliminar elementos de una coleccion:
mapa.delete("apellido");//Solo quedara nombre y edad.

//Recorrer mapa(es un elemento iterable):
for(let [key, value] of mapa) {
    console.log(`Llave: ${key}, valor: ${value}`);
}

//Caracteristica de los maps:

mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});

console.log(mapa);

//Otra forma de inicializar los valores para un mapa:

const mapaDos = new Map()([
    ["nombre", "jesus"],
    ["apellido", "lopez"],
    ["edad", 20],
    [null, "nulo"]
]);

console.log(mapaDos);

const llaves = [...mapaDos.keys()];
const valores = [...mapaDos.values()];

console.log(llaves);
console.log(valores);

//Map: Nos ayudara a mapear ciertos articulos, de igual forma, este metodo nos va a generar un nuevo array, no va a modificar el array que ya tenemos:

let computers = [
    { brand: "apple", cost: 50000 },
    { brand: "dell", cost: 15000 },
    { brand: "samsung", cost: 13000 },
    { brand: "hp", cost: 10000 },
    { brand: "toshiba", cost: 14000 },
    { brand: "lenovo", cost: 18000 },
    { brand: "asus", cost: 25000 }
];

// Con esto le pedimos que nos regrese de todos los articulos el nombre de los articulos:
 
let brandComputers = computers.map(function(computer){
    return computer.brand
});

console.log(brandComputers);