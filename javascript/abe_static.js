/*
Atributos y metodos estaticos:
Los atributos y metodos estaticos son aquellos que no necesitan una instancia
de la clase para ser accedidos.
Para crear un atributo estatico se utiliza la palabra reservada static
seguida del nombre del atributo.
*/
class duck {
    static sound = "quack";
    static quack() {
        console.log(this.sound);
    }
}
console.log(duck.sound); // quack
duck.quack(); // quack