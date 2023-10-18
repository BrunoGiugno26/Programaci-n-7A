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

//* El splice sirve para agregar o eliminar elementos de un array ejemplo:

lista_supermercado = ["arroz","caldito","fideo","cafe","coca"]

lista_supermercado.splice(0,2)
lista_supermercado

//*.map(): ayuda a ejecutar una accion sobre cada uno de los elementos de mi array:

const compras = lista_supermercado.map(articulo => {return ("Hay que comprar "+articulo)})
compras

//*reduce() suma todos los elemetos del array, y nos devuelve ese resultado

const numeros = [1,7,19,22,24]

const suma = numeros.reduce((total,numeros) =>{return total + numeros})

//* includes() esto lo que hace es devolvernos un dato boleano (veradero o falso)
const resutados = numeros.includes(24)

//* some() nos devuelve un boleano. verifica si al menos un elemento cumple con la condicion dada.

const verificacion = numeros.some(numeros => numeros <1)

//*concat():fuciona todos los arrays en uno solo.

const oasis = ["Liam","noel","paul","alan","gib"]
const The_Beatles = ["John","Paul","George","Ringo"]
const Nirvana = ["Kurt","Chris","Dave"]

const bandas = oasis.concat(The_Beatles,Nirvana)

//* Fill: rellena con elemtentos los arrays

const miarray = Array(5)
miarray.fill(0)
miarray 

const marcas = ["Cofler","Milka","Nestle"]
const chocolate = marcas.fill(0,3,2)

//*Condicionales: Lo que ayuda a determinar es lo ocurrido en el codigo atraves de una expresion booleana.

let edad = "18"

if(edad >= 18){
    console.log("Puede registrarse")
}
else{
    console.log("no se puede registrar ")
}

// Multiples Vlidaciones sirven para evaluar mas de un caso en este ejemplo se va a añadir un nuevo elemento que es el else if

let nota = "8"

if(nota <4){
    console.log("Debe recursar la materia")
}
else if(nota>=4 && nota<=7){
    console.log("Debe rendir final")
}
else if(nota>=8){
    console.log("Promociona la materia")
}

let username = "Bruno26"
let password = "Laplata1162"

if(username!=="Bruno26"||password!=="Laplata1162"){
    console.log("acceso no permitido")
}
else{
    console.log("Acceso  permitido")
}

//!IMPORTANTE!!!: los conectores locigos(Signos) indican el condector esos signos son:

/*
And => && (Todas las sentencias deben ser veraderas, para que la validacion sea verdadera)
Or => || (Al menos una sentencia debe ser verdadera para que nuestra validacion sea verdadera)
Not => ! (Lo contrario a la validacion que hagamos. Si es verdadero, lo transforma en falso y viseversa)
*/

//? OPERADORES BOOLEANOS:
/*
== Igual
/!= diferente a
=== igual en tipo y dato a
/!== diferente en tipo y dato
> mayor
>= mayor o igual
< menor
<= menor o igual
*/




