/*
Manejo de errores:
Para manejar errores en javascript tenemos dos herramientas:
try catch y throw.
try catch finally: nos permite ejecutar codigo que podria fallar y en caso de fallar
nos permite manejar el error.
throw: nos permite crear nuestros propios errores.

Try catch finally:
Estructura que nos va a permitir evaluar cietos fragmentos de codigo y cuando halla
algun mensaje de error, se va a capturar en la parte del catch, es una manera de ir
gestionando los errores

try {
    console.log("Se agrega el codigo a evaluar");
} catch (error){
    console.log("captura cualquier error surgido o lanzado en el try");//No se imperime, no hubo error
} finally {
    console.log("se ejecutara siempre al final de un bloque try-catch");
}
*/

try {
    console.log("Se agrega el codigo a evaluar");
    noExiste;
    console.log("Se agrega el codigo a evaluar");//Esto ya no se imprime, va directamente al catch
} catch (error){
    console.log("captura cualquier error surgido o lanzado en el try");//Si se imperime, no se ha declarado noExiste
    console.log(error);//Imprime el error: noExiste is not defined
} finally {
    console.log("se ejecutara siempre al final de un bloque try-catch");
}

//Caso real:

try {
    let numero = 10;//Nos da el resiltado de la multiplicacion en cambio nos genera el eror si le pasamos un string

    if(isNaN(numero)) {
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero * numero);
} catch (error){
    console.log(`se produjo el siguiente error : ${error}`);
}

//Otros ejemplo:
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