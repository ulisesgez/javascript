/*
XmlHttpRequest:
Es un objeto que nos permite intercambiar datos entre el cliente y el servidor, 
es la base de Ajax.

Funciones anonimas autoejecutables:
*/
(() => {
    const xhr = new XMLHttpRequest(),//instanciael objeto XMLHttpRequest
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    //console.log(xhr);//XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    
    //Con readystatechange se lanza cuando detecta cualquier cambio de estado:
    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;//No retorna nada si no esta en 4
        //console.log(xhr);
        if(xhr.status >= 200 && xhr.status <300) {
            console.log("done");
            //console.log(xhr.responseText);//imprime todo el codigo del json en consola
            //Convertir
            let $json = JSON.parse(xhr.responseText);
            //console.log($json);//Luego de convertir de json a object lo imprimos en consola.

            $json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.id} -- ${el.title}`
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment)
        } else {
            console.error("error");//Con esto solo lo sabemos por consola, asi que:
            let message = xhr.statusText || "error";
            $xhr.innerHTML = `error ${xhr.status}: ${message}`;
        }
    });
    xhr.open("GET", "https://api.escuelajs.co/api/v1/products");//abrir peticion, establecer metodo y recurso, url o endpoint 
    xhr.send();//Enviar peticion.
})();