/**
 * Array: Estructura de datos - lista de datos. Conjunto de datos, alos que despues podemos llamar, estos estan asociados a un indice, el primer elemento se encuentra en la posicion 0
 */
//Ejemplo:
let numeros = ["uno", 2, "tres", 4];

//Mostrar por posisiciones, en este caso se imprimira "uno":
document.write(numeros[0]);

//Tira undefined, por que no esta definido - declarada:
document.write(numeros[4]);

//Push, con esto agremgamos elementos a nuestro array:

let frutas = ["Manzana", "Platano", "Cerezas", "Fresas"];
let masFrutas = frutas.push("Uvas");

//Esto imprime : Manzana, Platano, Cerezas, Fresas, Uvas

//Unshift, con esto agrego mas elementos all inicio de nuestro array:

let automovil = ["uno", "dos", "tres"];
let otroAutomovil = automovil.unshift("cuatro");

//Esto imprime: uno, dos, tres, cuatro

//Pop, con esto eliminamos un elemento al final, para hacerlo al inicio seria con shift:

let ultimo = frutas.pop("Uvas");
document.write(frutas)

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