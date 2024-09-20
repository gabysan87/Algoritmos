// Escribir una función que tome un array de valores y retorne el mismo array pero moviendo los ceros al final.

// Ejemplo:


const moverCeros = (arr) => {
    // Filtrar todos los elementos que no sean ceros
const withoutNumberZero = arr.filter((item) => item !== 0)

  // Contar cuántos ceros hay en el array
const numberZero = arr.filter((num) => num === 0)

// Concatenar el array sin ceros con el array de ceros
return [...withoutNumberZero, ...numberZero ]
}


console.log(moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) 
