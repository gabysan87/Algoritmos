// Unir Propiedades
// Planteamiento: Combina dos propiedades en un nuevo array de objetos.

// Entrada:

const empleados = [
  { nombre: 'Ana', salario: 50000 },
  { nombre: 'Carlos', salario: 60000 },
  { nombre: 'Luisa', salario: 55000 }
];
const result = (arr) => {
    return arr.map((item) => `${item.nombre} - ${item.salario}`)
}

console.log(result(empleados))


// Salida:
// Crear un nuevo array con la propiedad 'nombre-salario'
// ['Ana - 50000', 'Carlos - 60000', 'Luisa - 55000']