// Ejercicio 1: Suma de Pares
// Enunciado: Escribe una función que sume todos los números pares de un array.

const arraySumaPair = [1, 2, 3, 4, 5, 6];

const result = (num) => {
    return num.filter((number) => number % 2 === 0).reduce((acc, curr) => acc + curr)
}

console.log(result(arraySumaPair))

// Ejercicio 2: Ordenar Descendentemente
// Enunciado: Escribe una función que ordene un array de números en orden descendente.

const arrayNumber = [5, 2, 9, 1, 3];

const orderNumber = (num) => {
    return num.sort((num1, num2) => num2 - num1)
}

console.log(orderNumber(arrayNumber))

// Crea un array con los números del 1 al 20. Luego, crea una función que reciba un array y devuelva un nuevo array con los elementos del array original elevados al cuadrado. Si el array está vacío, la función debe devolver un array vacío.
// Entrada: [2, 4, 6, 8, 10]
// Salida: [4, 16, 36, 64, 100]

const highNumber = [2, 4, 6, 8, 10]

const raiseNumber = (num)=> {
 return num.map((number) => number ** 2 )
}

console.log(raiseNumber(highNumber))

// Crea un array con los nombres de los meses del año en español. Luego, crea una función que reciba un número entre 1 y 12 y devuelva el nombre del mes correspondiente. Si el número no es válido, la función debe devolver null.
// Entrada: 4
// Salida: “Abril”

const mesesDelAño = (num) => {;
    switch (num) {
        case 1: 
            return "Enero"
            break;
            case 2: 
            return "Febrero"
            break;
            case 3: 
            return "marzo"
            break;
            case 4: 
            return "abril"
            break;
            case 5: 
            return "mayo"
            break;
            case 6: 
            return "junio"
            break;
            case 7: 
            return "julio"
            break;
            case 8: 
            return "agosto"
            break;
            case 9: 
            return "septiembre"
            break;
            case 10: 
            return "octubre"
            break;
            case 11: 
            return "noviembre"
            break;
            case 12: 
            return "diciembre"
            break;
        default:
            null
    }
}

console.log(mesesDelAño(4))


