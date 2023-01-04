/* Es un metodo que no necesita que la clase se defina para poder ser creado:*/
class Animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    //metodo:
    verInfo(){
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    //metodo estatico, por que no se estan usando las propiedades

    static ladrar(){
        alert("wof, wof!")
    }
}

//No podemos llamar a un objeto igual a la clase
let gato = new Animal("gato", 6, "negro");
let pajaro = new Animal("pajaro", 7, "verde");

Perro.ladrar();//wof, wof

//Relacion con seccion de clases