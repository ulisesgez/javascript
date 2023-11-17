//globalThis
console.log(window);//En node is not defined, esto es para navegador
console.log(global);//esto es para node
console.log(self);//webworker
/*
globalThis es una variable global que funciona en cualquier contexto.
Es una variable global en toda nuestra aplicacion.
*/
console.log(globalThis);//Contexto global, estandar

//matchall
//filtra una palabra:
const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banan Kiwi, Apple, Orange, etc, etc'

for(const match of fruit.matchAll(regex)) {
    console.log(match);
}

/*
['Apple', 'Apple', index: 19, input: 'Apple, Banan Kiwi, Apple, Orange, etc, etc', groups: undefined]
0: "Apple"
1: "Apple"
*/