// Queremos transformar un array de objetos a un array donde cada elemento es una concatenación de valores de propiedades específicas de cada objeto
const productos = [
  { id: 1, nombre: "Manzana", precio: 0.5 },
  { id: 2, nombre: "Naranja", precio: 0.75 },
  { id: 3, nombre: "Plátano", precio: 0.35 }
];

const separador = " - ";
let resultado = productos.map(((item) => `${item.nombre} ${separador} ${item.precio}` ))

const result = (arr, factor) => {
    
    // return arr.map((item) => `${item.nombre} ${factor} ${item.precio}` )
}

console.log(resultado)
// console.log(result(productos, separador))
// Salida: [ "Manzana - 0.5", "Naranja - 0.75", "Plátano - 0.35" ]