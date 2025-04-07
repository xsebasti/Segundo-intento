function moveTrain(board, mov) {
    let texto = ""
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board.length; j++){
                if (board[i][j] === '@') {
                    let fila = i
                    let columna = j
                    if(mov == "U"){
                        fila = fila - 1
                        if(fila < 0){
                            texto = "crash"
                        }
                        else if (board[fila][columna] === "o") {  
                            texto = "crash";  
                        } 
                        else if(board[fila][columna] == "*"){
                            texto = "eat"
                        }
                        else {  
                            texto = "none";  
                        }
                    }
                    else if( mov == "D"){
                        fila = fila + 1
                        if(fila >= board.length){
                            texto = "crash"
                        }
                        else if (board[fila][columna] === "o") {  
                            texto = "crash";  
                        } 
                        else if(board[fila][columna] == "*"){
                            texto = "eat"
                        }
                        else {  
                            texto = "none";             
                        }
                    }
                    else if(mov == "L"){
                        columna = columna - 1
                        if(columna < 0){
                            texto = "crash"
                        }
                        else if (board[fila][columna] === "o") {  
                            texto = "crash";  
                        } 
                        else if(board[fila][columna] == "*"){
                            texto = "eat"
                        }
                        else {  
                             texto = "none";  
                            } 
                    }
                    else if(mov == "R"){
                        columna = columna + 1
                        if(columna >= board[0].length){
                            texto = "crash"
                        }
                        else if (board[fila][columna] === "o") {  
                            texto = "crash";  
                        } 
                        else if(board[fila][columna] == "*"){
                            texto = "eat"
                        }
                        else {  
                            texto = "none";
                        }
                    }
                }
            }
        }
    return texto
  }

  const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
  ]
  
  console.log(moveTrain(board, 'U'))
  console.log(moveTrain(board, 'D'))
  console.log(moveTrain(board, 'L'))
  console.log(moveTrain(board, 'R'))

