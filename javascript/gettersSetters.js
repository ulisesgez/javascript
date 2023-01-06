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
        this.raza = null;
    }
    /* No se usa por eso getters y setters
    modificarRaza(){
        this.raza = "otra";
    } */
    //modificamos valor:
    set setRaza(newName){
        this.raza = newName;
    }
    //obtener valor:
    get getRaza(){
        return this.raza;
    }
}

//No podemos llamar a un objeto igual a la clase

const perro = new Perro("perro", 5, "marron", "doberman")
const gato = new Animal("gato", 6, "negro");
const pajaro = new Animal("pajaro", 7, "verde");

Perro.setRaza = "Pedro";//Pedro, buen setter
document.write(perro.getRaza);//pedro