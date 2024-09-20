// Su tarea es crear dos funciones (max y min, o máximo y mínimo, etc., según el lenguaje) que reciban una lista de números enteros como entrada y devuelvan el número más grande y más bajo de esa lista, respectivamente.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

const maxMin = (arr) =>{
const max = Math.max(...arr)
const min = Math.min(...arr)
return `max = ${max}, min= ${min}`
}

console.log(maxMin([4,6,2,1,9,63,-134,566] ))
console.log(maxMin([-52, 56, 30, 29, -54, 0, -110]))