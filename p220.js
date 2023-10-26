// Desestructuring

const cuadrado = {
    x : 10,
    y : 10,
}

// const calcularElArea = (cuadrado) => {
//     return cuadrado.x * cuadrado.y
// }

//otra forma de desestructurar, aca se resume el objeto en lugar de llamar al objeto y en vez de llamar a la popiedad, entonces sacamos la clave y se trabaja directo con ellas, 
// const calcularElArea = (cuadrado) => {
//     const {x,y} = cuadrado
//     return x * y 
// }

// o tambien se ejecuta en la parte del ( parametro)
const calcularElArea = ({x,y}) => {

        return x * y
}

console.log(calcularElArea(cuadrado))