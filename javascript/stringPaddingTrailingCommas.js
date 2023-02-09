//String Padding, trata de rellenar:

const string = 'hello';
console.log(string.padStart(7, 'hi'));//hihello
console.log(string.padStart(5, 'hi'));//hello
console.log(string.padStart(8, 'hi'));//hihhello
console.log(string.padStart(10, 'hi'));//hihihhello
console.log(string.padStart(10, '_'));//_____hello
console.log(string.padStart(6, '_'));//hello_

//Trailing commas:

const arr = [12, 13, 20, 40];

console.log(arr);//[12, 13, 20, 40]
console.log(arr.length);//4

const tc = [12, 13, 20, 40, , , , 45];

console.log(tc);//[12, 13, 20, 40, <3 empty items>, 45]
console.log(tc.length);//8