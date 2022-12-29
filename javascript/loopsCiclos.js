//Ejemplo con for:

let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (let i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}
/**
 *  Hola, Maria
 *  Hola, Sergio
 *  Hola, Rosa
 *  Hola, Daniel
 */

//Otra forma de crear el saludo:

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (let estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

/**
 *  Hola, Maria
 *  Hola, Sergio
 *  Hola, Rosa
 *  Hola, Daniel
 */

//While:

let frutas = ["Manzana", "Pera", "Uva", "Cereza"];

function comprarFrutas(fruta){
    console.log(`Yo compre ${fruta}`);
}
while (frutas.length > 0){
    let fruta = frutas.shift();
    comprarFrutas(fruta);
}

/**
 *  Yo compre Manzana
 *  Yo compre Pera
 *  Yo compre Uva
 *  Yo compre Cereza
 */