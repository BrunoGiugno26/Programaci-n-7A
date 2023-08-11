//? Javascript es un lenguaje de programacion de alto nivel-interpretado

//que es un dato? es una FRACCION MINIMA de INFORMACION .Ecisten varios tipos de datos:

/*
Datos numericos: Entero o decimal
Datos Alfanumericos: letras,numeros y/o caracteres
Datos Booleano: Por ser True or Flase
*/

//*un dato numerico,simplemente se escribe colocando el numero:
//4 es un dato numerico ENTERO.(INTEGERS)
//1.96 es un dato numerico DECIMAL,los datos decimales se separan con PUNTOS (FLOAT)
//*un dato alfanumerico,se escribe colocando ENTRE COMILLAS"" pueden ser simples o dobles pero simpre se INICIA Y FINALIZA CON LA MISMA
//una contraseña es un ejemplo muy claro: Laplata1162, otro muy usado es un MAIL:brunogiugno@gmail.com. como asi tambien datos reales de las personas como DIRECCION DE VIVIENDA (STRING)
//*Un dato booleano, es una expresion que puede ser evaluada como verdaderao falsa.El obelisco es negro=> False,La tierra es redonda => True 

//! regla numerica: si un dato, que son solo numeros NO SE UTILIZAN PARA EXPRESIONES MATEMATICAS,se lo pone como STRING

//*STRING:son datos alfanumericos ejemplo DNI,NUMERO DE TELEFONO,ESTADO CIVIL, ETC.

//? VARIABLES: son espacios de almacenamiento en la memoria que referencia a un dato.Es como una caja en la que puedo guardar un dato

//las VARIABLES para ser utilizadas, deben ser declaradas: significa darles un nombre que les indique su contenido para que luego sea mas facil de ubicar y usar el dato

//*DECLARANDO VARIABLES

//modo 1: escribir el nombre de la variable simplemente con lo que indicamos (NO UTILIZAR)

nombre="bruno"

//modo 2: declarando con la palabra reservada VAR (indica que es una variable) (NO UTILIZAR)

var mascota = "Roberto"

//modo 3: usando la palabra reservada LET (indica que es una variable local) (RECOMENDADA)

let edad = 22

//modo 4: es usar la plabra reservada CONST (indica que es una CONSTATNE) (RECOMENDADA)

const altura = 1.88

//! ATENCION LAS VARIABLES SEGUN SU DECLARACION PUEDEN SER SOBREESCRITAS, ADEMAS UNA VARIABLE CON VAR, NOS PODRIA GENERAR QUE ARMEMOS NUEVAS VARIABLES CON LAS MISMAS DECLARACIONES DE VARIABLES

const direccion = "AV Libertador"

direccion = "" //! CONST NO ME PERMITE CAMBIAR EL DATO CONTENIDO DENTRO

//? recordemos declarar nuestras variables con LET O CONST

let peso = 78.600
const dni = 42974952