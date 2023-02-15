/*
Module.js
export function hello() {
    console.log("Hola Mundo")
}

Index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Import</title>
</head>
<body>
    <button id="btn">Click</button>
    <script type="module" src="06-dynamic-import.js"></script>
</body>
</html>

Dynamic-Import.js

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./module.js");
    console.log(module);
    module.hello();
})
*/