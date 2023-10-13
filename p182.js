// escribe una funcion que tome dos numeros como parametros y devuelva 
// la multiplicacion, resta, division, suma

// sum : 5
// mult : 4
// rest: 5
// div: 2/

const operations = (num1, num2) => {
    return `Suma: ${num1 + num2}, Resta: ${num1 - num2}, Multiplicacion: ${num1 * num2}, Division: ${num1 / num2}`
}
console.log(operations(2,2))