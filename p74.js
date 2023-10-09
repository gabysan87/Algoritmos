// Eliminar elementos duplicados:

// Enunciado: Escribe una función que elimine los elementos duplicados de un array y devuelva un nuevo array sin duplicados.

const duplicateNumber =  (number) => {
   
    return  [...new Set(number)]
}

console.log(duplicateNumber([1, 2, 2, 3, 4, 4, 5, 5, 6])) // Salida: [1, 2, 3, 4, 5]