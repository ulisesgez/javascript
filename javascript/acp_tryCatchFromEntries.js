/*
Manejo de errores:
*/

//try catch:
try {
    hello();//probar algo, funcion , logica, etc ... no existe hello
} catch (error) {//entrega error
    console.log(error);//En caso de error
}

try {
    anotherFunction();
    //No pasamos error, lo ideal es manejar el error, nos da mas datos.
} catch {
    console.log('Esto es un error');
}

//fromentries:
/*Object punto entries ahora ademas de convertir un objeto en un array de arrays,
vamos a poder hacer tambien un cambio inverso, pasar de un array de arrays a un objeto.
*/

const entries = new Map([['name', 'ulises'], ['age', '24']]);
console.log(entries);//Map(2) {'name' => 'ulises', 'age' => '24'}
console.log(Object.fromEntries(entries));//{name: 'ulises', age: '24'}