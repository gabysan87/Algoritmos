const nombre = "Gabriela";
const apellido = "Sanchez"

// const nombreCompleto = nombre + " " + apellido
const nombreCompleto = ` ${nombre} ${apellido} ${1 + 1}`

console.log(nombreCompleto)

let valorDado = 5;
valorDado = 4
console.log(nombre, apellido, valorDado)


//var  No se debe usar...
if ( true ) {
    // let valorDado =6;
    // console.log(valorDado)
    const nombre = "Peter"
    console.log(nombre)
}

console.log(valorDado)
console.log(nombre)

//Template String

function getSaludo (nombre) {
    return "Hola " + nombre
}

console.log(`Este es un texto: ${getSaludo (nombre) }`)

