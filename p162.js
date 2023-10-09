// Crear una función que reciba un array de números del 1 al 10 y devolver la suma total de todos los números pares, aplicarlo con métodos.

const pairNumbers = (num) => {
let result = 0
for (let i = 2; i <= num; i+=2){
    result = result + i
}
return result
}
console.log(pairNumbers(20))