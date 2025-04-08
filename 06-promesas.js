function cuadratica(numero){
    let lineal = ""
        for( let i = 0; i < numero; i++){
            for(let j = 0; j < numero; j++){
                 if( i === j){
                    lineal = lineal + "+"
                 }
                 else{
                    lineal = lineal + "*"
                 }
            }   
            lineal = lineal  + "\n"
        }
    return lineal 
}
console.log(cuadratica(4))


    
function cuadratica(numero){
    let lineal = ""
        for( let i = 0; i < numero; i++){
            for(let j = 0; j < numero; j++){
                 if(i == 0){
                    lineal = lineal + "*"
                 }
                 else if (j == 0){
                    lineal = lineal + "*"
                 }
                 else if (i == numero - 1){
                    lineal = lineal + "*"
                 }
                 else if (j == numero - 1){
                    lineal = lineal + "*"
                 }
                 else{
                    lineal = lineal + " "
                 }
            }   
            lineal = lineal  + "\n"
        }
    return lineal 
}
console.log(cuadratica(4))



function agregar(lista){
    for(let i = 0; i < lista.length; i++){
        lista[i]= {...lista[i], id : i}
    }
    return lista
}

function aumentar(listaDeNombres){
    let nombre = ""
    let letra = ""
    let restoDelETRAS = ""

    for(let i = 0; i < listaDeNombres.length; i++){
        nombre = listaDeNombres[i].name
        letra = nombre[0].toUpperCase()
        restoDelETRAS = nombre.slice(1, nombre.length)

    listaDeNombres[i].name = letra + restoDelETRAS
    }
    return listaDeNombres
}

const lista = [
    {
      name:"jose"
    },
    {
      name:"nestor",
    },
    {
      name:"indira",
    }]
 let resultado = agregar(lista)
 resultado = aumentar(resultado)
    console.log(agregar(resultado))


/*Para convertir de ºC a ºF use la fórmula: ºF = ºC x 1.8 + 32.
Para convertir de ºF a ºC use la fórmula: ºC = (ºF-32) ÷ 1.8.
Para convertir de K a ºC use la fórmula: ºC = K – 273.15.
Para convertir de ºC a K use la fórmula: K = ºC + 273.15.*/

function calcularTemperatura(neveras){
    let temp2 = ""
    for(let i = 0; i < neveras.length; i++){
        temp2 = neveras[i].temperatura

            if(neveras[i].temperatura.celsius){
                temp2.kelvin = temp2.celsius + 273.15
                temp2.Fahrenheit = (temp2.celsius * 9/5) + 32
            }            
            else if(neveras[i].temperatura.kelvin){
                temp2.celsius = temp2.kelvin - 273.15
                temp2.Fahrenheit = (temp2.kelvin - 273.15) * 9/5 + 32
            }
            else if (neveras[i].temperatura.Fahrenheit){
                temp2.celsius = (temp2.Fahrenheit - 32 ) * 5/9
                temp2.kelvin = (temp2.Fahrenheit - 32) * 9/5 + 273.15
            }
    }
    return neveras
}

   



const neveras  = [{
    nombre: "samnsung",
    temperatura:{
        celsius: 20
    }
},
    {
    nombre: "oppo",
    temperatura:{
         kelvin: 20
    }
},
{
    nombre: "lenovo",
    temperatura:{
        Fahrenheit: 20
    }
}
]
 calcularTemperatura(neveras)
console.log(neveras)


function organizeInventory(inventory) {
    let organizar = {}
    for( let i = 0; i < inventory.length; i++){
        organizar = {
            ...organizar,
            [inventory[i].category]:{
                ...organizar[inventory[i].category],
            [inventory[i].name]:organizar[inventory[i].category]?
            organizar[inventory[i].category][inventory[i].name] ?
            organizar[inventory[i].category][inventory[i].name] + inventory[i].quantity : 
            inventory[i].quantity : inventory[i].quantity
            }
        }
    }
    return organizar
}


 const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory))


function recuadro(numero){
    let linea = ""
      for(let i = 0; i < numero; i++){
        for(let j = 0; j < numero; j++){
          linea = linea + "*"
        }
        linea = linea +  "\n" 
      }
      return linea
  }
   
  console.log(recuadro(4))