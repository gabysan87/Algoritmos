// Sumar la cantidad total de elementos vendidos por cada producto
// Problema: Dado un array de ventas con productos y cantidades, suma la cantidad total de cada producto vendido
let ventas = [
  { producto: "Camisa", cantidad: 5 },
  { producto: "Pantalón", cantidad: 3 },
  { producto: "Camisa", cantidad: 2 },
  { producto: "Zapatos", cantidad: 4 }
];

const addProductsSold = (arr) => {
return arr.reduce((acc, {producto, cantidad}) => {
    
acc[producto] = acc[producto] ? acc[producto] + cantidad : cantidad 
return acc
},{})
}
console.log(addProductsSold(ventas))

// {
//   "Camisa": 7,
//   "Pantalón": 3,
//   "Zapatos": 4
// }