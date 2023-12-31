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
        console.log("ejcutado independientemente del resultado.");
    })
})();