class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
}

let perro = new animal("perro", 5, "marron");
let gato = new animal("gato", 6, "negro");
let pajaro = new animal("pajaro", 7, "verde");

document.write(perro);
document.write(perro.color);
console.log(perro);

document.write(perro.info);
document.write(gato.info);
document.write(pajaro.info);