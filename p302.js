// Ejercicio 4: Encontrar objeto por propiedad
// Planteamiento: Encuentra un objeto en un array según el valor de una propiedad.

// Entrada
const empleados = [
    { nombre: 'Ana', id: 101 },
    { nombre: 'Carlos', id: 102 },
    { nombre: 'Luisa', id: 103 }
  ];

  const result = (arr, id) => {
    return arr.filter((item) => item.id === id)
  }

  console.log(result(empleados,102))
  
  // Salida
  // Encontrar el empleado con id 102
  // { nombre: 'Carlos', id: 102 }