//! Recordatorio: DIFERENCIAS ENTRE ARRAY Y OBJETO:

//* El array se caracteriza por tener sus elementos ordenados atraves de INDICES.
//* El objeto se caracteriza por tener sus datos almacenados atravez de PROPIEDADES.
//? METODOS: son funcionalidades las cuales me permiten ejecutar acciones sobre mis Arrays u Objetos. Estos pueden ser ITERACIONES,BUSQUEDAS,FILTROS,agregar o quitar elementos,etc.

//Veamos los Arrays:

//Eliminar o remplazar elementos en el medio del array:

//*splice(): nos permite agregar o eliminar elementos de un array:
// el primer numero, representa el INDICE de inicio de la lista.
// el segundo numero, va a indicar la cantidad a ELIMINAR de los elementos.
// el tercer parametro es OPCIONAL: nos permite incertar elementos en el ESPACIO del array que se elimino.
const mis_compras = ["Harina", "Azucar", "Yerba", "Fideos", "Tomate", "Morron","Lavandina"]
mis_compras.splice(0,4) // => El primer numero del parentesis indica el inicio de cual elemento marcar.El segundo numero, la funcion que va a desempeñar es marcar cuantos elementos deseamos eliminar de la lista del array.
console.log(mis_compras)

mis_compras.splice(1,2,"Cafe","Pasta de dientes","Galletas")
console.log(mis_compras)

//*slice(): devuelve una fraccion del array como copia para utilizar en otra variable.NO MODIFICA EL ARRAY ORIGINAL,SINO QUE CREA UNA COPIA.
//el primer argumento, significa el INDICE de inicio
// el segundo argumento, significa la cantidad de elementos a recorrer para hacer la copia.
let Nueva_lista = mis_compras.slice(1,4)
console.log(Nueva_lista)

//*indexof(): nos dice el indice del primer elemento que coincida con la busqueda. NOS DEVUELVE EL NUMERO.
// SI NOS DEVULVE UN -1, ES PORQUE EL ELEMENTO NO ESTA EN UN ARRAY.

let indice = mis_compras.indexOf("Galletas")
console.log(indice)

//*join(): NOS DEVUELVE un string, el cual son los elementos del array separados por un SEPARADOR ASIGNADO.
//el argumento que le pasamos al join, sera el separador que tendra nuestro STRING. si no colocamos ninguno utilizara la "coma" (,) como separador

const nombres = ["Juancito","Roberto","Ernesta","Teresa","Ruperta"]
const unido = nombres.join(", ")
console.log(unido)

//*reverse(): da vuelta el orden de un array. MODIFICA EL ARRAY ORIGINAL

nombres.reverse()
console.log(nombres)

//*sort(): ordena el ARRAY

nombres.sort()
nombres.sort().reverse() //ORDENAMOS DE MANERA DESCENDENTE
console.log(nombres);

//!IMPORTANTE: ATENCION CON LOS NUMEROS!!!

const numeros = [4,8,22,33,75,14,10,2390]
numeros.sort((a,b) => b - a) //orden DESCENDENTE NUMERICO
numeros.sort((a,b) => a - b) //orden ASCENDENTE NUMERICO

console.log(numeros);


