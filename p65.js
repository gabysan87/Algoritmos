// Escribe un programa que verifique si un número ingresado por el usuario es positivo, negativo o cero.
 
const positiveNumber = (num) => {
    if (num > 0){
        return "El número es positivo"
    }
    else if (num < 0) {
        return "El número es negativo"
    }
    else {
        return "El número es cero"
    }
}

console.log(positiveNumber(0))
console.log(positiveNumber(10))
console.log(positiveNumber(-3))