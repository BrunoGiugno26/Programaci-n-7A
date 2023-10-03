//* Function ARROW (arrow function): es otra manera de declarar una funcion, la arrow funcion tiene como caracteristica, que se almacena en una VARIABLE.

/* 
const nombre = "Bruno"
function saludar(nombre) {
    alert(`Hola ${nombre}, bienvenido a Js`)
}

saludar(nombre)
*/

//const nombre = "Bruno"
//const saludar = (nombre) => {
//    alert(`Hola ${nombre}, bienvenido a JS`)
//    return nombre   
//}

//saludar(nombre)

//! IMPORTANTE: PARA EJECUTAR UNA ACCION ES NECESARIO DEFINIR PRIMERO LA CONSTANTE/LET DE LA VARIABLE Y LUEGO DEFINIDA DESPUES DE LA LLAVE AGREGAR LA ACCION. ES FUNDAMENTAL EN LA FUNCION ARROW YA QUE A DIFERENCIA DE LA FUNCTION VAMOS A CREARLO COMO VARIABLE Y NO COMO FUNCION.

//* Funcion con arrow function: practica
//funcion que reciba dos parametors (seran 2 numeros) y nos devuelva la multiplicacion de ambos. dicha funcion se llamara multiplicacion.

const multiplicacion = (num1,num2) => 
// la particularidad del arrow function es que si utilizamos una sola linea de codigo, podemos quitar las llaves y tambien quitar el return, haciendo eso nos va a ejecutar la accion. Ya que las llaves y el return dentro de un arrow function, y de una linea, estan inplicitas.Es decir, Sabemos que exsisten pero no estan explicitamente escritas.

multiplicacion(8,9)

//*CONDICIONALES: son estructuras LOGICAS que nos permiten visualizar y organizar cual sera el comportamiento de un programa dependiendo una EVALUACION LOGICAS entre los OPERANDOS. Para obtener estos resultados logicos usaremos los operadores LOGICOS:

/*

> "Mayor a"
< "Menor a"
>= "Mayor o Igual a"
<= "Menor o Igual a"

== "Igual en valor a"
/ != "Diferente en valor a"

=== "Igual en tipo y valor a"
/ !== "Diferente en tipo y valor a"
*/

//* IF es la sentencia que nos va a permitir crear una EVALUACION LOGICA:

//? Ejemplo: tenemos un programa, en el cual, el usuario ingresa su contraseña. Si la contraseña es correcta, le dira: "Bienvenido nuevamente a nuestro programa" (el password correcto sera "arbol123")

const password = "calesita123"

if (password === "arbol123"){
    console.log("Bienvenido a nuestro programa");
}

//! IMPORTANTE: solo se ejecutan los bloques de codigo cuya evaluacion logica sea VERDADERA.

//? Tenemos un programa que solo deja acceder a los usuarios que sean mayor o igual a 18 años de edad.

const edad = ""

if (edad >=18){
    console.log("Gracias por ingresar a PornHub")
}

//? en este programa, hay un numero secreto del 1 al 10: si acierta el numero secreto, le mostrara el mensaje ADIVINASTE!!! ( el numero secreto sera el 6)

const numero_usuario = 4
const numero_secreto = 6
// si no acierta, mostraremos con otra sentencia llamada ELSE, que el numero es incorrecto.
if (numero_usuario === numero_secreto){
    console.log("Adivinaste el numero secreto")
} else{ //* ELSE: en caso que el codigo condicional no se ejecute, esta sentencia se EJECUTA SI O SI.
    console.log("El numero es incorrecto")
}

//! IMPORTANTE: ELSE no llea una EVALUACION LOGICA para ejecutarse: se ejecutara siempre que los condicionales anteriores no se ejecuten.

//? En este ejemplo, tenemos una adivinanza: "Cuantas lunas tiene Saturno:(La respuesta correcta es 53), si el usuario elije un numero menor a 53, le pondremos el mensaje "Arriesgue un numero mas alto", en caso de que sea un numero mas alto: "Arriesgue un numero mas bajo", sino le pondremos que acerto a la adivinanza.

const num_usuario = 0
const cant_lunas = 53

if(num_usuario > cant_lunas){
    console.log("Arriesgue un numero mas bajo");
} else if (num_usuario < cant_lunas){ //ELSE IF: nos permite evaluar 1 o mas condiciones EXTRA dentro de nuestro CONDICIONAL.
    console.log("Arriesgue un numero mas alto");
} else{
    console.log("Felicidades!!! ganaste el juego")
}