(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://api.escuelajs.co/api/v1/products"),
            json = await res.json();
            
            console.log(res, json);

            if(!res.ok) throw {status: res.status, statusText: res.statusText};

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.id} -- ${el.title}`
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment)
        } catch(err) {
            console.log(err);
            let message = err.statusText || "error";
            $fetchAsync.innerHTML = `error ${err.status}: ${message}`;
        } finally {
            console.log("se ejecuta independientemente de el resultado de la promesa")
        }
    }
    getData();
})();