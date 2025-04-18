function compile(instructions) {
  let partes = [];
  let palabra = '';
  let registro = {};
  let C = '';

  for (let i = 0; i < instructions.length; i++) {
    partes = [];
    palabra = '';
    for (let j = 0; j < instructions[i].length; j++) {
      if (instructions[i][j] === ' ') {
        partes.push(palabra);
        palabra = '';
      } else if (j === instructions[i].length - 1) {
        palabra = palabra + instructions[i][j];
        partes.push(palabra);
      } else {
        palabra = palabra + instructions[i][j];
      }
    }

    C = partes[0];
    let x = partes[1];
    let y = partes[2];
    if (C == 'MOV') {
      if (registro[x] === undefined) {
        registro[y] = parseInt(x);
      } else {
        registro[y] = registro[x];
      }
    } else if (C == 'INC') {
      if (registro[x] === undefined) {
        registro[x] = 0;
      }
      registro[x] = registro[x] + 1;
    } else if (C === 'JMP') {
      if (registro[x] == 0) {
        let saltoInstruccion = parseInt(y);
        if (saltoInstruccion >= 0) {
          if (saltoInstruccion < instructions.length) {
            i = saltoInstruccion - 1;
          }
        }
      }
    } 
  }
  if (registro['A'] === undefined) {
    return "error: A no está definido"
  }
  return  { A: registro['A'] }
}