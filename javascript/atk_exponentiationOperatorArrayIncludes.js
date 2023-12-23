/*

*/
//Poptencia:
const data = 3 ** 4;
console.log(data);//81

//Array includes:
//Nos va a permitir trabajar sobre un array y saber si esta ahi un elemento:

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(4));//true
console.log(numbers.includes(9));//false

const list = ['ulises', 'oscar', 'david'];
console.log(list.includes('ulises'));//true
console.log(list.includes('Ulises'));//false