/*
Axios Async Await:
Axios es una librería que nos permite hacer peticiones a servicios externos
de una manera muy sencilla.
*/
(() => {
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();
    async function getData() {
        try {
            let res = await axios.get("https://api.escuelajs.co/api/v1/products"),
            json = await res.data;
            //console.log(res, json);
            json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.id} -- ${el.title}`
            $fragment.appendChild($li);
        });
        $axiosAsync.appendChild($fragment);
        } catch(err) {
            let message = err.response.statusText || "error";
            $axiosAsync.innerHTML = `error ${err.response.status}: ${message}`;
        } finally {
            console.log("finally");
        }
    }
    getData();
})();