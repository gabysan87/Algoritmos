// Devolver dos valores más altos en la lista

// En este kata, tu trabajo es devolver los dos valores más altos distintos en una lista. Si hay menos de 2 valores únicos, devuelva tantos como sea posible.

// El resultado también debe ordenarse de mayor a menor.

// Ejemplos:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

const twoHighest = (arr) => {
 return [...new Set(arr)].sort((a,b) => b - a).slice(0,2) 
}

console.log(twoHighest([]))
console.log(twoHighest([15]))
console.log(twoHighest([15, 20, 20, 17]))