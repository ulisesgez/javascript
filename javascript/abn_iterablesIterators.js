/*
Iterables e Iterators:
Iterables: Es un tipo de dato que puede ser recorrido.
Iterators: Es un objeto que contiene un metodo next() que devuelve un objeto con dos propiedades:
value: es el valor del elemento del iterable.
done: es un boolean que nos indica si el iterable tiene mas elementos para recorrer.
Cuando hablamos de un tipo de dato iterable, significa que es una estructura de datos lineal,
que hace que sus elementos sean publicos y se puedan recorrer por ejemplo, arreglos, strings, maps, sets.
*/
const iterable = [1, 2, 3, 4, 5];//iterable es el arreglo
const iterableString = "hola"//iterable es el string
//Accedemos al iterador del iterable:
const iterador = iterable[Symbol.iterator]();

console.log(iterable);//(5) [1, 2, 3, 4, 5]
console.log(iterador);//ArrayIterator
console.log(iterador.next());//{ value: 1, done: false }
console.log(iterador.next());//{ value: 2, done: false }
console.log(iterador.next());//{ value: 3, done: false }
console.log(iterador.next());//{ value: 4, done: false }
console.log(iterador.next());//{ value: 5, done: false }
console.log(iterador.next());//{ value: undefined, done: true }

//Optimizar k,o anterior:

let next = iterador.next();
while(!next.done) {
    console.log(next.value);//1, 2, 3, 4, 5
    next = iterador.next();
}

console.log(iterableString);//StringIterator