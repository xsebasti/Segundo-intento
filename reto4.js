/*¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos 
que sea especial. Vamos a crear una función que recibe la altura del árbol
 (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad,
 construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta 
usando saltos de línea \n para cada línea.*/

function crearArbol(tamano, objecto){
    let arbol = ""
        for(let i = 1; i <= tamano; i++){
           let espacios = ""
           for(let j = 0; j < tamano - i; j++){
            espacios = espacios + "_"
           } 
            let caracteres = ""
                for(let k = 1; k <= (2 * i - 1 ); k++){
                    caracteres = caracteres + objecto
                }
                let resultado = espacios + caracteres + espacios
                arbol = arbol + resultado + "\n"
            } 
            let tallo = ""
            for(let i = 0; i < tamano - 1; i++){
                tallo = tallo + "_"
            }  
        tallo = tallo + "#" + tallo
        arbol = arbol + tallo + "\n"
        arbol = arbol + tallo
        return arbol
}
const arbol = crearArbol(5, '*')
console.log(arbol)

 