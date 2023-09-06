// Ordenar un arreglo de cadenas:

// Enunciado: Escribe una función que ordene alfabéticamente un arreglo de cadenas de texto.
// Ejemplo de Entrada: ["manzana", "banana", "uva", "pera"]
// Ejemplo de Salida: ["banana", "manzana", "pera", "uva"]

const orderAlphabetically = (arr) => {
    return arr.sort((a,b) => a.localeCompare(b))
}

console.log(orderAlphabetically(["manzana", "banana", "uva", "pera"]))