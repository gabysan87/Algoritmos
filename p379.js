//crea una funcion que reordene un array de forma aleatoria


//crear una funcion que nos permita ordenar un array de productos segun sus categorias que retorne un objeto

//1-crear una funcion de ordenamiento del array
//2-generar un objeto con las diferentes categorias que agrupen 
//3-crear un array un vacio el cual guardara luego la categoria
//4-imprimir el objeto 

const productos = [
    { nombre: 'Laptop', categoria: 'Electrónica', precio: 1000 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 600 },
    { nombre: 'Teclado', categoria: 'Accesorios', precio: 50 },
    { nombre: 'Cargador', categoria: 'Accesorios', precio: 25 },
    { nombre: 'Camisa', categoria: 'Ropa', precio: 30 },
    { nombre: 'Pantalones', categoria: 'Ropa', precio: 40 },
    { nombre: 'Auriculares', categoria: 'Electrónica', precio: 80 },
    { nombre: 'Mochila', categoria: 'Accesorios', precio: 60 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 70 }
  ];


const orderCategories = (arr) =>{
return arr.reduce((acc, curr) => {
if (!acc[curr.categoria]) {
   acc[curr.categoria] = [];
}
acc[curr.categoria].push(curr)
return acc
},{})
}

console.log(orderCategories(productos))


  //salida
//   const resulObjet =  {
//     Electrónica: [
//       { nombre: 'Laptop', categoria: 'Electrónica', precio: 1000 },
//       { nombre: 'Teléfono', categoria: 'Electrónica', precio: 600 },
//       { nombre: 'Auriculares', categoria: 'Electrónica', precio: 80 }
//     ],
//     Accesorios: [
//       { nombre: 'Teclado', categoria: 'Accesorios', precio: 50 },
//       { nombre: 'Cargador', categoria: 'Accesorios', precio: 25 },
//       { nombre: 'Mochila', categoria: 'Accesorios', precio: 60 }
//     ],
//     Ropa: [
//       { nombre: 'Camisa', categoria: 'Ropa', precio: 30 },
//       { nombre: 'Pantalones', categoria: 'Ropa', precio: 40 },
//       { nombre: 'Zapatos', categoria: 'Ropa', precio: 70 }
//     ]
//   }