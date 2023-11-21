// ordenar lo impar
// Tarea
// Se le dará una serie de números. Debe ordenar los números impares en orden ascendente y dejar los números pares en sus posiciones originales.

// Ejemplos
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortArray = (array) => {
    // Return a sorted array.
   const numberImpare = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
   const result = array.map(num => (num % 2 !== 0 ? numberImpare.shift() : num));
   return result
  }

  console.log(sortArray([5, 3, 2, 8, 1, 4]));
  console.log(sortArray([5, 3, 1, 8, 0]));
  console.log(sortArray([]))


  // creo una variable donde solo voy a buscar numeros impares con el meodo filter con los elementos que cumplan con la condicion, luego los ordeno con el sort de forma ascendente
  // creo  otra variable llamada result donde voy a transformar el array usando el metodo map alli el elemento llamado num se busca los que sean diferentes a numeros pares, entonces se usa la condicional operador ternario  donde devuelve la variable con el metodo shift para eliminar el primer elemento y luego retornar, en caso contrario devolver el elemento  

//   filtra los números impares del array original, los ordena y luego los reemplaza en el array original manteniendo las posiciones de los números pares. 