// Ejercicio 3: Ordenar objetos por propiedad
// Planteamiento:
// Ordena un array de objetos por el valor de una propiedad específica.

const estudiantes = [
    { nombre: 'Ana', promedio: 92 },
    { nombre: 'Luis', promedio: 85 },
    { nombre: 'Marta', promedio: 88 }
  ];

  const ordenarPorPromedio = (arr) => {

    return arr.sort((a,b) => a.promedio - b.promedio)
  }

  console.log(ordenarPorPromedio(estudiantes))