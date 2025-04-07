/*Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas 
desordenadas en el taller. Cada bota se describe por dos valores:

type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo 
tamaño que tengan izquierda y derecha. Para ello, debes devolver una 
lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!*/

function organizarZapatos(zapatos){
    let suTamano = {}
    let tipo = ""
    let tamano = ""
    let pares = []
     
     for(let i = 0; i < zapatos.length; i++){
        tipo = zapatos[i].tipo 
        tamano = zapatos[i].tamano 
        if(suTamano[tamano] == undefined){
            suTamano[tamano] = []
        }
         if(tipo == "I"){
              let valor1 = suTamano[tamano] ? suTamano[tamano][0] : ""
            if(valor1 == "R"){
                pares.push(tamano)
                suTamano[tamano].pop()
            }
            else{
                suTamano[tamano]?.push(tipo)
            }
        }
        else{
            valor1 = suTamano[tamano] ? suTamano[tamano][0] : ""
            if(valor1 == "I"){
                pares.push(tamano)
                suTamano[tamano].pop()
            }
            else{
                suTamano[tamano]?.push(tipo)
            }
        }
     }
     return pares
}

const zapatos = [
    { tipo: 'I', tamano: 38 },
    { tipo: 'R', tamano: 38 },
    { tipo: 'R', tamano: 42 },
    { tipo: 'I', tamano: 41 },
    { tipo: 'I', tamano: 42 }
  ]
  
  console.log(organizarZapatos(zapatos))


 