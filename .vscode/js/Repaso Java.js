//? REPASO DE TODO LOS CONTENIDOS VISTO EN JAVASCRIPT (PARTE PRACTICA)

//Array tradicional:
const array = ["camote","papa","bergamota","zapallo"]
array.push("zanahoria")
array.unshift("lechuga")
array.shift()
let lista_verdura = array.length

//Objeto tradicional:

let ususario = {nombre:"ricardo",edad:"25",estado_civil:"Soltero"}
ususario.direccion = "La plata 1162"
delete ususario["estado_civil"]

//*Objeto que tiene array:
const user = {nombre:"Chichilote",edad: 34, genero:"daun", mascotas: ["titi","pipi","lolo"]}

//*Array que contiene objeto:

const musica =[
    {cancion:"Slide Away",
    banda:"Oasis"},

    {cancion:"In A little While",
    banda:"U2"},
    {cancion:"Last Kiss",
    banda:"Pearl Jam"}
]

musica[0]
