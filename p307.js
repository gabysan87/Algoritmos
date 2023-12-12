//  Contar ocurrencias
// Planteamiento: Cuenta cuántas veces se repite un valor específico en una propiedad.

// Entrada
const colores = [
  { nombre: 'Rojo', cantidad: 3 },
  { nombre: 'Azul', cantidad: 2 },
  { nombre: 'Rojo', cantidad: 1 }
];

const result = (arr, nombre, color) =>{
    return arr.reduce((acc, element) => {
        return acc + (element[nombre] === color ? 1 : 0);
      }, 0);
}

console.log(result(colores, "nombre", "Rojo"))

// Salida
// Contar la cantidad de objetos con el nombre 'Rojo'
// 2