// Crear un array de posiciones en un tablero

// Crea un array de posiciones basado en un array de filas y columnas.

Entrada:


 const rows = ["A", "B", "C"];

const result = (arr) => {
    return arr.map((items, index) => {
        `${items}${index}`
    })
}
console.log(result(rows))
//Salida: ["A1", "B2", "C3"]