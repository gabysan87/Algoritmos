// Planteamiento: Pide al usuario un arreglo de números y encuentra el número mayor.
// Ejemplo de entrada: [8, 3, 12, 5, 9]
// Salida esperada: El número mayor es 12

const userNumber = (arr) => {
   return Math.max(...arr)
}

console.log(userNumber([8, 3, 12, 5, 9, 15]))

// Sumar los elementos de un arreglo

// Planteamiento: Pide al usuario un arreglo de números y suma todos sus elementos.
// Ejemplo de entrada: [2, 4, 6, 8]
// Salida esperada: La suma de los elementos es 20

const sumNumber = (arr) => {

    return arr.reduce((acc, curr) => {
       let result = acc + curr 
       console.log("acumulador", acc)
       console.log("valoractual", curr)
       return result
        
    })
}

console.log(sumNumber([700555, 4, 6, 8]))