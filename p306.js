//  Buscar por múltiples propiedades
// Planteamiento: Encuentra un objeto en un array según múltiples propiedades.


// Entrada
const empleados = [
  { nombre: 'Ana', departamento: 'Ventas', salario: 50000 },
  { nombre: 'Carlos', departamento: 'TI', salario: 60000 },
  { nombre: 'Luisa', departamento: 'Ventas', salario: 55000 }
];

const result = (arr, departamento, salario) => {
    return arr.find((item) => item.departamento === departamento && item.salario > salario)
}

console.log(result(empleados, "Ventas", 53000))

// Salida
// Encontrar el empleado del departamento de 'Ventas' con un salario mayor a 53000
// { nombre: 'Luisa', departamento: 'Ventas', salario: 55000 }