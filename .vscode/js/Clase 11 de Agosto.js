//?ESTRUCTURAS MULTIDIMENCIONALES

//son tanto arrays como objetos dentro de otros arrays o objetos.Existen diferentes tipos de combinaciones:

//Un array con objetos dentro:

const listas_compras = ["Naranja","Manzana","Sandia"]
const ticket_compra =[
    {
        Producto: "Azucar",
        Cantidad: 2,
        Precio: 450,
    },
    {
        Producto: "Yerba",
        Cantidad: 3,
        Precio: 450,
    },
    {
        Producto: "Fideos",
        Cantidad: 3,
        Precio: 280,
    },
]

listas_compras [0]
listas_compras [2]

ticket_compra [0] 

//un objeto que dentro contiene un ARRAY:

const user = {
    nombre: "Bruno",
    edad: 22,
    mascotas:[
        "Graco",
        "Gio",
        "Teo",
    ],
}

//podemos visualizarlo a travez de dos metodos:

//? DOT NOTATION:

user.nombre
user.edad

//? BRACKET NOTATION:

user ["mascotas"]

//ARRAY conteniendo ARRAY:

const alumnos = [["Bruno",9],["Mati",10],["Ricardo",8]]
alumnos[0]

//OBJETOS conteniendo otros OBJETOS:

const usuario = {
    nombre:"bruno",
    mail:"brunogiugno@gmail.com",
    telefono:"(261)2445460",
    direccion:{
        calle:"La Plata 1162",
        ciudad:"Godoy Cruz",
        provincia:"Mendoza",
        codigoPostal:"5501",
    }
}

usuario.telefono

const userA = ["Bruno","Graco"] // => Array
const userB = { // => Objeto
    Nombre:"Bruno",
    Comida:"Fideos con Tuco",
}

userA[1] // => Array INDICE

userB.Comida // => Objeto DOT NOTATION
userB["Comida"] // => Objeto BRACKET NOTATION

//? ACCESO A LA INFORMACION CONTENIDA DENTRO EN UNA ESTRUCTURA MULTIDIMENCIONAL

ticket_compra
ticket_compra[1].Producto
ticket_compra[1]["Producto"]

user

user.mascotas[1]
user["mascotas"][1]

usuario

usuario.direccion["calle"]
usuario["direccion"].codigoPostal
usuario.direccion.provincia
usuario["direccion"]["ciudad"]

alumnos
alumnos[2][0]

/*
homework: van a crear un array que contenga 3 objetos: esos objetos son articulos cuyas propiedades son: id, nombre, origen ( pueden darle los valores que quieran a sus propiedades. Ej id:1 , nombre: mouse, origen:china). Luego, van a mostrar a traves del console.log LA PROPIEDAD NOMBRE DEL SEGUNDO OBJETO GUARDADO

homework2: van a crear un objeto que sea un paciente, que tiene las siguientes caracteristicas: nombre, edad, y consultas. Consultas es un array que en cada indice tendra un string sobre las consultas que hizo (ej:"Dolor de espalda","Mareos","Dolor de cabeza",etc). Van a cargarle 3 consultas, y haran un console.log de la ULTIMA consulta que haya hecho. 


*/

// => Homework 1 

const componentes = [
    {
        ID:1,
        Nombre:"Teclado",
        Origen:"Taiwan",
    },
    {
        ID:315,
        Nombre:"Silla Gamer",
        Origen:"EE.UU",
    },
    {
        ID:5501,
        Nombre:"Headphones",
        Origen:"Indonesia",
    },
]

console.log(componentes[1].Nombre)

// => Homework 2

const paciente = {
    Nombre:"Roberto",
    Edad:"56",
    consultas:[
        "Dolor de cabeza","Fiebre","Precion baja"
    ],
}

console.log(paciente["consultas"][2])