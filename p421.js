// dado un array de objetos, agrúpalos por una propiedad específica y suma los valores de otra propiedad.

// Entrada:
const ventas = [
  { producto: "Camiseta", cantidad: 2, precio: 20 },
  { producto: "Pantalones", cantidad: 1, precio: 50 },
  { producto: "Camiseta", cantidad: 1, precio: 20 },
  { producto: "Zapatos", cantidad: 2, precio: 75 },
];

const totalPorProducto = (arr) => {

return arr.reduce((acc, curr, _index, array) => {
const categoryFilter = array.filter((item) => item.producto === curr.producto )
 acc[curr.producto] = categoryFilter.reduce((acum, current) => 
    acum + (current.cantidad * current.precio)
 ,0)
return acc
},{})

};

//otro solucion 

  
//   const totalPorProducto = (arr) => {
//       return arr.reduce((acc, curr) => {
//            Si el producto ya existe en el acumulador, sumamos el total de cantidad * precio
//           if (!acc[curr.producto]) {
//               acc[curr.producto] = 0; // Inicializamos con 0 si no existe
//           }
//           acc[curr.producto] += curr.cantidad * curr.precio; // Sumamos el subtotal
//           return acc;
//       }, {}); // Inicializamos el acumulador como un objeto vacío
//   };
  
//   console.log(totalPorProducto(ventas));
  


console.log(totalPorProducto(ventas));

// Salida esperada:
//   const totalPorProducto = {
//     Camiseta: 60, // 3 * 20
//     Pantalones: 50, // 1 * 50
//     Zapatos: 150 // 2 * 75
//   };