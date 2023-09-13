// Encontrar el número mayor:

// Enunciado: Escribe una función que encuentre el número más grande en un arreglo.
// Ejemplo de Entrada: [42, 7, 13, 99, 20]
// Ejemplo de Salida: 99

const findLargerNumber = (number) => {

   return number.sort((a,b)=> b-a)[0]
}

console.log(findLargerNumber([42, 7, 13, 99, 20]))


// Se utiliza el metodo sort para ordenar los elementos,  se accede al primer elemento del arreglo ordenado usando [0], que es el número más grande, y se devuelve como resultado de la función.
