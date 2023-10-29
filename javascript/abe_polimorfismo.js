/*
Polimorfismo: Es la capacidad de un objeto de tomar diferentes formas.
En JavaScript no existe el polimorfismo como tal, pero se puede simular.
*/
class animal{
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
    //polimorfismo:
    ladrar(){
        if(this.especie == "perro"){
            document.write("wof, wof !");
        }else{
            document.write("No puede ladrar ya que es un " + this.especie);
        }
    }
}

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

perro.ladrar();
gato.ladrar();
pajaro.ladrar();

//Relacion con seccion de clases