//Se salta el 12:

for (let i = 0; i < 20; i++){
    if(i == 12) {
        continue;
    }
    document.write(i);
};

//Diferencia entre break y continue:

const numeros = [1, ,2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numeros.length; i++) {
    if (i === 5){
        continue;// Saltamos el numero 6,no se imprime, ya que se encuentra en la posicion 5
    }
    console.log(numeros[i]);//1 al 0
}