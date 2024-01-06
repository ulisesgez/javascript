/*
Fetch:
Es una funcion/interfaz que nos permite hacer peticiones http desde javascript

Fetch recibe dos parametros:
1.- La url de la api
2.- Un objeto con las opciones de la peticion

Fetch devuelve una promesa que resuelve en un objeto de tipo response

Response:
Es un objeto que representa la respuesta de la peticion http

Response.ok:
Es una propiedad booleana que nos indica si la peticion fue exitosa o no

Response.status:
Es una propiedad entera que nos indica el status de la peticion

Response.statusText:
Es una propiedad string que nos indica el mensaje de la peticion

Response.url:
Es una propiedad string que nos indica la url de la peticion

Response.text():
Es un metodo que nos permite obtener el cuerpo de la respuesta en texto plano

Response.json():
Es un metodo que nos permite obtener el cuerpo de la respuesta en formato json

Response.blob():
Es un metodo que nos permite obtener el cuerpo de la respuesta en formato binario

Response.clone():
Es un metodo que nos permite clonar la respuesta

Response.redirect():
Es un metodo que nos permite redireccionar la respuesta

Response.arrayBuffer():
Es un metodo que nos permite obtener el cuerpo de la respuesta en formato buffer

Response.formData():
Es un metodo que nos permite obtener el cuerpo de la respuesta en formato formdata

Response.headers():
Es un metodo que nos permite obtener las cabeceras de la respuesta

Response.trailer():
Es un metodo que nos permite obtener el trailer de la respuesta

Response.type():
Es un metodo que nos permite obtener el tipo de la respuesta

Response.body():
Es un metodo que nos permite obtener el cuerpo de la respuesta

Response.bodyUsed():
Es un metodo que nos permite obtener el cuerpo de la respuesta
*/
(() => {
    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();
    
    fetch("https://api.escuelajs.co/api/v1/products")
    /*
    .then(res => {
        console.log(res);
        return res.ok?res.json():Promise.reject(res);
    })
    Optimizando el codigo:
    */
    .then((res) => res.ok?res.json():Promise.reject(res))
    .then(json =>{
        console.log(json);
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.id} -- ${el.title}`
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment)
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "error";
            $fetch.innerHTML = `error ${err.status}: ${message}`;
    })
    .finally(() => {
        console.log("se ejecuta independientemente de el resultado de la promesa")
    });
})();