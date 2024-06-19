// Escribe una función en JavaScript llamada calcularEstadisticas que tome como argumento un array de objetos. Cada objeto en el array representa un dato y tiene una propiedad llamada value que contiene un número.

// La función debe calcular y devolver un objeto con las siguientes estadísticas:

// suma: La suma de todos los valores en la propiedad value.
// promedio: El promedio de los valores.
// maximo: El valor máximo encontrado en la propiedad value.
// minimo: El valor mínimo encontrado en la propiedad value.
// Si el array de datos está vacío, la función debe devolver null.

// La función debe implementarse utilizando el método reduce() para iterar sobre los objetos y acumular las estadísticas.


const conjuntoDatos = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 }
  ];
  

  const calcularEstadisticas = (arr) => {
    // Si el array de datos está vacío, la función debe devolver null.
if( arr.length === 0){
    return null
}

const result = arr.reduce((acc, current, _index, arr) =>{

acc.suma += current.value
acc.maximo = Math.max(acc.maximo, current.value)
acc.minimo = Math.min(acc.minimo, current.value)
acc.promedio = acc.suma / arr.length
return acc
  }, {suma:0, maximo: -Infinity, minimo: Infinity})
//   result.promedio = result.suma / arr.length
return result
  }

console.log(calcularEstadisticas(conjuntoDatos))
  
//   console.log("Suma:",calcularEstadisticas.suma);
//   console.log("Promedio:", estadisticas.promedio);
//   console.log("Máximo:", estadisticas.maximo);
//   console.log("Mínimo:", estadisticas.minimo);
  