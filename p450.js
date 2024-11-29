// Generar Cadenas de Bienvenida con Índices
// Enunciado: Dado un arreglo de nombres de usuarios, crear un nuevo arreglo donde cada elemento sea una cadena de texto que diga "Bienvenido, [nombre]!", junto con su índice en el arreglo original.

// Ejemplo de Entrada: ["Ana", "Luis", "Pedro"]



const persons = (array) => {
return array.map((person, index) => {
    return `Bienvenido, ${person}! - Índice ${index}`
})
}
console.log(persons(["Ana", "Luis", "Pedro"]))

// Ejemplo de Salida: ["Bienvenido, Ana! - Índice 0", "Bienvenido, Luis! - Índice 1", "Bienvenido, Pedro! - Índice 2"]