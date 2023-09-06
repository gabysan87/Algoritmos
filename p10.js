// Eliminar elementos mayores a un valor dado:

// Enunciado: Escribe una función que elimine los elementos mayores a un valor límite de un arreglo de números.
// Ejemplo de Entrada: [15, 25, 35, 45, 55] y 40
// Ejemplo de Salida: [15, 25, 35]

const removeMajoritems = (arr, value) => {
    return arr.filter((item) => item <= value)
}
console.log(removeMajoritems([15, 25, 35, 45, 55],40))