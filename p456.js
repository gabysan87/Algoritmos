// Filtrar elementos en posiciones pares
// Filtra los elementos que están en índices pares (0, 2, 4, ...):

const numbers = [10, 15, 20, 25, 30, 35];

const filterNumberPair = (arr) => {
return arr.filter((_num, index) => index % 2 === 0 )
}
console.log(filterNumberPair(numbers))

// Salida: [10, 20, 30]