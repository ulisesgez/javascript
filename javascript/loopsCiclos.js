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