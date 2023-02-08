let textoUno = "uno, dos, tres, cuatro, cinco, seis, siete, ocho";
let textoDos = "uno, dos, tres, cuatro, cinco, seis, tres, ocho";

let busquedaUno = textoUno.indexOf("seis");//marca la posicion en la que se encuentra
console.log(busquedaUno);

let busquedaDos = textoDos.lastIndexOf("tres");//marca la posicion en la que se encuentra el ultimo
console.log(textoDos);

let busquedaTres = textoDos.search("tress");//manda -1 si es que no le encuentra
console.log(busquedaTres);

let busquedaCuatro = textoUno.match(/tres/g);//devuelve array de los resultados que encuentra
console.log(busquedaCuatro);

let busquedaCinco = textoUno.substring(5, 10);//devuelve cadena de texto a partir de un rango
console.log(busquedaCinco);

let busquedaSeis = textoUno.charAt(5);//devuelve caracter partir de un rango
console.log(busquedaSeis);

let busquedaSiete = textoDos.includes("cinco");//devuelve true o false si encuentra la busqueda
console.log(busquedaSiete);