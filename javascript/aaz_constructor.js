/*
Constructor: Funcion que se utiliza para crear objetos.
Ejemplo:
*/function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this. anio = anio;
}

//Construir el objeto:
let nuevoAuto = new auto("Tesla", "Model 3", 2021);

//Para imprimirlo como objeto:
console.log(nuevoAuto);//auto {marca: "Tesla", modelo: "Model 3", anio: 2021}
let nuevoAutoDos = new auto("Tesla", "Model X", 2022);
console.log(nuevoAutoDos);//auto {marca: "Tesla", modelo: "Model X", anio: 2022}

//Otro ejemplo:
function persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
let personaUno = new persona("Juan", "Perez", 30);
console.log(personaUno);//persona {nombre: "Juan", apellido: "Perez", edad: 30}
let personaDos = new persona("Maria", "Gomez", 25);
console.log(personaDos);//persona {nombre: "Maria", apellido: "Gomez", edad: 25}