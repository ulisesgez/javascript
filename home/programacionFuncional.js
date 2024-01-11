/*
Programación funcional:
La programación funcional es un enfoque de programación que se centra en el uso de funciones y evita el uso de estado y efectos secundarios. En JavaScript, la programación funcional se basa en el uso de funciones puras, es decir, funciones que no tienen efectos secundarios y siempre devuelven el mismo resultado dado el mismo input.

Una de las características principales de la programación funcional es el uso de first-class functions (funciones como primer ciudadano), es decir, se consideran como valores y pueden ser asignados a variables, pasados como argumentos a otras funciones y retornadas como resultado de otras funciones. Esto permite crear funciones más pequeñas y reutilizables que se pueden combinar para crear funciones más complejas.

Por ejemplo, podemos crear una función “add” que toma dos números como argumentos y devuelve su suma:
*/
function add(x, y) {
    return x + y;
}
/*
Luego, podemos asignar esta función a una variable y pasarla como argumento a otra función, como “makeOperation”:
*/
const operation = add;
function makeOperation(operation, x, y) {
    return operation(x, y);
}
console.log(makeOperation(operation, 2, 3)); // 5

/*
De esta forma, la función “makeOperation” se vuelve más genérica y reutilizable, ya que puede recibir cualquier función que tenga la misma estructura de argumentos.

Otra característica importante de la programación funcional es el uso de funciones puras. Esto significa que las funciones no tienen efectos secundarios y siempre devuelven el mismo resultado dado el mismo input. Esto hace que el código sea más fácil de probar y depurar, ya que no hay efectos secundarios ocultos que puedan afectar el comportamiento del código.

Por ejemplo, la función map() es una función pura ya que toma un array de números como input y devuelve un nuevo array con los números transformados, sin modificar el array original.

*/
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(number){
    return number * 2;
});
console.log(doubles); // [2, 4, 6, 8, 10]

/*
En resumen, la programación funcional es un enfoque de programación que se centra en el uso de funciones y evita el uso de estado y efectos secundarios. En javascript, se puede utilizar programación funcional mediante el uso de funciones como map, reduce, filter, arrow functions y librerías de programación funcional pura, lo cual permite crear código más fácil de probar y depurar.

Higher order functions:
Las Higher-Order Functions son una característica fundamental de la programación funcional en JavaScript. Como lo vimos en clases anteriores estás funciones puras que pueden tomar otras funciones como argumentos y/o devolver funciones como resultados. Esto permite crear funciones más genéricas y reutilizables que pueden ser combinadas de diferentes maneras para crear funciones más complejas.

Una de las características principales de las Higher-Order Functions es su capacidad para manipular otras funciones de manera genérica. Por ejemplo, una función “map” es una Higher-Order Function que toma una función y un array como argumentos, y devuelve un nuevo array con los resultados de aplicar la función a cada elemento del array original.
*/
const myNumbers = [1, 2, 3, 4, 5];
const muDoubles = myNumbers.map(function(number){
    return number * 2;
});
console.log(muDoubles); // [2, 4, 6, 8, 10]
console.log(myNumbers); // [1, 2, 3, 4, 5]
/*
El array original sigue intacto.

Otra característica importante de las Higher-Order Functions es su capacidad para crear funciones más pequeñas y reutilizables. Por ejemplo, una función “filter” es una Higher-Order Function que toma una función y un array como argumentos, y devuelve un nuevo array con los elementos que cumplen con una determinada condición.
*/
const myOtherNumbers = [1, 2, 3, 4, 5];
const myEvenNumbers = myOtherNumbers.filter(function(number){
    return number % 2 === 0;
});
console.log(myEvenNumbers); // [2, 4]