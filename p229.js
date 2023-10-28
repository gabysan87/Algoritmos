const libro = {
    autor: "Oliver Prada",
}
let propiedad = "autor"

console.log(libro.autor)
// console.log(libro.propiedad) con la notacion de punto no puedo acceder a la variable propiedad porque es un string, para acceder tendria que usar corchetes asi console.log(libro[propiedad])

console.log(libro[propiedad])