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
//Agregar otras clases:
$card.classList.add("opacity-80", "sepia");//Se visualiza por estilos
$card.classList.remove("opacity-80", "sepia");//Se pueden remover igual