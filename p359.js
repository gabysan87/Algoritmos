// Se requiere un algoritmo que tome dos arrays de objetos y realice una unión externa (left join) en función de una propiedad específica.

// Entrada:
const clientes = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'María' },
  { id: 3, nombre: 'Pedro' }
];
const pedidos = [
  { idCliente: 1, producto: 'Laptop' },
  { idCliente: 2, producto: 'Teléfono' }
];


const joinTwoArray = (arr1, arr2) => {
// const pedidosMap = new Map()
// arr2.forEach((item) => {
//     pedidosMap.set(item.idCliente, item)
//   });   

// return arr1.map((element) => {
//     const pedido = pedidosMap.get(element.id)
//     return {
//         ...element,
//         producto: pedido?.producto ?  pedido?.producto : null
//     }
// })

// 2da opcion 
// const pedidosMap = arr2.reduce((acc, curr) => {
//     acc[curr.idCliente] = curr.producto;
//     return acc;
//   }, {});

//   return arr1.map((item) => ({
//     ...item,
//     producto: pedidosMap[item.id] || null
//   }));

// 3era opcion 
return arr1.map(element => {
    const pedido = arr2.find(item => item.idCliente === element.id);
    return {
      ...element,
      producto: pedido ? pedido.producto : null
    };
  });
};

// console.log(joinTwoArray(clientes, pedidos))

// Salida:
// [
//   { id: 1, nombre: 'Juan', producto: 'Laptop' },
//   { id: 2, nombre: 'María', producto: 'Teléfono' },
//   { id: 3, nombre: 'Pedro', producto: null }
// ]


// tarea
// 1- otra solucion
// 2- leer informacion de javascript 