// 1. Suma de elementos en un array
// Enunciado: Escribe una función que sume todos los elementos de un array de números.
//Divide y venceras

// 1-declarar la funcion

const sumNum = (num) => {
return num.reduce((acc, curr) => acc + curr,0)
}
console.log(sumNum([1,2,3,4,5]))

// 2. Filtrar números pares en un array
// Enunciado: Crea una función que filtre solo los números pares de un array.

const filterPairs = (number) => {
return number.filter((elem) => elem % 2 === 0)
}

console.log(filterPairs([1, 2, 3, 4, 5, 6]))

// 3. Obtener el número mayor en un array
// Enunciado: Escribe una función que devuelva el número más grande en un array.

// 1- se crea una variable 
// 2- uso el metodo Math.max para buscar el nro. mayor
// 3- aplico el spread operator para traer la copia del Array
// 4- imprimo el resultado 

const orderNumber = (arr) => {
    return Math.max(...arr)
}
console.log(orderNumber([3, 9, 1, 8, 2]))

// 4. Contar las ocurrencias de un valor en un array
// Enunciado: Escribe una función que cuente cuántas veces aparece un valor específico en un array.

// 1- declaro una variable que aloje la funcion 
// 2-escribir la funcion que reciba el parametro (array) y el value que sera el nro. especifico para buscar
// 3- buscar el metodo que busque en el array en nro. en especifico 
// 4- luego de encontra el nro. se procede a contar la cantidad de veces que aparece el nro.
// 5- imprimir el resultado 

// Entrada:
// const arr = [1, 2, 3, 1, 4, 1, 5];
// const value = 1;

const countOccurrences = (arr, value) => {
return arr.filter((element) => element === value).length
}

console.log(countOccurrences([1, 2, 3, 1, 4, 1, 5], 1))

// 5. Invertir un array
// Enunciado: Crea una función que invierta el orden de los elementos de un array.

const reverseNumber = (array) => {
    return array.reverse()
}
console.log(reverseNumber([1, 2, 3, 4, 5, 6]))

// 6. Eliminar duplicados en un array
// Enunciado: Escribe una función que elimine los elementos duplicados en un array.

// 1-

const removeDucplicate = (num) => {
    return [...new Set(num)]
} 

console.log(removeDucplicate([1, 2, 2, 3, 4, 4, 5]))

// 7. Verificar si todos los elementos son pares
// Enunciado: Crea una función que verifique si todos los elementos de un array son pares.

const sonTodoPares = (arr) => arr.every((num) => num % 2 === 0)

    console.log(sonTodoPares([2, 4, 6, 8]))

//     8. Suma de los valores de un objeto
// Enunciado: Escribe una función que sume todos los valores de un objeto con valores numéricos.

const sumNumber = {
     a: 1, 
     b: 2, 
     c: 3, 
     d: 4 
    }

const result = (obj) =>{
return Object.values(obj).reduce((acc, curr) => acc + curr, 0)
}
console.log(result(sumNumber))

// 9. Obtener las claves de un objeto
// Enunciado: Crea una función que devuelva un array con las claves de un objeto.

const usurs = 
{ 
    nombre: 'Juan', 
    edad: 30, 
    ciudad: 'Madrid' 
}
const obtKeys = (obj) => Object.keys(obj);

console.log(obtKeys(usurs))
