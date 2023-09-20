//* Sistema de legajos en una escuela: vamos a crear objetos los cuales luego almacenaremos en un array, para utilizar como si fuese una base de datos.
//* cada objteo tendra un numero de legajo, nombre y apellido, dni, materia. Esto representara a un profesor. En nuestro sistema tendremos la posibilidad de dar de alta un profesor, o ver cuales son los profesores que tengo cargados. El sistema tenddra 2 opciones y la tercera sera la de salir.

/*let option = 0
const ingresos = []

alert("Bienvenidos a nuestro sistema de carga!!")
while (option !==3){
    option = parseInt(prompt("Ingrese una opcion: \n1)Ingrese un nuevo legajo \n2)Ver legajos \n3)Salir"))
    switch (option) {
        case 1:
            //ejecutar una nueva carga
            let nro_legajo = prompt ("Ingreso y Legajo")
            let nombre_apellido = prompt ("Ingrese Nombre y Apellido")
            let dni = prompt ("Ingrese DNI")
            let materia = prompt ("Ingrese materia a cargo")
            const nuevo_legajo = {Legajo: nro_legajo, Nombre_apellido: nombre_apellido, documento: dni, Materia: materia}
            ingresos.push(nuevo_legajo)
            break;
        case 2:
            //listamos los Legajos
            const lista_legajos = ingresos.map((Legajo,index) => `Legajo_nro ${index+1}: ${Legajo.Legajo}, Nombre: ${Legajo.Nombre_apellido}, DNI: ${Legajo.documento}` )
            alert(lista_legajos)
            break;
        case 3:
            alert("Gracias por usar nuestro sistemas")
            break;
        default:
            alert("Opcion no valida")
            break;

    }
}
*/
//* Creamos la lista de compras: nos mostrara opciones para cargar nuevos productos, y la cantidad. Tendremos un menu con 3 opciones: cargar productos, ver listas de compras y salir.
/* 
let option = 0
const lista_compras =[]

alert("Bienvenido al sistema de ingresos de productos")
while(option!== 3){
    option = parseInt(prompt("Ingrese una opcion:\n1)Ingresar producto \n2) Ver productos \n3) Salir"))
    switch(option){
        case 1:
            //cargar productos
            let nombre_producto = prompt("Ingrese el producto")
            let cant_producto = parseInt(prompt("Ingrese la cantidad"))
            const producto = {nombre: nombre_producto, cantidad: cant_producto}
            lista_compras.push(producto)
            break;
        case 2:
            //lista productos
            const listado = lista_compras.map((producto,index) => `Producto ${index+1}: Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}`)
            alert(listado)
            break;
        case 3:
            //salir
            alert("Gracias por utilizar nuestro sistema")
            break;
        default:
            alert("Opcion no valida")
            break;            
    }
}
*/
//*HOMEWORK: REPLICAR EL SISTEMA PROPUESTO EN NUESTROS EJERCICIOS!. DEBEN UTILIZAR UN ARRAY PARA ALCANZAR DATOS, UN OBJETO QUE CONTENDRA DIFERENTES DATOS DENTRO Y LUEGO SERA ALMACENADO EN UN ARRAY (MINIMO 3 PROPIEDADES DEL OBJETO), UN BUCLE CON MINIMO 3 OPCIONES: INGRESAR DATOS , VER DATOS Y SALIR (PUEDEN AGREGAR MAS), UN SWITCH O IF, ELSEIF PARA MANEJAR LA CONDICION DE ELECCION DEL USUARIO.

let option = 0
const lista_canciones = []

alert("Bienvenidos a Tus gustos musicales")

while(option!==3){
    option = parseInt(prompt("Ingrese una opcion: \n1)Ingrese su cancion favorita \n2) Ver canciones favoritas \n3) Salir "))
    switch(option){
        case 1:
            let nombre_cancion = prompt("Ingrese cancion")
            let artista = prompt("Ingrese el artista")
            let cantidad_cancion = parseInt(prompt("Ingrese la cantidad de canciones"))
            const cancion = {Nombre:nombre_cancion, Cantidad:cantidad_cancion, Artista:artista}
            lista_canciones.push(cancion)
            break;
        
        case 2:
            const listado = lista_canciones.map((cancion,index) => `Cancion ${index+1}: Nombre: ${cancion.Nombre}, Artista: ${cancion.Artista} Cantidad:${cancion.Cantidad}`)
            alert(listado)
            break;

        case 3:
            alert("Gracias por compartir tu musica")
            break;
            
        default:
            alert("Opcion no valida")
            break;    
        }   
}
