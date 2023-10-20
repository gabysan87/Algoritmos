// Eliminación sencilla de duplicados
// Elimine los duplicados de una lista de números enteros, manteniendo la última aparición (más a la derecha) de cada elemento.

// Ejemplo:
// Para entrada:[3, 4, 4, 3, 6, 3]

// eliminar el 3 índice en 0
// eliminar el 4 índice en 1
// eliminar el 3 índice en 3
// Rendimiento esperado:[4, 6, 3]

// Se pueden encontrar más ejemplos en los casos de prueba.

// ¡Buena suerte!

const solve = (arr) => {
    // return arr.filter((element, index) => arr.lastIndexOf(element) === index);
    return  [...new Set(arr.reverse())].reverse()
  }

console.log(solve([3,4,4,3,6,3]));
console.log(solve([1,2,1,2,1,2,3]));
console.log(solve([1,2,3,4]));
console.log(solve([1,1,4,5,1,2,1]));
console.log(solve([1,2,1,2,1,1,3]));


