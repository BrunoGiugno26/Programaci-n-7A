//* Metodos FOR para ARRAYS:

//* For tradicional:

const frutas = ["Manzana","Naranja","Banana","Limon"]

for (let i = 0; i > frutas.length;i++){
    alert(`Voy a comprar una ${frutas[i]}`)
}


//*For of: realiza un recorrido por CADA ELEMENTO QUE HAYA EN MI ARRAY

const dulces = [
    {nombre:"chocolate",marca:"Cofler"},
    {nombre:"Alfajor",marca:"Milka"},
   {nombre:"Bombones",marca: "Arcor"}
]

for(const elemento of dulces){
    console.log(elemento.nombre);
}

const herramientas = ["martillo ","tornillo ","serrucho "]

for(const elemento of herramientas){
    console.log(`Preciso comprar un ${herramientas[0]}`)
    const compras = herramientas.map(elemento =>{return("Hay que comprar "+ elemento)})
}


//* For In: 

const marcas = {marca:"nikita",serie:2,origen:"china"}

for(const llaves in marcas){
    console.log(`Propiedad: ${llaves}, contenido: ${marcas[llaves]}`)
}

//* HOMEWORK: a cada una de las estructuras creadas, recorrerlas con un FOR-IN o FOR-OF segun correspondan. Dentro de cada recorrido, simplemente poner un console.log para ver la devolucion de cada estructura. EN EL FOR IN TRATAR DE DEVOLVER AMBAS COSAS EN MI ESTRUCTURA RECORRIDA (EJ: en mi array devolver no solo el INDICE, sino el CONTENIDO)
/*
                        FOR-IN              FOR-OF                 DEVOLUCIONES EN CADA RECORRIDO
mascotas                 SI                    SI            => for in: un INDICE , for of: un ELEMENTO (contenido).
deptos                   SI                    SI            => for in: un INDICE , for of: un ELEMENTO (cada objeto que haya dentro).
empleados                SI                    NO            => for in: cada PROPIEDAD. 
calle                    SI                    NO            => for in: una PROPIEDAD.

*/
//? EJERCICIOS: RECONOCER QUE TIPO DE ESTRUCTURA ES Y QUE PODRIAMOS UTILIZAR:

//FOR IN: Va a dar una devolucion del indice ya que es un ARRAY,en este caso las mascotas. Tambien del contenido que hay dentro del INDICE.
//const mascotas = ["Firulais","Momo","Pochi"]
//for(const indice in mascotas){
//    console.log(mascotas[indice]);
//}


//FOR OF: RECORRE EL CONTENIDO DEL ELEMENTO
const mascotas = ["Firulais","Momo","Pochi"] //ARRAY
for(const elemento of mascotas){
    console.log(elemento)
}




//FOR IN: Va a mostrar solamente el contenido ya que en este ejemplo de los deptos es un array con objetos lo que dice de que en lugar de indices tiene PROPIEDADES. 
//const deptos = [{piso:3,depto:"A"},{piso:1,depto:"C"}] //ARRAY CON OBJETO

//for(const propiedad in deptos){
//    console.log(deptos[propiedad])
//}



//FOR OF: va a mostarar los elementos de cada objeto que haya dentro
const deptos = [{piso:3,depto:"A"},{piso:1,depto:"C"}]

for(const elemento of deptos){
    console.log(elemento.piso)
}



//FOR IN: en este ejemplo de los empleados solamente se realiza un for in ya que no posee INDICE
const empleados = {nombre:"Jose Luis",area: "Tesoreria",antiguedad: "5 años"} //OBJETO (puede contener ARRAYS)

for(const llaves in empleados){
    console.log(`Propiedad: ${llaves}, contenido: ${empleados[llaves]}`)
}


//FOR IN: ocurre lo mismo que en el ejemplo anterior esta vez con la calle.
const calle = {nombre:" Benito Juarez", altura:" 1556"} // OBJETO (puede contener ARRAYS)

for (const llave in calle){
    console.log(`Propiedad: ${llave} Valor: ${calle[llave]}`)
}

//* More examples of for in & on:


//FOR IN:
const musicians= {Name:"Eddie Vedder",band: "Pearl Jam", song: "isnt it a pity"}

