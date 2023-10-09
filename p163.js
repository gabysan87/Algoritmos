// Crear una función que reciba un array de números del 1 al 10 y devolver la suma total de todos los números pares, aplicarlo con métodos.

const pairNumbers = (num) => {
  return num.filter((numbers) => numbers % 2 === 0).reduce((acc,curr) => acc + curr)
}

console.log(pairNumbers([1,2,3,4,5,6,7,8,9,10]))