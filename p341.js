// Eliminar elementos específicos
// Enunciado: Escribe una función que elimine todos los elementos específicos de un array y devuelva el array resultante.
// Entrada
const array = [1, 2, 3, 4, 5];
const elementosAEliminar = [2, 4];

const removeItems = (arr, num) => {
return arr.filter((item) =>  !num.includes(item))

}

console.log(removeItems(array, elementosAEliminar))

// Salida: [1, 3, 5]
