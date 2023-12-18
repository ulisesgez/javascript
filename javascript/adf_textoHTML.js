/*
Texto HTML con Javascript:
Para modificar el texto de un elemento HTML, tenemos varias opciones, las cuales son:
- innerText
- textContent
- innerHTML
- outerHTML
*/

//Modificar texto:
const $whatIsDom = document.getElementById("que-es");
console.log($whatIsDom);
/*
Esto se imprime en consola:
<p id="que-es">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda, ipsum accusantium fuga recusandae, id officiis fugit asperiores nam sequi odio natus provident quas voluptatum ipsa. Ducimus laboriosam ad et.</p>
*/

let text = `
<p>Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).</p>
<p>Cuando comenzamos en el mundo del desarrollo web, normalmente comenzamos por aprender a escribir etiquetado o marcado HTML y además, añadir estilos CSS para darle color, forma y algo de interacción. Sin embargo, a medida que avanzamos, nos damos cuenta que en cierta forma podemos estar bastante limitados.</p>
<p>Si únicamente utilizamos HTML/CSS, sólo podremos crear páginas «estáticas» (sin demasiada personalización por parte del usuario), pero si añadimos Javascript, podremos crear páginas «dinámicas». Cuando hablamos de páginas dinámicas, nos referimos a que podemos dotar de la potencia y flexibilidad que nos da un lenguaje de programación para crear documentos y páginas mucho más ricas, que brinden una experiencia más completa y con el que se puedan automatizar un gran abanico de tareas y acciones.</p>
`;
//Modificar el texto con innerText, este no es parte del estandar:
$whatIsDom.innerText = text;
console.log($whatIsDom);

/*
Esto es lo que imprime en la pantalla, no en consola:
<p>Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).</p>
<p>Cuando comenzamos en el mundo del desarrollo web, normalmente comenzamos por aprender a escribir etiquetado o marcado HTML y además, añadir estilos CSS para darle color, forma y algo de interacción. Sin embargo, a medida que avanzamos, nos damos cuenta que en cierta forma podemos estar bastante limitados.</p>
<p>Si únicamente utilizamos HTML/CSS, sólo podremos crear páginas «estáticas» (sin demasiada personalización por parte del usuario), pero si añadimos Javascript, podremos crear páginas «dinámicas». Cuando hablamos de páginas dinámicas, nos referimos a que podemos dotar de la potencia y flexibilidad que nos da un lenguaje de programación para crear documentos y páginas mucho más ricas, que brinden una experiencia más completa y con el que se puedan automatizar un gran abanico de tareas y acciones.</p>
*/

//Modificar el texto con textContent:
$whatIsDom.textContent = text;
console.log($whatIsDom);

/*
Quito identaciones y no esta interpretando las etiquetas html:
<p>Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).</p> <p>Cuando comenzamos en el mundo del desarrollo web, normalmente comenzamos por aprender a escribir etiquetado o marcado HTML y además, añadir estilos CSS para darle color, forma y algo de interacción. Sin embargo, a medida que avanzamos, nos damos cuenta que en cierta forma podemos estar bastante limitados.</p> <p>Si únicamente utilizamos HTML/CSS, sólo podremos crear páginas «estáticas» (sin demasiada personalización por parte del usuario), pero si añadimos Javascript, podremos crear páginas «dinámicas». Cuando hablamos de páginas dinámicas, nos referimos a que podemos dotar de la potencia y flexibilidad que nos da un lenguaje de programación para crear documentos y páginas mucho más ricas, que brinden una experiencia más completa y con el que se puedan automatizar un gran abanico de tareas y acciones.</p>
*/

//Modificar el texto con innerHTML:
$whatIsDom.innerHTML = text;
console.log($whatIsDom);

/*
Si se renderiza como codigo html:
Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

Cuando comenzamos en el mundo del desarrollo web, normalmente comenzamos por aprender a escribir etiquetado o marcado HTML y además, añadir estilos CSS para darle color, forma y algo de interacción. Sin embargo, a medida que avanzamos, nos damos cuenta que en cierta forma podemos estar bastante limitados.

Si únicamente utilizamos HTML/CSS, sólo podremos crear páginas «estáticas» (sin demasiada personalización por parte del usuario), pero si añadimos Javascript, podremos crear páginas «dinámicas». Cuando hablamos de páginas dinámicas, nos referimos a que podemos dotar de la potencia y flexibilidad que nos da un lenguaje de programación para crear documentos y páginas mucho más ricas, que brinden una experiencia más completa y con el que se puedan automatizar un gran abanico de tareas y acciones.
*/
//Modificar el texto con outerHTML:
//Mientras que innerHTML reemplaza el contenido html del elemento dom, lo que hace outerHTML
//es reemplazar en este caso $whatIsDom por el contenido que tengamos en text, visualmente
//las etiquetas p se ven independientes y el id que-es desaperece.
$whatIsDom.outerHTML = text;
console.log($whatIsDom);