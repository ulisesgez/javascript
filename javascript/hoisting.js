/**
 * Hoisting: Cuando las variables y las funciones se declaran antes que se procese cualquier tipo de codigo.
 */

console.log(miNombre);

//Declarada e inicializada:

let miNombre = "Ulises";//Imprime undefinied, ya que la mandamos a llamar antes de declararla e inicializarla

//En funciones:
//En este caso imprime hola mi nombre es undefinied:

hey();

function hey(){
    console.log("hola mi nombre es " + nickname);
}

let nickname = "tech";