/*
|------------------------------------------|
Obtener data:
GET http://localhost:3000/users
Obtener usuario por id:
GET http://localhost:3000/users/1
|------------------------------------------|
Insertar usuario:
POST http://localhost:3000/users
Generarlo segun los campos correspondientes:
{
    "id":30,
    "name":"steve",
    "age":25
}
|------------------------------------------|
Actualizar usuario(especificar con id):
PUT http://localhost:3000/users/1
Generarlo segun los campos correspondientes:
(No es necesario especificar id):
{
    "id":1,
    "name":"carl",
    "age":20
}
|------------------------------------------|
Eliminar usuario(especificar con id):
DELETE http://localhost:3000/users/5

|------------------------------------------|
*/