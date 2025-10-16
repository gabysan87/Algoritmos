// Ejercicio 1: Sistema de Inventario con Análisis Múltiple
// Condiciones del problema:

// Tienes un array de productos con ventas
// Debes calcular: total de ingresos, producto más vendido, y stock restante promedio
// El acumulador debe ser un objeto que vaya construyendo estas estadísticas

const ventas = [
  { producto: "Laptop", cantidad: 15, precio: 800, stockInicial: 50 },
  { producto: "Mouse", cantidad: 45, precio: 25, stockInicial: 100 },
  { producto: "Teclado", cantidad: 30, precio: 60, stockInicial: 80 },
  { producto: "Monitor", cantidad: 20, precio: 300, stockInicial: 40 },
  { producto: "Laptop", cantidad: 10, precio: 800, stockInicial: 35 },
];
const inventoryAnalysis = (sales) => {
  return sales.reduce(
    (acc, curr) => {
      //calcular el ingreso total
      acc.ingresoTotal += curr.cantidad * curr.precio;
      //producto mas vendido
      acc.productoMasVendido.producto =
        curr.cantidad > acc.productoMasVendido.cantidadTotal
          ? curr.producto
          : acc.productoMasVendido.producto;
      // cantidad total
      acc.productoMasVendido.cantidadTotal =
        curr.cantidad > acc.productoMasVendido.cantidadTotal
          ? curr.cantidad
          : acc.productoMasVendido.cantidadTotal;

      //stock promedio restante
      const sumaSctock = sales.reduce(
        (sum, item) => sum + item.stockInicial,
        0
      );
      acc.stockPromedioRestante = Math.round(sumaSctock / sales.length);
      //   acc.stockPromedioRestante +=
      //     (curr.stockInicial - curr.cantidad) / sales.length;
      return acc;
    },
    {
      ingresoTotal: 0,
      productoMasVendido: { producto: "", cantidadTotal: 0 },
      stockPromedioRestante: 0,
    }
  );
};
console.log(inventoryAnalysis(ventas));
// Salida esperada:
// javascript{
//   ingresoTotal: 28925,
//   productoMasVendido: { producto: 'Mouse', cantidadTotal: 45 },
//   stockPromedioRestante: 61
// }
