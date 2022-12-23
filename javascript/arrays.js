/**
 * Array: Conjunto de datos, alos que despues podemos llamar, estos estan asociados a un indice, el primer elemento se encuentra en la posicion 0
 */
//Ejemplo:
let numeros = ["uno", 2, "tres", 4];

//Mostrar por posisiciones, en este caso se imprimira "uno":
document.write(numeros[0]);

//Tira undefined, por que no esta definido - declarada:
document.write(numeros[4]);

/**
 * Arrays Asociativos: Parecidos al formato json
 */
//Ejemplo:
let pc = {
    nombre: "mypc",
    procesador: "Intel",
    ram: "16GB",
    espacio: "1TB"
};

//Para este caso si queremos mandar a imprimir o tomar un elemento lo hacemos de la siguiente forma:
document.write(pc["nombre"]);

frase = `Nombre de pc: ${nombre}, <br>
        procesador: ${procesador}, <br>
        memoria ram: ${ram}, <br>
        almacenamiento: ${espacio}`

document.write(frase);