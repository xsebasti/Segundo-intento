let saludo = "hola"
let despedida = "adios"
let frase =  saludo + "" + despedida + "!"
    console.log(frase)//antes de que saliera es6 asi utilizabamos los valosres de las variables
    //y era una manera mas confusa tocaba sumar concatenar 

//con los templates literals 
let fraEvolucionada = `${saludo} "y" ${adios} "!"`
    console.log(fraseevolucionada)

// los multilineas 
let mensaje = "Este es un mensaje\nque ocupa varias\nlíneas\ny muchas cosas mas";
console.log(mensaje);
let mensaje2 = "este mensaje" +
"tiene muchas cosas" +
"como algunas de estas"
// asi se abarcaba un cadena de texto en varias lineas pero 
// ya con es6 javascript lo lee automaticamente
let mensajeEvolucionado = `este es un mensaje diferente
donde vamos a encontrtar muchas cosa
como algunas de ellas `
// ya poniendo nuestra estructura de texto con las comillas francesas, jss
// lee automaticamente que es una estrutura de texto que va en varias linea