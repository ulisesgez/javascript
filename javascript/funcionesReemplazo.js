let texto = "uno, dos, tres, cuatro, cinco, seis, siete, ocho, noSoyNumber";
let textoTrim = "    uno, dos, tres, cuatro   ";

let reemplazoUno = texto.replace("noSoyNumber", "nueve");//reemplaza primer valor por el segundo
console.log(reemplazoUno);

let reemplazoDos = texto.slice(14, 22);//Recorta string
console.log(reemplazoDos);

let reemplazoTres = texto.split();//Lo mete a un array
console.log(reemplazoTres);

let reemplazoCuatro = texto.split(" ");//Un array separado
console.log(reemplazoCuatro);

let reemplazoCinco = textoTrim.trim();//quita espacios por delante y por detras
console.log(reemplazoCinco);