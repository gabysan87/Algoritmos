// Ejercicio 4: Números Negativos
// Enunciado: Escribe una función que cuente la cantidad de números negativos en un array.
// const array = [3, -5, 1, -2, 7, -8];
// console.log(contarNegativos(array)); // Salida esperada: 3

const array = [3, -5, 1, -2, 7, -8]

const negativeNumber = (num) => {
    return num.filter((number) => number < 0).length

}

console.log(negativeNumber(array))

// Enunciado: Sumar todos los elementos de un array.

// Entrada:

const arraySum = [1, 2, 3, 4, 5];

const sumNumber = (num) => {
    return num.reduce((acc, curr) => acc + curr)
}

console.log(sumNumber(arraySum))

// Ejercicio 2:
// Enunciado: Encontrar el número mayor en un array.

// Entrada: const array = [8, 3, 11, 5, 2];

const numberBigger = [8, 3, 11, 5, 2];

const findLargestNumber = (number) => {
return Math.max(...number)
}

console.log(findLargestNumber(numberBigger))

// Ejercicio 3:
// Enunciado: Filtrar los números pares de un array.

// Entrada: const array = [1, 2, 3, 4, 5, 6];


const filterNumber = [1, 2, 3, 4, 5, 6]

const numberPair = (num) => {
    return num.filter((number) => number % 2 === 0)
}

console.log(numberPair(filterNumber))

// Ejercicio 4:
// Enunciado: Multiplicar cada elemento del array por un número dado.

// Entrada:

const multipliqueArray = [2, 4, 6];
const factor = 3;

const resultMultiplique = (num, fact) => {
return num.map((number) => number * fact)
}

console.log(resultMultiplique(multipliqueArray,factor))

// Ejercicio 5:
// Enunciado: Comprobar si un elemento dado existe en el array.

// Entrada: const array = ['manzana', 'banana', 'uva'];
// const elemento = 'banana';


const checkElement = ['manzana', 'banana', 'uva']
const element = 'banana'

const itemToSearch = (item) => {
return item.includes(element)
}

console.log(itemToSearch(checkElement, element))


// Ejercicio 6:
// Enunciado: Obtener el promedio de un array de números.

// Entrada: const array = [10, 5, 8, 12, 7];

const averageArray = [10, 5, 8, 12, 7]
 
const numberAverage = (number) => {
    return number.reduce((acc, curr) => acc + curr) / number.length
}

console.log(numberAverage (averageArray))

// Ejercicio 7:
// Enunciado: Concatenar dos arrays.

// Entrada: const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

const array1 = [1, 2, 3] 
const array2 = [4, 5, 6]

const concaterArray = ( arr1, arr2) => {
    return [...arr1, ...arr2]
}

console.log(concaterArray(array1, array2))

// Ejercicio 8:
// Enunciado: Invertir un array.

// Entrada:  
// const array = [1, 2, 3, 4, 5]; 
// salida [5, 4, 3, 2, 1]


const invertAnArray = [1, 2, 3, 4, 5]

const arrayInvert = (num) => {
return num.reverse()

}

console.log(arrayInvert(invertAnArray))

// Ejercicio 9:
// Enunciado: Contar la cantidad de elementos que cumplen con cierta condición.

const arra = [10, 25, 8, 15, 30];
const condicion = num => num > 20;

function contarElementosCumplenCondicion(arra, condicion) {
  return arra.filter(condicion).length;
}

const cantidadCumplenCondicion = contarElementosCumplenCondicion(arra, condicion);

console.log(cantidadCumplenCondicion);


// Ejercicio 10:
// Enunciado: Eliminar elementos duplicados de un array.

// Entrada:  const array = [1, 2, 3, 2, 4, 5, 3];

const arrayDuplicate = [1, 2, 3, 2, 4, 5, 3];

const removeDuplicateItems = (num) => {
return [...new Set(num)]
}

console.log(removeDuplicateItems(arrayDuplicate))
