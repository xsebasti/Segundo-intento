//destructuracion de variables 

let frutas = ["apple", "banana"]
let [a,b] = frutas
    console.log(a, b) //esto pasa con arrays

let persona = {nombre : "sebastian", edad : 17, ciudad : "envigado"}
let {nombre, edad, ciudad} = persona
    console.log(nombre, edad, ciudad) // esto pasa con lo objectos 

// destructuracino con el spread operator 
let persona2 = {nombre : "sebastian", edad : 17, ciudad : "envigado"}
let dato = "soltero"
let combinacion = {...persona2, dato}
    console.log(combinacion)// esto pasa con los objectos

let colores = ["amarillo", "azul", "rojo", "verde"]
let color2 = "morado"
let añadir = [...colores, color2]
    console.log(añadir)
