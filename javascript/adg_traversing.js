/*
Traversing:
Es el recorrido entre los distintos elementos del DOM, es decir,
como podemos ir de un elemento a otro.
*/
//Recorrer elementos tomando como referencia un nodo:
const $cards = document.querySelector(".cards");
console.log($cards);//Devuelve la section con la clase cards
//referencia a sus hijos:
console.log($cards.children);//Son cada una de las figures que tienen la clase card
//acceder a un hijo en particular:
console.log($cards.children[2]);//Acceder al tercer elemnto
//Padre de cards:
console.log($cards.parentElement);//Retorna el padre, body
console.log($cards.parentNode);//Retorna el padre, tambien es body
//Obtener ultimo y primer elemnto hijo:
console.log($cards.firstChild);//#text, hace referencia a una tabulacion o salto de linea:
/*
Los espacios tambien son nodos.
<section class="cards">
        <figure class="card">
Para que sea figure debe ser asi:
<section class="cards"><figure class="card">
console.log($cards.firstChild);//Ahora si es el primer hijo es figure: <figure class="card"> <img src="https://placeimg.com/200/200/tech" alt="Tech"> <figcaption>Tech</figcaption> </figure>
*/
//Ahora bien con esto si podemos ver a figure:
console.log($cards.firstElementChild);//Ahora si es el primer hijo es figure y no el salto de linea o tabulacion: <figure class="card"> <img src="https://placeimg.com/200/200/tech" alt="Tech"> <figcaption>Tech</figcaption> </figure>
console.log($cards.lastChild);//#text
console.log($cards.lastElementChild);//<figure class="card"> <img src="https://placeimg.com/200/200/nature" alt="Nature"> <figcaption>Nature</figcaption> </figure>
//Hermanos:
console.log($cards.previousSibling);//#text, espacio o identacion
console.log($cards.previousElementSibling);//Es el enlace: a
console.log($cards.nextSibling);//#text
console.log($cards.nextElementSibling);//Es el script: js
//Buscar ansestro, PADRE MAS CERCANO:
console.log($cards.closest("div"));//null, no hay div como ansestro
console.log($cards.closest("body"));//<body>...</body>, retorna el body
//La section ansestro mas cercana:
console.log($cards.children[3].closest("section"));//<section class="cards">...</section>