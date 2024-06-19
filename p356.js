// Se necesita un algoritmo que tome un array de objetos y los agrupe por una propiedad específica, calculando además la suma, el promedio y el conteo de otra propiedad.

// Entrada:
const ventas = [
  { producto: 'Laptop', region: 'Norte', ventas: 100 },
  { producto: 'Laptop', region: 'Sur', ventas: 150 },
  { producto: 'Telefono', region: 'Norte', ventas: 200 },
  { producto: 'Telefono', region: 'Sur', ventas: 250 },
  { producto: 'Tablet', region: 'Norte', ventas: 300 }
];


const countProduct = (arr) => {
    return arr.reduce((acc, curr, _index, array) => {
      const result = array.filter((item) => item.producto === curr.producto);
      acc[curr.producto] = {
        suma: result.reduce((acum, current) => acum + current.ventas, 0),
        promedio: result.reduce((acum, current) => acum + current.ventas, 0) / result.length,
        conteo: result.length
      }
      return acc;
    }, {});
  };
  console.log(countProduct(ventas));

// salida:
// {
//   'Laptop': { suma: 250, promedio: 125, conteo: 2 },
//   'Teléfono': { suma: 450, promedio: 225, conteo: 2 },
//   'Tablet': { suma: 300, promedio: 300, conteo: 1 }
// }