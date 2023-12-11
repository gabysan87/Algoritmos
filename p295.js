// Ejercicio 4: Contar ocurrencias de propiedad
// Planteamiento:
// Dado un array de objetos, cuenta cuántas veces aparece un valor específico en una propiedad.


const frutas = [
    { nombre: 'Manzana', color: 'rojo' },
    { nombre: 'Plátano', color: 'amarillo' },
    { nombre: 'Fresa', color: 'rojo' },
    { nombre: 'Uva', color: 'morado' }
  ];

  const contarOcurrencias = (arr, propiedad, valor) => {
    return arr.reduce((acumulador, elemento) => {
        return acumulador + (elemento[propiedad] === valor ? 1 : 0);
      }, 0);
    
  }
console.log(contarOcurrencias(frutas, 'color', 'rojo'))