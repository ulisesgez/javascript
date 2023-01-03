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
    ladrar(){
        alert("wof, wof!")
    }
}

//No podemos llamar a un objeto igual a la clase
let perro = new Perro("perro", 5, "marron", "doberman");
let gato = new Animal("gato", 6, "negro");
let pajaro = new Animal("pajaro", 7, "verde");

perro.verInfo();
perro.ladrar();
gato.verInfo();
pajaro.verInfo();
gato.ladrar();//NO es posible

//Relacion con seccion de clases