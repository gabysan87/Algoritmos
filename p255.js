// elegir un conjunto de primeros elementos

// Escribe una función para obtener los primeros elementos de una secuencia. Pasar un parámetro n(predeterminado = 1) devolverá los primeros nelementos de la secuencia.

// Si n== 0devuelve una secuencia vacía[]

// Ejemplos
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

const arrays = ['a', 'b', 'c', 'd', 'e'];
const first = (arr, n = 1) => {
    return arr.slice(0,n)
    
  }

  console.log(first([...arrays]));
  console.log(first([...arrays], 2))
  console.log(first([...arrays], 3))