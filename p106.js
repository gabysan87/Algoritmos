// Suma cuadrada (n)

// Complete la función de suma cuadrada para que cuadre cada número que se le pasa y luego sume los resultados.


const squareSum = (numbers) => {
return numbers.map(item => item ** 2).reduce((acc, curr) => acc + curr, 0)

// return numbers.reduce((sum,num) => sum + (num * num), 0);
}

console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))