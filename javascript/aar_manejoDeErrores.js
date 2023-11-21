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
    console.log(numero * numero);//100
} catch (error){
    console.log(`se produjo el siguiente error : ${error}`);//se produjo el siguiente error : Error: El caracter introducido no es un numero
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
    console.log('Esto es un error');//Esto es un error
}

//fromentries:
/*Object punto entries ahora ademas de convertir un objeto en un array de arrays,
vamos a poder hacer tambien un cambio inverso, pasar de un array de arrays a un objeto.
*/

const entries = new Map([['name', 'ulises'], ['age', '24']]);
console.log(entries);//Map(2) {'name' => 'ulises', 'age' => '24'}
console.log(Object.fromEntries(entries));//{name: 'ulises', age: '24'}

/*
Debugging:
Dentro de JavaScript los errores van a ser tus mejores amigos, por lo que debes
aprender a lidiar con estos mediante técnicas como el debugging.
Debugging es el proceso de encontrar y corregir errores en el código.
Es una parte importante del desarrollo de software y es esencial para garantizar
que el código funcione correctamente. En JavaScript, hay varias herramientas y
técnicas disponibles para ayudar en el debugging y manejo de errores.

Una de las herramientas más comunes para manejar errores en JavaScript es el bloque
try-catch. Este bloque permite ejecutar código que podría generar un error, y capturar
ese error en caso de que ocurra. Por ejemplo:
*/
try {
    //Codigo que podria generar un error
} catch (error) {
    //Codigo que maneja el error
}
/*
El bloque try-catch permite ejecutar código que podría generar un error de
forma segura, y capturar el error para poder manejarlo de manera adecuada.
Por ejemplo, si se está tratando de dividir un número por cero, se puede capturar
el error y mostrar un mensaje de error al usuario en lugar de tener que detener
el programa.
La forma más común de manejar errores es a través de la sentencia throw new Error.
La sentencia throw se utiliza para generar una excepción o error en tiempo de ejecución,
y new Error crea un nuevo objeto de error con un mensaje personalizado.
Este mensaje es útil para proporcionar información sobre el error y para facilitar la
solución de problemas.
Aquí hay un ejemplo de código que muestra cómo utilizar throw new Error para generar
un error y capturarlo con un bloque try-catch:
*/
try{
    const num = 100;
    if (num > 50) {
        throw new Error(`${num} es mayor que 50`);
    }
} catch (error) {
    console.log(error);
}
/*
En este ejemplo, si el número num es mayor a 50, se lanzará una excepción con el
mensaje "El número es mayor a 50". El bloque catch capturará el error y lo imprimirá
en la consola.
Es importante tener en cuenta que el manejo de errores con throw new Error solo se
recomienda para errores en tiempo de ejecución y no para errores de sintaxis.
Otra herramienta útil para el debugging en JavaScript es el comando “debugger”.
Este comando se utiliza para detener la ejecución del código en un punto específco,
lo que permite inspeccionar variables y entender el estado del programa en ese momento.
Por ejemplo:
*/
let otroNumero = 100;
debugger;
let otroNumeroMas = otroNumero / 2;
/*
En este ejemplo, la ejecución del código se detiene en la línea con “debugger” y
se pueden inspeccionar las variables y entender el estado del programa en ese momento
(puedes ejecutar este código desde la consola del navegador y ver que pasa 👀).
La consola de JavaScript también es una herramienta útil para el debugging.
La consola proporciona varios comandos para inspeccionar el código y entender
el estado del programa. Por ejemplo, el comando “console.log()” permite imprimir
valores en la consola para inspeccionarlos, el comando “console.table()” permite
ver los valores de un objeto o array en forma de tabla, entre otros.
*/