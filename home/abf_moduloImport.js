import { NAME, user, sayHi } from "./abe_moduloExport.js";

/*
Import - export:
Import y export son dos conceptos que se introdujeron en ES6 (EcmaScript 6) para
manejar módulos en JavaScript. Antes de ES6, JavaScript no tenía módulos, y el
concepto de import y export no existía. Sin embargo, los módulos han existido
desde hace mucho tiempo en JavaScript, ya que JavaScript está basado en ECMAScript,
y ECMAScript 3 (ES3) ya tenía módulos.

Los programas JavaScript comenzaron siendo bastante pequeños — la mayor parte de
su uso en los primeros días era para realizar tareas de scripting aisladas,
proporcionando un poco de interactividad a tus páginas web donde fuera necesario,
por lo que generalmente no se necesitaban grandes scripts. Avancemos unos años y
ahora tenemos aplicaciones completas que se ejecutan en navegadores con mucho
JavaScript, JavaScript ahora se usa en otros contextos (Node.js, por ejemplo).

Por lo tanto, en los últimos años se ha comenzado a pensar en proporcionar mecanismos
para dividir programas JavaScript en módulos separados que se puedan importar cuando
sea necesario. Node.js ha tenido esta capacidad durante mucho tiempo, y hay una serie
de bibliotecas y marcos de JavaScript que permiten el uso de módulos (por ejemplo,
CommonJS y AMD otros basados en sistemas de módulos como RequireJS, y recientemente 
Webpack y Babel).

La buena noticia es que los navegadores modernos han comenzado a admitir la funcionalidad
de los módulos de forma nativa, y de esto se trata este artículo. Esto solo puede ser
algo bueno — los navegadores pueden optimizar la carga de módulos, haciéndolo más
eficiente que tener que usar una biblioteca y hacer todo ese procesamiento adicional
de lado del cliente, ahorrando viajes de ida y vuelta adicionales.

Exportar características del módulo
Lo primero que debes hacer para acceder a las funciones del módulo es exportarlas.
Esto se hace usando la declaración export.

La forma más sencilla de utilizarla es colocarla delante de cualquier elemento que
desees exportar fuera del módulo, por ejemplo:

export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}
Copy to Clipboard
Puedes exportar funciones, var, let, const y, como veremos más adelante — clases.
Deben ser elementos de nivel superior; no puedes usar export dentro de una función,
por ejemplo.

Una forma más conveniente de exportar todos los elementos que deseas exportar es
usar una sola declaración de exportación al final de tu archivo de módulo, seguida
de una lista separada por comas de las características que deseas exportar entre llaves.
Por ejemplo:

export { name, draw, reportArea, reportPerimeter };
Copy to Clipboard
Importación de características en tu script
Una vez que hayas declarado las funciones y características que deseas exportar de tu módulo,
debes importarlas en tu script para poder usarlas. La forma más sencilla de hacerlo es la
siguiente:

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
Copy to Clipboard
Utiliza la declaración import, seguida de una lista separada por comas de las características 
que deseas importar entre llaves, seguida de la palabra clave from, seguida de la ruta al
archivo del módulo — una ruta relativa a la raíz del sitio, que para nuestro ejemplo de
basic-modules sería /js-examples/modules/basic-modules.

Sin embargo, hemos escrito la ruta de manera un poco diferente — estamos usando la sintaxis
de punto (.) para significar "la ubicación actual", seguida de la ruta más allá del archivo
que estamos tratando de encontrar. Esto es mucho mejor que escribir la ruta relativa
completa cada vez, ya que es más corta y hace que la URL sea portátil — el ejemplo
seguirá funcionando si lo mueve a una ubicación diferente en la jerarquía del sitio.

Así por ejemplo:

/js-examples/modules/basic-modules/modules/square.js
se convierte en

./modules/square.js

Otro ejemplo:
*/
console.log("Modules file");

console.log(NAME);
console.log(user);//ulises
console.log(password);//No se puede acceder a user porque no se exportó ni se importó.
sayHi(user);//Hola ulises