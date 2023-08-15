//DISTINTOS TIPOS DE CONSOLES para ver nuestors errores y datos de una app o web
/*console.log("Estoy en en el archivo de la clase 7 de Agosto")
console.error("Esto seria un error")
console.warm("Mensaje de advertencia")*/

// ARRAYS Y OBJETOS
//? ARRAYS
//imaginemos que queremos comprar todo esto: "Yerba" "Arroz" "Harina" "Azucar" "Fideos"
//El array nos va a permitir guardar varios datos dentro
//cada elemento del Array, se separara utilizando una ,(COMA)

let listas_compras=["yerba","Arroz","Harina","Azucar","Fideos"] //para crear un ARRAY utilizamos los CORCHETES.

//como manejar losdatos de un ARRAY:
//*AGREGAR ELEMENTOS:

listas_compras.push("Lavandina") //me permite agregar un elemento al final del ARRAY. Para esto escribimos el elemento dentro del PARENTESIS
listas_compras

listas_compras.unshift("Tomates") //me permite agregar un elemento al comienzo del ARRAY.
listas_compras

//*QUITAR ELEMENTOS:

let eliminado= listas_compras.pop() //elimina el ULTIMO ELEMENTO DEL ARRAY
eliminado

let primer_elemento = listas_compras.shift() //elimina el PRIMER ELEMENTO DEL ARRAY.
primer_elemento

//que tan largo es el ARRAY
listas_compras
let largo_array = listas_compras.length
largo_array

//*¿como podemos ver el contenido de un solo elemento del ARRAY?
//los arrays estan construidos mediantes posiciones de indice: cada elemento se guarda en un indice.Siempre el primer indice es 0

listas_compras [0]
listas_compras[3]
listas_compras[4]

//? OBJETOS
//es la representacion de un conjunto de datos organizados mediante llaves y valores.
//para un objeto, yo lo creo usando llaves{}

let agenda = {
    nombre:"bruno",
    edad: 22,
    email:"brunogiugno@gmail.com",
    mascota:"Graco",
}
//acceso a los datos de las propiedades:
//para acceder a una propiedad y saber cual es su valor, tenemos dos metodos:BRACKET NOTATION Y DOT NOTATION

//*en nuestro ejemplo, querermos saber que dato esta guardado en la propiedad NOMBRE
//dot notation:debemos poner el nombre del objeto seguido de un punto,y el nombre de la propiedad

agenda.nombre

//bracket notation:debemos poner nuestro objeto y seguido pondremos corchetes, y dentro la propiedad a evaluar su contenido.

agenda["nombre"]

//*Agregamos datos a un objeto
//simplemente debemos crear la propiedad, y asignarle el valor que querramos

agenda.direccion = "Av Roberto 500"
agenda

agenda.numero = "2612445460"
agenda

agenda["ocupacion"] = "programador"
agenda

//quitar una propiedad usabamos el delete

delete agenda.email // => metodo dot notation
agenda

delete agenda ["mascota"]
agenda

//?REPASO

//los arrays son estructuras que se ordenan atravez de INDICES (una posicion dentro del array)
//los objetos son estrucuturas que almacenan datos a traves de PROPIEDADES (una llave que almacena un valor)

