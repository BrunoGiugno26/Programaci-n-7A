//*BUCLE WHILE:

/*
En nuestra cerveceria, tomaremos el pedido de los clientes de cada mesa basado en el tipo de cerveza que quieran tomar: esta puede ser "rubia","negra","roja". La cantidad de clientes dependera de la mesa, por lo que la cantidad de veces a tomar el pedido por cada cliente va a ser VARIABLE. Cada ves que tomemos el pedido de un cliente agregaremos a nuestro contador de cervezas una por cada uno de los tipos que haya. Esto significa que tendremos un contador por rubias,negras y rojas. Al finalizar de tomar el pedido, mostraremos cuantas cervezas se pidieron de cada una en las mesas.
*/

/*let cant_clientes = prompt("¿Cuantos clientes hay en la mesa?")//pedimos los clientes de la mesa
let contador_pedidos = 0
let contador_rubias = 0
let contador_negras = 0
let contador_rojas = 0

while(contador_pedidos < cant_clientes) {
    let cerveza_pedida = prompt("Que cerveza desea tomar?\n1) Rubia\n2) Negra\n3) Roja")

switch(cerveza_pedida){
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

prompt(`Cervezas Rubias: ${contador_rubias} \n Cervezas Negras: ${contador_negras} \n cervezas Rojas: ${contador_rojas} \n`)
*/
//*BUCLE FOR:

/*
Voy a pedirle al cliente que diga cuantos productos agregara a la lista de compras. En base a su eleccion, repartiremos el codigo,preguntandole al ciente,el nombre del producto a agregar, y lo cargaremos a un array con todos los productos que ya haya ingresado.
*/
/*
let cant_productos = prompt("Ingrese la cantidad de productos a cargar a la lista de compras")
let lista_compras = [] //lista vacia para almacenar nuestros productos.

for(i=1;i<=cant_productos;i++){
    //pedir al usuario el producto y agregarlo a la lista e compras
    let producto = prompt("Ingrese el producto a cargar")
    lista_compras.push(producto)
}

alert(lista_compras)
*/
/*
let i = 0 

while(i<cant_productos){
    let producto = prompt("Ingrese el producto a cargar")
    lista_compras.push(producto)
    i++
}

alert(lista_compras)
*/

//*HOMEWORK: CONSTARA DE CONSTRUIR UN CONTADOR CON CUALQUIER EJEMPLO.LUEGO, ESE MISMO CONTADOR, LO PASARAN AL OTRO TIPO DE BUCLE. EJEMPLO: SI PRIMERO LO HICIERON CON FOR, LO PASARAN A WHILE, O VICEVERSA.

//FOR:
/*
let cant_canciones = prompt("Ingrese cuantas canciones les gusta")
let list_canciones = []

for(i = 0;i< cant_canciones;i++){
    let canciones = prompt("Ingrese sus canciones favoritas")
    list_canciones.push(canciones)
}

alert(list_canciones)
*/
//WHILE:

let i = 0

let cant_canciones = prompt("Ingrese cuantas canciones les gusta")
let list_canciones = []

while(i<cant_canciones){
    let canciones = prompt("Ingrese su cancion favorita")
    list_canciones.push(canciones)
    i++
}

alert(list_canciones)