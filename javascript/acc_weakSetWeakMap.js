/*
Conjuntos debiles, debiles se refiere a solamnete pueden almacenar referencias debiles,
es decir que las llaves deben ser de tipo objeto.

Tienen algunas craencias, no son iterables, no podemos utilizar el metodo clear,
tampoco podemos verificar su tamaño o size.
*/
//No es posible como un set:
//const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, "hola", "HOLA"]);

const ws = new WeakSet();
let valor1 = { "valor1": 1 };
let valor2 = { "valor2": 2 };
let valor3 = { "valor3": 3 };

ws.add(valor1);
ws.add(valor2);

console.log(ws);

//weak map:
/*
NO es posible:
const wm = new WeakMap()([
    ["nombre", "jesus"],
    ["apellido", "lopez"],
    ["edad", 20],
    [null, "nulo"]
]);
*/

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);

console.log(wm);