// Buscar un elemento:

// Enunciado: Escribe una función que busque un valor dado en un arreglo y devuelva true si está presente o false si no lo está.
// Ejemplo de Entrada: [1, 2, 3, 4, 5] y 3
// Ejemplo de Salida: true

const searchItems = (num, x) => {
    return num.includes(x)
}
console.log(searchItems([1, 2, 3, 4, 5],3))