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
const user = {nombre:"Chichilote",edad: 34, genero:"binarie", mascotas: ["titi","pipi","lolo"]}

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

//? METODOS:

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

//?CONDICONALES: Lo que ayuda a determinar es lo ocurrido en el codigo atraves de una expresion booleana.

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

//?CONECTORES LOGICOS
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

//? SWITCH: es similar al if- else if else pero en vez de evaluar condicionales chequea cada resultado del caso a evaluar.

/*
Ejemplo:
En nuestro edificio tenemos 4 departamentos habilitados y porteria. Nuestro portero electrico tiene los botones del 1 al 9, todos son funcionales. En nuestro programa, si algun usuario toca el boton del dpto correspondiente enviara una alerta diciendo a que deto se esta comunicando. Si toca alguno de los que no estan habilitados,mostrara el mensaje de comunicacion a porteria
*/

//const deptos = 4

//*Modo con ELSE, ELSE-IF,IF

//if(deptos === 1){
//    console.log("Comunicandose al depto 1");
//}
//else if(deptos=== 2){
//    console.log("Comunicandose al depto 2");
//}
//else if(deptos=== 3){
//    console.log("Comunicandose al depto 3");
//}
//else if(deptos=== 4){
//    console.log("Comunicandose al depto 4")
//}
//else{
//    console.log("Comunicandose con porteria");
//}

//* En cambio dentro de la sentencia de SWITCH (deptos), pondremos a evaluar la variable.

const deptos = 4

switch(deptos){
    case 1: // => funciona como if y else if
        console.log("comuniandose al depto 1")
        break; //! IMPORTANTE siempre usar el break para cortar cada elemento a evaluar.
    case 2:
        console.log("comunicandose al depto 2")
        break;
    case 3:
        console.log("comunicandose al depto 3")
        break;
    case 4:
        console.log("comunicandose al depto 4")
        break;
    default: // => funciona como else para terminar la condicion del resultado a evaluar.
        console.log("Comunicandose con porteria")
        break;                
}

//Tambien se puede evaluar condiciones de Mayor o menor elementos

const metodo_pago = "tarjeta de debito"

switch(metodo_pago){
    case "efectivo":
        console.log("Obtiene un 30% de descuento");
        break;
    case "tarjeta de credito":
        console.log("Obtiene un 20% de descuento");
        break;
    case "tarjeta de debito":
        console.log("obtiene un 40% de descuento");
        break;
    default:
        console.log("Indique que metodo de pagao utilizara");
        break;    
}

//? BUCLES,CICLICAS: son estructuras que ejecutan UN MISMO CODIGO bajo una determinada CONDICION.

//? BUCLES WHILE: ejecuta su codigo MIENTRAS QUE la condicion a evaluar sea verdadera.

//const numero_secreto = 15
//const numero_arriesgado = 0

//while(numero_secreto!== numero_arriesgado){
//    const numero_arriesgado =parseInt(prompt("Adivine el numero secreto esta entre el 1 y el 20"))
//    if(numero_arriesgado!== numero_secreto){
//        alert("no es el numero secreto")
//    }
//        else{
//            alert ("Acertaste el numero!!")
//            break;
//        }
//}

// tambien el while sirve para usaro como contadores: evaluar una condicion del while con un mayor o menor

//let contador = 4

//while(contador >3){
//    consoloe.log("se ejecuto el bucle")
//    contador = contador+1
//}

/*
Ejemplo adivinanza:

El ususario tiene que adivinar cuantas lunas tiene saturno:

le diremos al ususario que adivine cuantas lunas posee (el numero correcto es 145). Si el usuario elije menos que ese numero, le pondremos un mensaje que diga "el numero de lunas es mayor al elegido!!",Si el ususario elige uno mayor le pondremos "El numero es menor al elegido" Su acierta, le pondremos un anuncio que dice GANASTE!!!. Mientras el ususario no acierte e juego se repetira.
*/
//alert("Bienvenido a nuestro juego.Adivine cuantas lunas tiene saturno!!!")

//let cant_lunas = 145
//let numero_Arriesgado = 0

//while(cant_lunas!=numero_Arriesgado){
//let numero_Arriesgado = prompt("Ingrese un numero")
//if(numero_Arriesgado > cant_lunas){
//alert("El numero de lunas es menor al elegido")
//}
//else if(numero_Arriesgado < cant_lunas){
//alert("el numero de lunas es mayor al elegido")
//}
//else
//    alert("GANASTE EL JUEGO!!")
//    break;
//}

//*contador: me pedira el registro de 5 alumnos (nombre y apellido). Cuando llegamos a ingresar a 5 el bucle terminara.

let contador_alumnos = 0
lista_alumnos = []
let cant_alumnos = prompt("Cuantos alumnos queremos ingresar")

while(contador_alumnos > cant_alumnos){
   let nombre_alumno = prompt("Ingrese el nombre del alumno")
   lista_alumnos.push(nombre_alumno)
    contador_alumnos++
}

alert(lista_alumnos)

//? BUCLE FOR: Se caracteriza por tener una cantidad de ciclos (veces que se repite el codigo ya estipulado).Es muy utilizado para recorrer Arrays.

//* El bucle for lleva tres argumentos:

// 1- La variable de iniciacion (Cumple la misma funcion del CONTADOR que usamos en WHILE).
// 2- expresion a evaluar (cumple la misma funcion que los ARGUMENTOS DEL WHILE).
// 3- INCREMENTADOR:(cumple la misma funcion que el INCREMENTADOR del while.)


//*WHILE tradicional:

//let contador_alumnos = 0

//while(contador_alumnos <10){
//    alert ("Cargamos un alumno")
//    contador_alumnos++
//}

//*BUCLE FOR:

const comida = ["Fideos","ravioles","Lomos","Hamburguesas"]

for(let i = 0;i< comida.length;i++){
    alert (`hoy quiero comer ${comida [i]}`)
}

//HOMEWORK: crear un Array con 6 elementos, recorrerlo con un bucle for, e imprimir alguna frase junto con el elemento indicado en posicion del array:

let juegos = ["Ludo","Ajedrez","Truco","teg"]

    for(let i = 0; i < juegos.length;i++){
        alert(`hoy voy a jugar al ${juegos[i]}`)
    }

    const presidentes = [
        {nombre:"Alverso", apellido:"Fernandez"},
        {nombre:"rober"}
    ]

