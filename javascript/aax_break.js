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


//Diferencia entre break y continue:

const numeros = [1, ,2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
    if (i === 5){
        break;// Imprime esto y no lo demas del 1 al 5, ya que break no saca
    }
    console.log(i);//0 al 9
    console.log(numeros[i]);//1 al 0
}