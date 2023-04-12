//Flat:

const arr = [1 ,2 ,3, 4, 5, 6, [7 ,8, 9, [1, 2, 3]]];
//Aplanar para obtener una mejor estructura:
console.log(arr.flat(3));//3, es la profundidad
//Se muestra asi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]

//Flatmap:

const arr2 = [1, 2, 3, 4, 5, 6]
console.log(arr2.flatMap(v => [v, v * 2]));//Multiplica por 2
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 6, 12]

//trimstart:

const hello = '      hellowWorld!   '
console.log(hello.trimStart());
//hellowWorld!   | quita espacios al inicio
console.log(hello.trimEnd());
//      hellowWorld!| quita espacios al final

/*
La siguiente versión de ECMAScript fue publicada en 2019. A continuación aprenderás sobre
aplanamiento de arrays y eliminar espacios en blanco de un string.
Qué es el aplanamiento de arrays
El aplanamiento consiste en transformar un array de arrays a una sola dimensión.
Los métodos flat y flatMap permitirán realizar el aplanamiento.
Método flat
El método flat devuelve un array donde los sub-arrays han sido propagados hasta una
profundidad especificada.
Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia
el array original. Este método recibe un argumento:
La profundidad del aplanamiento, por defecto, tiene un valor de 1.
Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.
*/
const array = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
¿Qué hace el .map()? TRANSFORMAR.

.map() es INMUTABLE por lo tanto no modifica el array original, sino que crea
uno nuevo con la “transformación” aplicada.
.
Además, mantienes el mismo length que el array original, te devuelve en el nuevo
array la misma cantidad que el array que le aplicaste el método.
*/

const letras = ['a', 'b', 'c'];

const letrasMap = letras.map(item => item + '++');
console.log('antes: ', letras);// ['a', 'b', 'c']
console.log('despues', letrasMap);//['a++', 'b++', 'c++']

//Otro ejemplo:

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
      delivered: true,
    },
  ];
  
  console.log('antes: ', orders);
  const total = orders.map(item => item.total)
  console.log('despues', total);//[60, 120, 180, 240]

  const nuevoCampo = orders.map((item) => {
    return {
        ...item,
        tax: .19
    }
  })
  console.log(nuevoCampo);
/*
0: {customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19}
1: {customerName: 'Zulema', total: 120, delivered: false, tax: 0.19}
2: {customerName: 'Santiago', total: 180, delivered: true, tax: 0.19}
3: {customerName: 'Valentina', total: 240, delivered: true, tax: 0.19}
*/
  console.log(orders);

/*
Método flatMap
El método flatMap es una combinación de los métodos map y flat. Primero realiza la
iteración de los elementos del array (como si fuera map), y después los aplana en
una sola profundidad (como si fuera flat).
Este método es inmutable, es decir, retorna un nuevo array con los cambios y no
cambia el array original.
Este método recibe los mismos argumentos que el método map.
*/
const strings = ["Nunca pares", "de Aprender"]
strings.map(string => string.split(" ")) 
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]
strings.flatMap(string => string.split(" ")) 
// [ 'Nunca', 'pares', 'de', 'Aprender' ]

const numbers = [1,2, 3, 4]
numbers.map(number => [number * 2]) 
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]

// Cuidado, primero hace el map y luego el flat
const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2]) 
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number

/*
Eliminar espacios en blanco de un string
Existen tres métodos para eliminar espacios en blanco de un string:
El método trim elimina los espacios en blanco al inicio y al final.
El método trimStart o trimLeft elimina los espacios al inicio.
El método trimEnd o trimRight elimina los espacios al final.
const saludo = "      hola      "
const result1 = saludo.trim()
const result2 = saludo.trimStart()
const result3 = saludo.trimEnd()

result1 // 'hola'
result2 // 'hola      '
result3 // '      hola'
*/

/*
REDUCE, como lo dice su nombre reduce a un solo valor y no devuelve otro array,
simplemente un valor.
Se utiliza muchísimo para hacer cálculos a partir de la información de un array.
En su composición, a primeras, tiene como argumentos de la función del primer
parámetro, al acumulador y como segundo parámetro al elemento por el que va
iterando el loop. Y como segundo argumento del reduce(), se pasa el valor
inicial del acumulador.
*/
const totales = [1, 2, 3, 4];
let sum = 0;
const reducir = totales.reduce((sum, element) => sum + element, 0)
//acumulado:
console.log(reducir);//10