// Agrupar gastos por tipo de gasto y calcular el total gastado en cada categoría
// Descripción: Tenemos una lista de gastos con su categoría y monto. Queremos agrupar los gastos por categoría y calcular el total de dinero gastado en cada una
const gastos = [
    { categoria: "Alimentos", monto: 100 },
    { categoria: "Transporte", monto: 50 },
    { categoria: "Alimentos", monto: 200 },
    { categoria: "Entretenimiento", monto: 150 },
    { categoria: "Transporte", monto: 75 }
];

const groupByCategory = (arr) => {
    return arr.reduce((acc, {categoria, monto}) => {
   acc[categoria] = acc[categoria] || {totalGasto: 0, items: 0}

   //  suma
acc[categoria].totalGasto += monto

//incrementar el nro. 
acc[categoria].items += 1

    return acc
    },{})
}

console.log(groupByCategory(gastos))

// {
//     "Alimentos": { totalGasto: 300, items: 2 },
//     "Transporte": { totalGasto: 125, items: 2 },
//     "Entretenimiento": { totalGasto: 150, items: 1 }
//   }