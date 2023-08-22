//*map(): ejecuta una accion sobre cada uno de los elementos de mi array.

const mis_compras = ["Harina", "Azucar", "Yerba", "Fideos", "Tomate", "Morron","Lavandina"]

const compras = mis_compras.map((articulo) =>{
    return ("Hay que comprar " +articulo)
})

mis_compras
compras

const numeros = [4,6,10,31]

const numeros_multiplicados = numeros.map((numeros) =>
numeros*2)

numeros_multiplicados

//*filtler(): nos DEVUELVE un array con los elementos que no hayan PASADO EL FILTRO INDICADO (ejecuta,nos da un true o false y nos devuelve un elemento.)

const mayores_a_10 = numeros.filter(numeros => {
    return numeros >= 10
})

mayores_a_10

const elementos = mis_compras.filter(articulo=> {
    return articulo.charAt(0) === "F"
})

elementos

//*reduce(): suma todos los elementos del array, y nos devuelve ese resultado.
// Total: partimos de que al inicio el total va a ser 0 y en donde la sumatoria del total con el primer numero del array va a indicar el total y luego ese total va a ser sumado con el siguiente numero del array asi hasta tenrminar con todos los elementos del mismo.
//Numeros: La cantidad de elementos que tengamos en el array en este caso numeros.

const suma = numeros.reduce((total,numeros) => {
    return total+numeros
})

suma


//*Includes(): Esto nos devuelve un BOOLEANO. (verdadero o falso) Nos indica si el elemento se encuentra o no dentro de un array.

const resultados = mis_compras.includes("Fideos")
resultados

//* toString(): Transforma un array a String

const array_string = mis_compras.toString()
array_string

//*concat(): nos fuciona todos los arrays en uno nuevo.

const Independiente = ["Cauteruccio","Pala Baez","Ortiz"]
const Boca = ["Benedetto","Barco","Medina"]
const River = ["Fernandez","Paradela","Beltran"]

const jugadores = Independiente.concat(Boca,River)
jugadores

//*some(): nos DEVUELVE un bolleano. verifica si AL MENOS un elemento cumple con la condicion dada.

const verificacion = numeros.some(numeros => numeros >2)
verificacion

//*Evrey(): nos devuelve un booleano. verifica si TODOS los elementos cumplen con la condicion dada.

const verifica = numeros.every(numeros => numeros>3)
verifica

//*findindex():nos DEVUELVE el INDICE que se encuentra el PRIMER ELEMENTO ENCONTRADO, si no se encuentra, devuelve un -1.

const indice = jugadores.findIndex( jugador => jugador.charAt(0)=="B")
indice

//*from(): crea un array desde un string

//let mi_array = Array.from

//*foreach(): aplica, al igua que el map, una ejecusion a cada elemento del array.No nos devuelve nada.
const numeros_multiplic = numeros.forEach(numeros => numeros*2)
numeros_multiplic

//*fill(): completa un array con determinados elementos.

const miarray = Array(5)
miarray.fill(2)
miarray 

const relleno = numeros.fill(0,1,3)
relleno