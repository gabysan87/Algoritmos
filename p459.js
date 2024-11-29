// Enunciado: Filtrar palabras largas y devolver sus posiciones
// Dado un arreglo de palabras, filtra aquellas que tienen más de 5 caracteres y genera un nuevo arreglo con sus posiciones originales (índices).

const palabras = ["casa", "elefante", "sol", "estrella", "avión"];

const filterLongWords = (array) => {
// return array.filter((items) => items.length > 5 ).map((_element, index) => index)
return array.map((num, index) => (num.length > 5 ? index : null  ) )
.filter((item) => item !== null)

}
console.log(filterLongWords(palabras))
//salida 
// salida : [1, 3]