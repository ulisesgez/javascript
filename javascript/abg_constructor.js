function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this. anio = anio;
}

//Construir el objeto:

let nuevoAuto = new auto("Tesla", "Model 3", 2021);

//Para imprimirlo como objeto:

console.log(nuevoAuto);

let nuevoAutoDos = new auto("Tesla", "Model X", 2022);