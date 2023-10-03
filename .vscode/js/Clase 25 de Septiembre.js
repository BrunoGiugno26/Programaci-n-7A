//*FUNCIONES: son elementos que contiene BLOQUES DE CODIGO, los cuales podemos reutilizar a lo largo de la creacion de nuestro programa (evitar el D.R.Y => DONT REPEAT YOURSELF).

// const nombre = prompt("Ingrese su nombre: ")
// const año = prompt("Diganos su año de nacimiento ")
// alert(`Hola ${nombre}, tu edad es de ${2023-año}`)

//* Estructura de una funcion
// PALABRA RESERVADA  NOMBRE DE LA FUCNION, (PARAMETROS O ARGUMETNOS)

function saludar () {
    // bloque de codigo a ejecutar...
    const nombre = prompt("Ingrese su nombre: ")
    const año = prompt("Diganos su año de nacimiento ")
    alert(`Hola ${nombre}, tu edad es de ${2023-año}`)
}

//* Luego de crear una funcion, debemos INVOCARLA / LLAMARLA (call)
// saludar()
// alert ("Funcion ejecutada ok - 1")
// saludar ()
// alert("Funcion ejecutada ok - 2")
// saludar ()

//! saludar () => para llamarla, debemos colocar el nombre de la funcion, y los parentesis.

//* Creamos una funcion que nos permita hacer un calculo matematico (multiplicacion). En esta fucnion vamos a utilizar PARAMETROS dentro de los parentesis: argumentos que vamos a utilizar DENTRO DE LA FUNCION para ejecutar el bloque de codigo

// Metodo de funcion sin utilizacion de parametros:

//function multiplicar(){
//    const num1 = prompt("Ingrese el primer numero")
//    const num2 = prompt("Ingrese el segundo numero")
//    const resultado = num1 * num2
//    alert(`El resultado es ${resultado}`)
//}

//multiplicar()

//* FUNCION CON PARAMETROS:

function multiplicar(numero1, numero2){
    const resultado = numero1 * numero2
    alert (`El resultado es ${resultado}`)
}

multiplicar (8,9)
multiplicar (5,4)
multiplicar (12,12)

// Como hago si quiero que el usuario cree sus constantes en este caso sus multiplicaciones.

const num1 = prompt("Ingrese el primer numero: ")
const num2 = prompt("Ingrese el segundo numero: ")

multiplicar(num1,num2)

//* Return: es la devolucion de la ejecucuion de una funcion.

function sacarPromedios(num1,num2,num3) {
    const prom = (num1+num2+num3)/3
    return prom
}

const promedio = sacarPromedios (7,6,3)
alert(`el promedio del alumno fue de ${promedio}`)
