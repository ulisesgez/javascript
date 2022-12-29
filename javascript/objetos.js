/**
 * Objeto: Algo fisico al paradigma de javascript
 */
// detalleAuto es un metodo de objeto
let auto = {
    marca: "toyota",
    modelo: "Corolla",
    anio: 2020,
    detalleAuto: function(){
        console.log(`Auto: ${this.modelo} ${this.anio}`);
    }
};

console.log(auto);

//Queremos algo especifico?

console.log(auto.marca);

//Entrar a el metodo, que es la funcion que esta dentro del objeto:

console.log(auto.detalleAuto());
