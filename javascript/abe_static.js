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

//Métodos estáticos del prototipo Object:
const juan = {
    name: "Juan",
    age: 20,
    approvedCourses: ["Course 1"],
    addCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
};
/*
Asi era como accediamos a la imformacion de un objeto:
juan.addCourse("Course 2");
Ahora vereos como acceder a la informacion de un objeto con metodos estaticos:
*/
Object.keys(juan); // ["name", "age", "approvedCourses", "addCourse"]
Object.getOwnPropertyNames(juan); // ["name", "age", "approvedCourses", "addCourse"]
Object.entries(juan); // [["name", "Juan"], ["age", 20], ["approvedCourses", Array(2)], ["addCourse", ƒ]]
//para verlo:
console.log(Object.entries(juan));//[["name", "Juan"], ["age", 20], ["approvedCourses", Array(2)], ["addCourse", ƒ]]
