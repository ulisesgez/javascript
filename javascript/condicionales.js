/**
 * Condicionales: Reglas que aplicamos para validar si algo es verdadero o falso y podamos nopsotros generar ciertas acciones con ello.
 */

if (true){
    console.log("hola");//hola
}


if (false){
    console.log("hola");
} else {
    console.log("soy falso");//soy falso
}

//Ahora un ejemplo con 3 diferentes casos:

let edad = 18;

if (edad === 18){
    console.log("Puedes votar, es tu 1ra vez votando");
} else if (edad > 18){
    console.log("Puedes votar");
} else {
    console.log("No puedes votar");
}

//Otro ejemplo:
nombre = "alex";
texto = "tu nombre es ";

if (nombre == "alex") {
    alert(texto + nombre);
}
else if (nombre == "jhon") {
    alert(texto + nombre);
}
else {
    alert("no se quien eres");
}

//operador terneario:

condition ? true : false;

let numero = 1;

let res = numero === 1 ? "soy un 1" : "no soy uno";//soy un 1