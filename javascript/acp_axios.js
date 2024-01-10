/*
Axios
Axios es una librería que nos permite hacer peticiones a servidores externos
desde nuestro código JavaScript. En este reto vamos a utilizar Axios para
hacer una petición a la API de Escuela de JavaScript.
*/
(() => {
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios.get("https://api.escuelajs.co/api/v1/products")
    .then((res) => {
        //console.log(res);
        let json = res.data;
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.id} -- ${el.title}`
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch((err) => {
        //console.log(err.response);
        let message = err.response.statusText || "error";
        $axios.innerHTML = `error ${err.response.status}: ${message}`;
    })
    .finally(() => {
        console.log("Es ejecutado independientemente del resultado.");
    })
})();