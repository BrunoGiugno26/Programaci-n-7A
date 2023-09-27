//Manejo de estructuras de mayor tamaño:

import {users} from "./users";

//*users.js es como una base de datos (siendo esto un gran ARRAY)

users.forEach(user => user.company);

const new_user = {
    id: 11,
    name: "Bruno",
    username: "Bruno26",
    phone: "2612445460"
}

users.push(new_user)

users.forEach(user => user);

//* Agregarle el PAIS a mi user cuyo id es 1

users[1].address["country"] = "France"

users[1].address

//* Muchas veces es mas sencillo crear un objeto, y agregarlo dentro de los objetos/arrays que ya contengan una propiedad.
const pais = {country: "Argentina"}

const ubicacion_user = users[1].address

//ubicacion_user

//* Para esto vamos a utilizar un metodo llamado DESTRUCTURING: nos permite desarmar un objeto o array y utilizar los elementos por separados

users[1].address = {...users[1]["address"],...pais}

users[1].address

const new_user_2 = {
    id: 12,
    name: "Ellie",
    username: "EllieKiddo21",
    phone: "7213217"
}

users.push(new_user_2)

users[11]

const country = {country: "United states"}

users[11] = {...users[11],...country}

users[11]

//ARRAY DE CANCIONES

const playlist = {songs: []}

const song_1 = {name:"Stand by me", artist:"Oasis"}
const song_2 = {name:"Cementerio Club", artist:"Pescado Rabioso"}
const song_3 = {name:"Future Days", artist: "Pearl Jam"}

playlist.songs = [...playlist.songs, song_1]
playlist.songs = [...playlist.songs, song_2]
playlist.songs = [...playlist.songs, song_3]

//*ARCA DE NOE:

const animales_selva = ["Monos","Jirafas"]
const animales_desierto = ["Camellos","Serpientes"]
const animales_africa = ["Elefante","zebra"]
const animales_asia = "koala"

// FUCION DE ARRAYS: Metodo de concatenacion (CONCAT)

//const arca_noe = animales_selva.concat(animales_desierto,animales_africa)

// El mismo resultado pero con metodo diferente utilizando DESTRUCTURING:

const arca_noe = [... animales_africa, ...animales_selva, ...animales_desierto,animales_asia]

//*DESTRUCTURING: basicamente lo que hace es eliminar los simbolos que se obtiene tanto de un array ([""]) o de un objeto ({propiedad:""}) para transformarlo todo en una sola variable y asi poder agregar algo mas ya sea una variable array u objeto mas.

//*AGREGARLE AL USER 11 MAS DATOS

const datos_user = {Horse: "Shimmer", Ocupation: "Patrol", Hobby: "Guitar"}

users [11] = {...users[11],...datos_user}

//! RECORDAR SIEMPRE DESESTRUCTURAR LO QUE NECESITAMOS!!

const datos = {nombre: "Roberto", apellido: "Edquelfort"}
const domicilio = {domicilio: "La plata", altura: "1162"}
const laboral = {Profecion: "Peluquero", experiencia: "30 años"}

const user = {...datos,...laboral,...domicilio}
user

//HOMEWORK: DESTRUCTURING:

/*
CREAR TRES ARRAYS Y MEDIANTE DESTRUCTURING Y CREAR UN UNICO ARRAY CON TODOS ESOS ELEMENTOS.

CREAR TRES OBJETOS, EN EL CUAL TODOS TENGAN 2 PROPIEDADES. CADA OBJETO DEBE TENER PROPIEDADES DISTINTAS. LUEGO USANDO DESTRUCTURNG, CREAR UN NUEVO OBJETO QUE CONTENGA TODAS LAS PROPIEDADES.
*/

//Homework 1:

const guitarras_marcas = ["Epiphone","Fender","Yamaha"]
const bajos_marcas = ["Gibson","Ibanez","Rickenbacker"]
const baterias_marcas = ["Mapex","Pearl","Gretsch"]

const intrumentos = [...guitarras_marcas, ...bajos_marcas, ...baterias_marcas]
intrumentos

//Homework 2:

const serie_ficcion = {Nombre: "Strange Things", Temporadas: "4"}
const estreno = {Primer_capitulos: "2015", numeros_capitulos: "12"}
const protagonista = {Personaje_Principal: "Eleven", Actriz: "Mille Bobby Brown"}


const serie = {...serie_ficcion,...protagonista,estreno}
serie
