function compile(instructions) {
    let partes = []
    let palabra = ""
    let registro = {}
    let C = ""
    
    for(let i = 0; i < instructions.length; i++){
        for(let j = 0; j < instructions[i].length; j++){
            if (instructions[i][j] === " ") {
                partes.push(palabra);
                palabra = '';
              } else {
                palabra = palabra + instructions[i][j];
            }    
          }
        partes.push(palabra)
        console.log(partes)
      }
      return partes
  }
  
  const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
  ]
  compile(instructions)


  /*console.log(partes)
            C = partes[0]
            let x = partes[1]
            let y = partes[2]
            if(C == "MOV"){
                registro[y] = registro[x]
            }
            else if(C == "INC"){
                if(x == -1){
                   registro.push(x + 1) 
                }
                else{
                    registro = 0
                }
            }*/
 