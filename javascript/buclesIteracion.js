// Ejemplo con If, en este caso solo se va sumando de 1 en 1, compara y muestra resultado:
//Imprime 1
let numero = 0;

if (numero < 10) {
    numero++;
    document.write(numero);
}
//Imprime 2
let numerodos = 0;

if (numerodos < 10) {
    numerodos++;
    numerodos++;
    document.write(numerodos);
}

// Ejemplo con While:
//La página no responde, ya que al comparar siempre es menor a 10:
let numerotres = 0;

while (numerotres < 10) {
    document.write(numerotres);
}

// Ahora si no muestra el error:

while (numerotres < 6) {
    numerotres++;
    document.write(numerotres);
}

//Do while:

let numerocuatro = 0;

do {
    numerocuatro++;
    document.write(numerocuatro + "<br>");
}
while (numerocuatro <= 6);