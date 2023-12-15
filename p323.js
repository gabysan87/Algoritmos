// Combinar Dos Propiedades en una
// Planteamiento: Combina dos propiedades de objetos en un nuevo array.

// Entrada:

const empleados = [
  { nombre: 'Ana', apellido: 'García' },
  { nombre: 'Carlos', apellido: 'Pérez' },
  { nombre: 'Luisa', apellido: 'Martínez' }
];
const result = (arr)=> {
    return arr.map((item) => `${item.nombre} ${item.apellido}`)
}

console.log(result(empleados))
// Salida:

// Combinar las propiedades 'nombre' y 'apellido' en un nuevo array
// ['Ana García', 'Carlos Pérez', 'Luisa Martínez']