// Dado un array de objetos con propiedades anidadas, encuentra el objeto con el valor máximo en una propiedad específica.

// Entrada:
const productos = [
    { nombre: 'Camiseta', detalles: { precio: 25, stock: 100 } },
    { nombre: 'Pantalones', detalles: { precio: 50, stock: 200 } },
    { nombre: 'Zapatos', detalles: { precio: 75, stock: 150 } },
    { nombre: 'Sombrero', detalles: { precio: 20, stock: 300 } }
  ];

const productoMasCaro = (arr) => 
    // return arr.sort((a,b) => b.detalles.precio - a.detalles.precio )[0]
   arr.reduce((acc, curr) => 
        curr.detalles.precio > acc.detalles.precio
        ? curr
        : acc
    )


  console.log(productoMasCaro(productos));
  // Salida esperada:
  //const productoMasCaro = { nombre: 'Zapatos', detalles: { precio: 75, stock: 150 } };