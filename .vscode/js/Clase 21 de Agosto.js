//*Condicional: en el lenguaje de programacion funciona segun lo ocurrido en el codigo, va a evaluarse una expresion BOOLEANA(verdadero o falso).segun el resultado de esta expresion, es lo que ocurrira con el codigo.

//* Para esto se utiliza la sentencia IF, que es lo que nos permite EVALUAR UNA SENTENCIA.

//? ESTRUCTURA:

/*
if(*condicion a evaluar*){
    codigo a ejecutar en caso que la expresion sea VERDADERA.

}
*/

/**Operadores Booleanos:nos permiten evaluar sentencias de manera comparativa
== (igual a)
!= (diferente a)
=== (igual en tipo y dato a)
!== (diferente en tipo y dato)

> (mayor)
>= (mayor o igual)
< (menor)
<= (menor o igual)

  */ 

let interruptor = "On"

if (interruptor == "Off")
    console.log("la lamparita esta encendida");


//En este ejemplo, el usuario debe tener 18 o mas para crear una cuenta

let edad = 18

if (edad >= 18){
    console.log("Puede crear la cuenta");
}

//* Si bien un caso puede ser verdadero, tambien puede ser falso, e incluso tambien tal vez querramos ejecutar un codigo en caso que nuestra primer validacion no nos de verdadera!! Para eso, crearemos una sentencia llamada ELSE, que nos permite ejecutar ese codigo en caso de que todas las validaciones anteriores sean falsan. El ELSE se ejecuta SI O SI, en esos casos.


//En este ejemplo vamos a ejecutar un mensaje que diga "Su edad no permite crear una cuenta"

// let edad = 18

if (edad >= 18 ){
    console.log("Puede crear la cuenta");
} else {
    console.log("Su edad no permite crear una cuenta");
}

//Puede haber casos en el que se ejecuten MULTIPLES validaciones: es decir, dependiendo la validacion, es lo que se ejecutara
//para evaluar mas de un caso, utilizaremos la sentencia ELSE IF

//*En este ejemplo, los alumnos con mas de 7 de nota, promocionan la materia. los que tengan entre 6 y 4, deben rendir un final, y los que tengan menos de 4, deben recursar la materia

let nota = 10

//Conectores logicos:

//AND => && (todas las sentencias deben ser VERDADERAS, para que la validacion sea VERDADERA)
//OR => || (al menos UNA sentencia debe ser verdadera para que nuestra validacion sea VERDADERA)
//NOT => ! (lo contrario a la validacion que hagamos. Si es verdadero, lo transforma en falso y viceversa)

//! cuando se encuentra una sentencia que da como VERDADERA, el resto del codigo NO SE EJECUTA
if ( nota < 4){
    console.log("Debe recursar la materia");
} else if (nota >= 4 && nota <= 6){
    console.log("Debe rendir el final");
} else if (nota >= 7){
    console.log("Promociono la materia");
}

//! Si el usuario ingresa mal su username o password, el sistema no lo deja ingresar

let username = "Bruno26"
let password = "1162"

if (username != "Bruno26" || password != "116"){
    console.log("acceso no permitido");
}

//homework: En una telefonica , se ingresa al sistema de recepcion de mensajes: el usuario debe ingresar un numero: Si ese numero es el 1, le pondra un console log de ("Enviando mensaje a Sistemas"), si es el 2 el mensaje sera ("Enviando mensaje a contaduria"), si es el 3, ("Enviando mensaje a Ventas"), y si es otro numero ("Enviando mensaje a Recepcion")

let opcion = 5 //completar con el numero

if( opcion == 1/*condicion para el 1*/){
console.log("Enviando mensaje a sistemas")// mensaje del 1
} else if(opcion == 2) /* condicion del 2*/ {
  console.log("Enviando mensaje a Contaduria")  // mensaje del 2 
} else if(opcion == 3)/* condicion del 3*/{
console.log("Enviando mensaje a ventas")    //mensaje del 3
} else /* cualquier otro numero */{
console.log("Enviar mensaje a recepcion")    //mensaje de otro numero
}

