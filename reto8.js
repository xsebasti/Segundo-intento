function drawRace(indices, length) {
   let resultado = ""
   
        for(let i = 0; i < indices.length; i++){
             let linea = ""
            for(let j = 0; j < length; j++){
                let indicesCaballo = indices[i]

                if(indicesCaballo == 0){
                    linea = linea + "~"
                }
                 else if(indicesCaballo > 0){
                    if(j == indicesCaballo){
                        linea = linea + "r"
                    }
                     else{
                        linea = linea + "~"
                    }
                }
                else{
                    if(indicesCaballo < 0){
                        if(j == length + indices[i]){
                        linea = linea + "r"
                    }
                        else{
                         linea = linea + "~"
                    }
                }
              } 
                 if(j + 1 == length){
                    linea = linea + " /" + (i + 1) 
              }
             }

            let espacio = ""
                 for(let k = 0; k < indices.length - (i -1) ; k++){
                    espacio = espacio + " "
            }
            resultado = resultado + espacio + linea

                if (i < indices.length - 1) {
                   resultado = resultado + "\n"
            }  
        }
    return resultado
  }
  console.log(drawRace([0, 5, -3], 10))
  console.log(drawRace([2, -1, 0, 5], 8))
  console.log(drawRace([3, 7, -2], 12))
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
   