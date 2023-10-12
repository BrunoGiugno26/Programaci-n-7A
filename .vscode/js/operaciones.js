//*Console.Log() => nos permite visualizar algun tipo de dato o mensaje en la consolo del navegador
//para que nuestros archivos javascripts funcionen con el HTML debo LINKEARLOS (conectarlos)
//esto va en html => <script type="module" src="*La ruta del archivo de JS"></script>

//*Ejemplo => console.log("Aloja")

//Operaciones de datos en Js

//? OPERACIONES NUMERICAS:

let suma = 2 + 2
console.log(suma);

let resta = 10 - 5
console.log(resta);

let multiplicacion = 6 * 4
console.log(multiplicacion);

let division = 355 / 5
console.log(division);

let potencia = 8 ** 2
console.log(potencia);

let resto = 50 % 4
console.log(resto);

let entero = Math.floor(20/3)
console.log(entero);

let raiz = Math.sqrt(81)
console.log(raiz);

//? OPERACIONES DE STRINGS:

let frase = "Hola" + "Mundo" // => si uso un signo + en 2 strings, voy a unir (CONCATENAR) los strings.
console.log(frase);
//* si intento dividir , multiplicar o restar 2 strings ALFABETICOS, tendre un resultado NAN (not a number)
let resultado = "Hola" / "Mundo"
console.log(resultado);

//! CONVERSION DE DATOS: si pasamos datos NUMERICOS tipo STRINGS, e intentamos restar, dividir o multiplicar, estos datos javscripts trataran de transformar esos strings a numeros y hacer la correspondiente operacion

//Pedidos de datos a traves del prompt (ventana) y la muestra de mensajes (alert)

//* Pedir datos a traves de prompt (ventana)

/*let nombre_usuario = prompt("Diganos su nombre")

alert("Hola " + nombre_usuario)*/

/*let numero1= prompt("indique el primer numero")
console.log(numero1)
let numero2= prompt("indique el segundo numero")
console.log(numero2)*/

/*alert(Number(numero1)+Number(numero2))

let nacimiento=prompt("Cual es tu año de nacimiento")
console.log(nacimiento)

alert(`Hola ${nombre_usuario} bienvenido a JS. Tu edad es de ${numero1} años`)
*/