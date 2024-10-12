// Dado un array de objetos, crea una función que transforme cada objeto en uno nuevo con propiedades modificadas.
// Entrada:
// javascript
const libros = [
    { titulo: "1984", autor: "Orwell" },
    { titulo: "El Hobbit", autor: "Tolkien" }
];

const modifyTitle = (arr) => {
return arr.map((item) => {
    return {
    libroTitulo: item.titulo,
    escritor: item.autor
    }
})
}

console.log(modifyTitle(libros))

// Salida:
// javascript
// Resultado esperado:
// [
//     { libroTitulo: "1984", escritor: "Orwell" },
//     { libroTitulo: "El Hobbit", escritor: "Tolkien" }
// ]