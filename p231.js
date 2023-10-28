// En este kata, tu trabajo es devolver los dos valores más altos distintos en una lista. Si hay menos de 2 valores únicos, devuelva tantos como sea posible.

// El resultado también debe ordenarse de mayor a menor.

// Ejemplos:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

const highestValue = (arr) => {
    return [...new Set(arr.sort((num1,num2)=> num2 - num1))].slice(0,2)
    
}

console.log(highestValue([4, 10, 10, 9]))
console.log(highestValue([1, 1, 1]))
console.log(highestValue([]))

