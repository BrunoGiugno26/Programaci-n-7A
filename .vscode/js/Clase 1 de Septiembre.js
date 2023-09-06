//alert("Aloja");
//prompt("Ingrese algun dato")

//*Adivinanza:El usuario tiene que adivinar cuantas Lunas tiene Saturno: Le diremos al usuario que adivine cuantas lunas posee (el numero correcto es 53).Si el usuario elije menos que ese numero,le pondremos un mensaje que diga "el numero de lunas es mayor al elegido!!" , si el usuario elige uno mayor le pondremos "El numero es menor al elegido!!".Si acierta, le pondremos un anuncio que dice GANASTE!!!.Mintras el usuario no acierte, el juego se va a repetir.
/*
alert("Bienvenido a nuestro juego.Adivine cuantas lunas tiene saturno!!!")

let cant_lunas = 53
let numero_Arriesgado = 0

while(numero_Arriesgado != cant_lunas){
let numero_Arriesgado = prompt("Ingrese su numero")
if(numero_Arriesgado > cant_lunas){
    alert("El numero de lunas es MENOR al elegido.")
} else if(numero_Arriesgado < cant_lunas){
    alert("El nuemro de lunas es MAYOR al elegido. ")
} else
alert("GANASTE!!!")
break;
}
*/
//*contador:me pedira el registro de 5 alumnos (nombre y apellido). Cunado llegemos a ingresar a 5 el bucle terminara.

//let contador_alumnos = 0
//let lista_Alumno =[]
//let cant_alumnos = prompt("Cuantos alumnos queremos ingresar")

//while(contador_alumnos > cant_alumnos){
//    let nombre_alumno = prompt("Ingrese el nombre de Alumno")
//    lista_Alumno.push(nombre_alumno)
//    contador_alumnos++
//}

//alert(lista_Alumno)

//*BUCLE FOR: se caracteriza por tener una cantidad de CICLOS (Veces que se repite) de codigo YA ESTIPULADA.

// este bucle es muy utilizado para recorrer ARRAYS.

/*
el BUCLE FOR lleva tres argumentos:
1: la variable de iniciacion (cumple la misma funcion del CONTADOR que usamos en el WHILE).
2: expresion a evaluar (cumple la misma funcion que los ARGUMENTOS DEL WHILE).
3: INCREMENTADOR: (cumple la misma funcion que el INCREMENTADOR del WHILE).
 */


/*let contador_alumnos = 0

while (contador_alumnos < 10){
    alert("cargamos un alumno")
    contador_alumnos++
}
*/

//for(let i = 0; i < 3; i++){
    //codigo a ejecutar:
//    alert("cargamos un alumno.la expresion 'i' vale" + i)
//}

//let comida = ["Pizza", "Fideos" , "Empanadas" ,"Lomos", "Hamburguesas", "Panchos"]

//for(let i = 0; i < comida.length; i++){
//    alert(`Hoy quiero comer ${comida[i]}`)
//}

//*HOMEWORK: crear un array con 6 elementos, recorrerlo con un bucle for, e imprimir alguna frase junto con el elemento indicado en la posicion del array:

let juegos = ["The Last Of Us","Fifa","Call of Duty","NBA 2K","Devil may cry","Far Cry"]

for(let i = 0; i < juegos.length; i++){
    alert(`Quiero jugar al ${juegos[i]}`)
}


