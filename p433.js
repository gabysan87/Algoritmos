// /Enunciado:
//Dado un array de usuarios, donde cada usuario tiene un nombre y un array de objetos compras (que incluyen el nombre del producto y su precio), crea una función que devuelva un objeto con los nombres de los usuarios como claves y la suma total de sus compras como valores.

//Entrada:
const usuarios1 = [
  {
    nombre: "Juan",
    compras: [
      { producto: "Laptop", precio: 1000 },
      { producto: "Mouse", precio: 20 },
    ],
  },
  {
    nombre: "Lucía",
    compras: [
      { producto: "Teléfono", precio: 500 },
      { producto: "Funda", precio: 10 },
    ],
  },
];

const sumOfUserPurchases = (array) => {
    return array.reduce((acc, curr) => {
         // Calcula la suma de los precios de las compras del usuario
        const sumShoping = curr.compras.reduce((total, compra) => total + compra.precio,0)
        // Asigna el nombre del usuario como clave y la suma como valor
        acc[curr.nombre] = sumShoping
return acc
    },{})

}

console.log(sumOfUserPurchases(usuarios1))

//Salida:
/* {
    Juan: 1020,
    Lucia: 510,
  }; */