// Crear un array de posiciones en un tablero

// Crea un array de posiciones basado en un array de filas y columnas.


 const rows = ["A", "B", "C"];

const result = (arr) => {
    return arr.map((items, index) => {
        return `${items}${index + 1}`
    })
}
console.log(result(rows))
//Salida: ["A1", "B2", "C3"]