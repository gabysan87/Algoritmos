//  Añadir una propiedad calculada a los objetos
//  Agrega una nueva propiedad calculada (totalPrice) que sea el doble del precio.  


const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
]

const result = (array) => {
    return array.map((prod) => ( {
     ...prod,
     totalPrice: prod.price * 2
    }))
}
console.log(result(products))

// salida [
//  { name: 'Laptop', price: 1000, totalPrice: 2000 },
// { name: 'Phone', price: 500, totalPrice: 1000 },
// { name: 'Tablet', price: 300, totalPrice: 600 }
//  ]