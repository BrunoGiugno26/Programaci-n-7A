// SWITCH: es similar la if-else if-else,pero en este caso en lugar de evaluar condiciones,chquea cada resultado del caso a evaluar.

//*En nuestro edificio tenemos 4 departamentos habilitado y porteria. nuestro portero electrico tiene los botones del 1 al 9, todos son funcionales.En nuestro programa, si algun usuario toca el boton del depto correspondiente enviara una alerta diciendo a que depto se esta comunicando.si toca alguno de los que no estan habilitados, mostrara el mensaje de comunicacion a porteria.

const depto = 5
//* MODO CON ELSE, ELSE-IF, IF
//if (depto === 1){
//    console.log("Comunicandose al depto 1");
//}else if (depto === 2){
//    console.log("comunicancdose al depto 2");
//}
//else if (depto === 3){
//    console.log("comunicancdose al depto 3");
//}
//else if (depto === 4){
//    console.log("comunicancdose al depto 4");
//}
//else if (depto === 5){
//    console.log("comunicancdose al depto 5");
//}
//else if (depto === 6){
//    console.log("comunicancdose al depto 6");
//}
//else if (depto === 7){
//    console.log("comunicancdose al depto 7");
//}
//else if (depto === 8){
//    console.log("comunicancdose al depto 8");
//}
//else if (depto === 9){
//    console.log("comunicancdose al depto 9");
//}
//else {
//    console.log("comunicandose a porteria");
//}//

//*Dentro de la sentencia del switch,pondremos la variable a EVALUAR


switch (depto){
    case 1:// el CASE funciona como un IF-ELSE IF
        console.log("Comunicarse al depto 1")
        break; //! IMPORTANTE: SIEMPRE UTILIZAR EL BREAK
    case 2:
        console.log("Comunicarse al depto 2")
        break;
    case 3:
        console.log("Comunicarse al depto 3")
        break;
    case 4:
        console.log("Comunicarse al depto 4")
        break;
    default://* DEFAULT funciona como un ELSE
        console.log("Comunicandose con porteria")
        break;
}

//*TAMBIEN PUEDE EVALUAR condiciones de MAYOR O MENOR.
//* con este switch segun la nota del alumno, dira si promociona ,debe dar final o recursar

const nota =10

switch(nota){
    case nota >=7:
        console.log("Promociona la materia");
        break;
    case nota <7 && nota >4:
        console.log("Debe rendir final")
        break;
    case nota <4:
        console.log("Debera recursar")
    default:
        console.log("No registra nota");
        break;            
}
//! IMPORTANTE PARA RECORDAR:
//*IF -ELIF PERMITEN EVALUAR CONDICIONES BOOLEANAS EN SUS EXPRESIONES.
//*SWITCH EVALUA RESULTADOS PROVENIENTES DE SUS EXPRESIONES.

//homework: crear un switch que evalue condiciones de compra de un comercio. la constante sera metodo_pago y puede tener tres valores: EFECTIVO,TARJETA DE CREDITO,TARJETA DEBITO . Segun el metodo de pago mostrara un mensaje.Si es EFECTIVO mostrara("Tiene un 20% de descuento"),si es TARJETA DE CREDITO mostarara el mensaje ("Tiene un 10% de descuento") y si es tarjeta de debito mostrara un mensaje:("Tiene 3 cuotas sin interes").Si indica otro metodo de pago mostarara el mensaje ("Por favor, indique que metodo de pago utilizara").

const metodo_pago = "efectivo"

switch (metodo_pago) {
    case "efectivo":
        console.log("Tiene un 20% de descuento");
        break;

    case "tarjeta de credito":
        console.log("Tiene un 10% de descuento");
        break;

    case "tarjeta de debito":
        console.log("Tiene 3 cuotas sin interes");
        break;

    default:
        console.log("Por favor, indique que metodo de pago utilizara");
        break;        
}

//*BUCLES,CICLICAS: son estructuras que ejecutan UN MISMO CODIGO bajo una determinada CONDICION.

//?BUCLE WHILE: ejecuta su codigo MIENTRAS QUE la condicion a evaluar sea Verdadera.

//const numero_secreto = 15
//const numero_arriesgado = 0

//while(numero_secreto !== numero_arriesgado){
//    const numero_arriesgado = parseInt(prompt("Adivine el numero secreto! esta entre el 1 y el 20"))
//if (numero_arriesgado !== numero_secreto){
//    alert("No es el numero secreto")
//} else{
//    alert("Acertaste el numero!!")
//    break;// utilizamos para salir del bucle que estemos ejecutando.
//}
//}

//* tambien el while sirve para usarlo como contadores: evaluar una condicion del while con un mayor o menor.

let contador = 0

while(contador <3){
    console.log("se ejecuto el bucle");
    contador= contador + 1
}