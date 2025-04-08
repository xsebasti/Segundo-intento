function nuevoUsuarios(nombre, apellido, ciudad){
nombre = nombre || "sebastian"
apellido = apellido || "caballero"
ciudad = ciudad || "envigado"
    console.log(nombre, apellido, ciudad)
}
// aca le pasabamos el valor a laos paramaetros segun al uso de la funsion, si no le pasbamos nada
//ella cojia los valores predeterminados y si le pasamos otros valores queda con esos valores
nuevoUsuarios()
nuevoUsuarios("fabian", "figueroa", "envigado")


//parametros por defecto
function newusuario(nombre = "sebastian", apellido = "caballero", ciudad = "envigado"){
    console.log(nombre, apellido, ciudad)
}
// aca le pasabamos el valor a laos paramaetros segun al uso de la funsion, si no le pasbamos nada
//ella cojia los valores predeterminados y si le pasamos otros valores queda con esos valores
newusuario()
newusuario("fabian", "figueroa", "envigado")
