// Crea una función que agrupe los elementos de un array de objetos por una propiedad específica y cuente cuántos elementos hay en cada grupo.

const personas = [
  { nombre: "Alice", edad: 25, ciudad: "New York" },
  { nombre: "Bob", edad: 30, ciudad: "Paris" },
  { nombre: "Charlie", edad: 25, ciudad: "London" },
  { nombre: "David", edad: 30, ciudad: "New York" },
];

const agruparYContar = (arr, property) => {
    return arr.reduce((acc, curr) => {
        const objKey = curr[property] // Obtenemos el valor de la propiedad especificada
        acc[objKey] = acc[objKey] ? acc[objKey] + 1 : 1 
return acc
    },{})
}


console.log(agruparYContar(personas, "edad"));



// Salida
// {
//   "25": 2,
//   "30": 2
// }