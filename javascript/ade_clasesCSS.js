/*
Clases CSS:
En JavaScript, puedes manipular las clases CSS de los elementos HTML utilizando
métodos que permiten agregar, eliminar o alternar clases en los elementos.
Estos métodos te permiten cambiar dinámicamente el estilo de un elemento al
agregar o eliminar clases CSS predefinidas. Los métodos clave para trabajar
con clases CSS en JavaScript son:

Métodos para manipular clases CSS:
classList
El objeto classList proporciona métodos para agregar, quitar y alternar clases
en un elemento.

add(className): Agrega una clase al elemento.
remove(className): Elimina una clase del elemento.
toggle(className): Si la clase existe, la elimina; si no existe, la agrega.

// Obtener un elemento
const miElemento = document.getElementById('miId');

// Agregar una clase al elemento
miElemento.classList.add('nuevaClase');

// Eliminar una clase del elemento
miElemento.classList.remove('otraClase');

// Alternar una clase en el elemento (agrega o elimina según la existencia)
miElemento.classList.toggle('toggleClase');

Acceso directo a la propiedad className
También puedes manipular las clases directamente a través de la propiedad
className del elemento, aunque esta forma es menos flexible ya que requiere
sobrescribir completamente las clases existentes del elemento.

const miElemento = document.getElementById('miId');

// Reemplazar todas las clases existentes con una nueva clase
miElemento.className = 'nuevaClase otraClase';
*/
const $card = document.querySelector(".card");
console.log($card);//Hace referencia a la de Tech
console.log($card.className);//card
console.log($card.classList);//DOMTokenList ['card', value: 'card']
//Evaluar si un elemento tiene una clase en particular
console.log($card.classList.contains("rotate-45"));//false, no la tiene
//Añadir clase con add
$card.classList.add("rotate-45")//La añadimos
console.log($card.classList.contains("rotate-45"));//true, ademas ha rotado la card
console.log($card.className);//card rotate-45
console.log($card.classList);//DOMTokenList(2) ['card', 'rotate-45', value: 'card rotate-45']
//Quitar clase con add
$card.classList.remove("rotate-45")//La quitamos
console.log($card.classList.contains("rotate-45"));//false, la hemos quitado, no hay rotacion.
/*
Ahora usemos un interruptor o toggle, para añadir y quitar:
$card.classList.toggle("rotate-45")//La añadimos
console.log($card.classList.contains("rotate-45"));//true, ademas ha rotado la card
$card.classList.toggle("rotate-45")//La quitamos
console.log($card.classList.contains("rotate-45"));//false, la hemos quitado, no hay rotacion.
*/
//Reemplazar la clase:
$card.classList.toggle("rotate-45")//La añadimos
$card.classList.replace("rotate-45", "rotate-135")//La reemplazamos
console.log($card.className);//card rotate-135
console.log($card.classList.contains("rotate-135"));//true, ademas ha rotado la card
//Agregar otras clases a la vez:
$card.classList.add("opacity-80", "sepia");//Se visualiza por estilos
$card.classList.remove("opacity-80", "sepia");//Se pueden remover igual