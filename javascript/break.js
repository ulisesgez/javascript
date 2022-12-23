/**
 * Break: Termina el bucle actual, sentecia switch o label y transfiere el control del programa a la siguiente sentencia a la sentecia de terminación de éstos elementos
 */
//Ejemplo:

let numero = 0;

//Podemos observar que se detiene cuando es igial a 10:

while(numero <10000){
    numero++;
    document.write(numero);
    if (numero == 10){
        break;
    };
};