for (const llave in musicians){
    console.log(`Propiedad: ${llave} Contenido: ${musicians[llave]}`)
}
//FOR OF:
const presidentes = [
    {candidato:"Javier Milei", Partido: "La Libertad Avanza"},
    {candidato:"Sergio Massa",Partido: "Union por la Patria"},
]

for(const argentina of presidentes){
    console.log(presidentes[0])
}

//? Bucle While:

/*
EN NUESTRA CERVECERIA, TOMAREMOS EL PEDIDO DE LOS CLIENTES DE CADA MESA BASADO EN EL TIPO DE CERVEZA QUE QUIERAN TOMAR:

ESTA PUEDE SER: "RUBIA","NEGRA","ROJA". LA CANTIDAD DE CLIENTES DE LA MESA, POR LO QUE LA CANTIDAD DE VECES A TOMAR EL PEDIDO POR CADA CLIENTE VA A SER VARIABLE.CADA VES QUE TOMEMOS EL PEDIDO DE UN CLIENTE AGREGAMOS A NUESTRO CONTADOR DE CERVEZAS UNA POR CADA UNO DE LOS TIPOS QUE HAYA.
ESTO SIGNIFICA QUE TENDREMOS UN CONTADOR POR RUBIAS,NEGRAS Y ROJAS.AL FINALIZAR DE TOMAR EL PEDIDO,MOSTRAREMOS CUANTAS CERVEZAS SE OIDIERON DE CADA UNA EN LAS MESAS.
*/

let cantidad_clientes = prompt("Cunatos clientes hay en la mesa")
let contador_pedidos = 0

let contador_rubias = 0
let contador_negras = 0
let contador_rojas = 0

while(contador_pedidos < cantidad_clientes){
    let cervezas_pedidas = prompt("Que cerveza quiere tomar? \n1) Rubias \n2) Negras \n3) Rojas")
    switch(cervezas_pedidas){
        case "1":
            contador_rubias++
            break;
        case "2":
            contador_negras++
            break;
        case "3":
            contador_rojas++
            break;
                
    }
    contador_pedidos++
}

prompt(`Cervezas Rubias: ${contador_rubias} \n Cervezas Negras: ${contador_negras} \n Cervezas Rojas: ${contador_rojas}`)

//? Otro Ejemplo esta vez con Bucle For:

/*
Voy a pedirle al cliente que diga cuantos productos agregara a la lista de copras.
En base a su eleccion, repartiremos el codigo preguntandole al cliente el nombre del producto a agregar
y lo cargaremos a un array con todos los productos que ya haya ingresado.
*/

let cant_productos = prompt("Cuantos productos queres ingresar")
let lista_compras = []

for(i=1;i<=cant_productos;i++){
    let productos = prompt("Ingrese el nombre de los productos")
    lista_compras.push(productos)
}

alert(lista_compras)

//? Bucle while:

let i = 0 

while(i<cant_productos){
   let productos = prompt("Ingrese el producto a cargar")
   lista_compras.push(productos)
    i++
}

alert(lista_compras)

 //?Ejemplos con Bucles for y while:

//Bucle For:

let cantidad_birras = prompt("Cuantas birras queres tomar")
let lista_birra = []

for(i=1;i<cantidad_birras;i++){
    let birras = prompt("Ingrese la birra que quiera")
    lista_birra.push(birras)
}

//Bucle While:

let i = 0

while(i<cantidad_birras){
    let birra = prompt("ingrese las birras que quiera")
    lista_birra.push(birra)
    i++
}

alert(lista_birra)

//Bucle for:

const cantidad_cuerdas= prompt("Cuantas cuerdas quiere comprar")
const lista_cuerdas = []

for(i=0;i<cantidad_cuerdas;i++){
    const cuerdas = prompt("Cuales marcas")
    lista_cuerdas.push(cuerdas)
}

alert(lista_cuerdas)


//Bucle While:

let i = 0

while(i<cantidad_cuerdas){
    const cuerdas = prompt("Cuales marcas")
    lista_cuerdas.push(cuerdas)
    i++
}

alert(lista_cuerdas)


