// Encontrar el número más pequeño en un array
const numbers = [20, 5, 8, 30, 1, 19];


const result = (arr) => {
   const min = Math.min(...arr)
   const indexMin = arr.indexOf(min)
   return {
    value: min,
    index: indexMin
   }
}


console.log(result(numbers))

// Salida : { value: 1, index: 4 }