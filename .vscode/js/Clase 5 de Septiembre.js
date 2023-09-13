//*Metodos FOR para ARRAYS:

const frutas = ["Manzana", "Naranja", "Pomelo", "Banana","Sandia"]
const alumnos = [
    {Nombre:"Bruno",Email:"brunogiugno@gmail"},
    {Nombre:"Roberto",Email:"Esquelfort@gmail.com"},
    {Nombre:"Ana",Email:"dearmas@gmail.com"}
]
//*FOR OF: realiza un recorrido POR CADA ELEMENTO QUE HAYA EN MI ARRAY

for (const elemento of alumnos){
    console.log(elemento.Email);
}

/*
for(let i = 0; i <frutas.length; i++){
    console.log("vamos a comprar"+ frutas[i])
}
*/

//*FOR IN:

//ARRAY: Es una estructura en el cual cada elemento esta posicionado por un INDICE array =["banana","manzana"].
//OBJETO: Es una estructura en el cual cada elemento esta posicionado por PROPIEDADES.

const herramientas = ["Martillo","Tornillo","Destornillador","Pinzas","Centimetro"]
const marca = {nombre:"Stanley",origen:"EEUU",actividad:"Fabricas de termos",fundacion:1987}

//*por ejemplo, nos permite recorrer un objeto, y ver sus propiedades, contenidos , o ambas
for (const llave in marca) {
        console.log(`propiedad: ${llave}, contenido: ${marca [llave]}`);
    }

//Recordatorio:
//marca["fundacion"] //Bracket notation
//marca.nombre //DOT notation

//*RECORRE CADA INDICE COMO UN VALOR DEL ARRAY.Podemos ver el INDICE, o CONTENIDO, e inclusive AMBAS.
for(const indice in herramientas) {
    console.log(herramientas[indice]);
}

//*veamos un caso PARTICULAR del FOR OF:
//! EL FOR OF NO ME PERMITE RECORRER UN OBJETO.

//for (const elemento of marca){
//    console.log(elemento);
//}

/* CUADRO DE FOR IN  -  FOR OF Y SUS DEVOLUCIONES

                    QUE PUEDO RECORRER           QUE ME DEVUELVE EN CADA INTERACION

*FOR IN:             ARRAYS|OBJETOS                  INDICE|PROPIEDAD
*FOR OF:                  ARRAYS                     CONTENIDO DEL INDICE

*/

/*
                        FOR-IN              FOR-OF                 DEVOLUCIONES EN CADA RECORRIDO
mascotas                 SI                    SI            => for in: un INDICE , for of: un ELEMENTO (contenido).
deptos                   SI                    SI            => for in: un INDICE , for of: un ELEMENTO (cada objeto que haya dentro).
empleados                SI                    NO            => for in: cada PROPIEDAD. 
calle                    SI                    NO            => for in: una PROPIEDAD.

*/

//* HOMEWORK: a cada una de las estructuras creadas, recorrerlas con un FOR-IN o FOR-OF segun correspondan. Dentro de cada recorrido, simplemente poner un console.log para ver la devolucion de cada estructura. EN EL FOR IN TRATAR DE DEVOLVER AMBAS COSAS EN MI ESTRUCTURA RECORRIDA (EJ: en mi array devolver no solo el INDICE, sino el CONTENIDO)

//? EJERCICIOS: RECONOCER QUE TIPO DE ESTRUCTURA ES Y QUE PODRIAMOS UTILIZAR:

//FOR IN: Va a dar una devolucion del indice ya que es un ARRAY,en este caso las mascotas. Tambien del contenido que hay dentro del INDICE.
//const mascotas = ["Firulais","Momo","Pochi"]
//for (const indice in mascotas) {
//    console.log(mascotas[indice]);
//}

//FOR OF: RECORRE EL CONTENIDO DEL ELEMENTO
const mascotas = ["Firulais","Momo","Pochi"] //ARRAY 
for(const elemento of mascotas)
console.log(elemento)


//FOR IN: Va a mostrar solamente el contenido ya que en este ejemplo de los deptos es un array con objetos lo que dice de que en lugar de indices tiene PROPIEDADES. 
const deptos = [{piso:3,depto:"A"},{piso:1,depto:"C"}] //ARRAY CON OBJETO
for (const propiedad in deptos) {
    console.log(deptos[propiedad])
}

//FOR OF: va a mostarar los elementos de cada objeto que haya dentro
//const deptos = [{piso:3,depto:"A"},{piso:1,depto:"C"}]
//for(const elemento of deptos)
//console.log(elemento)


//FOR IN: en este ejemplo de los empleados solamente se realiza un for in ya que no posee INDICE
const empleados = {nombre:"Jose Luis",area: "Tesoreria",antiguedad: "5 años"} //OBJETO (puede contener ARRAYS)
for(llave in empleados){
    console.log(`propiedad:${llave},contenido: ${empleados [llave]}`)
}

//FOR IN: ocurre lo mismo que en el ejemplo anterior esta vez con la calle.
const calle = {nombre:" Benito Juarez", altura:" 1556"} // OBJETO (puede contener ARRAYS)
for(llave in calle){
    console.log(`propiedad:${llave}, contenido: ${calle [llave]}`)
}