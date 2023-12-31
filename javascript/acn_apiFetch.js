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