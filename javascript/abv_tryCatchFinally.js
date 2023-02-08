/*
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