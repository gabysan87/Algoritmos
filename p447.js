// Transformar un array de objetos
// Descripción:
// Transforma un array de objetos para incluir el índice de cada elemento.
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
];

const result = (arr) => {
    return arr.map((items, index) => ({
        ...items,
        // name: items.name,
        // price: items.price,
        id: index + 1
    }))
}
console.log(result(products))
// [
//   { name: "Laptop", price: 1000, id: 1 },
//   { name: "Phone", price: 500, id: 2 },
//   { name: "Tablet", price: 300, id: 3 }
// ]