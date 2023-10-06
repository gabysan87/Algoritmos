// Encuentra números que son divisibles por un número dado
// Complete la función que toma dos argumentos y devuelve todos los números que son divisibles por el divisor dado. El primer argumento es una matriz de numbersy el segundo es divisor.

// Ejemplo (Entrada1, Entrada2 --> Salida)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

const divisibleBy = (numbers, divisor) => {
return numbers.filter((num) => num % divisor === 0 )
}
console.log(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
console.log(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
console.log(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1,3,5], 2), []);