//Funcines en JS

// function saludar (nombre) {
//     return `Hola, ${nombre}`
// }
// saludar = 30

// // console.log( saludar("Goku"))
// console.log( saludar)


const saludar = function (nombre) {
    return `Hola, ${nombre}`
}
178
// console.log( saludar("Goku"))
console.log( saludar)

// FUNCION ARROW
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

//return impicito
const saludar3 = (nombre) => `Hola, ${nombre}`

//no se ingresa el parametro
const saludar4 = () => `Hola, Mundo`

console.log( saludar2 ("Vegeta"))
console.log( saludar3 ("Goku"))
console.log( saludar4())

const getUser = () => ({
        uid: "ABC123",
        username: "El_Papi1502"
    })

console.log(getUser ())

//Tarea
// 1- Transformar a una funcion de flecha
// 2- Tiene que retornar un objeto implicito
// 3- Pruebas

const getUsuarioActivo  = (nombre) => ({
    
        uid: "ABC567",
        username: "nombre"
    })

const usuarioActivo = getUsuarioActivo("Gabriela");
console.log(usuarioActivo);