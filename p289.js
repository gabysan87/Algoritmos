// Ejercicio: Encontrar la cadena más larga en un array de objetos
// Planteamiento: Encuentra la cadena más larga en una propiedad específica de objetos.
const datos = [
  { id: 1, descripcion: 'Lorem ipsum dolor sit amet' },
  { id: 2, descripcion: 'Consectetur adipiscing elit' },
  { id: 3, descripcion: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas' }
];

const result = (arr) => {
    const result = arr.map((word) => word.descripcion.length)
    const maxLength = Math.max(...result)
    return arr.find((item) => item.descripcion.length === maxLength).descripcion
}

console.log(result(datos))
// Salida esperada: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'