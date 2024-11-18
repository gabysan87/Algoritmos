//Dado un array de objetos que representan personas (con propiedades como nombre, edad, y ciudad), crea una función que filtre las personas que son mayores de 18 años. La función debe devolver un array con los nombres de las personas que cumplen con este criterio.
//entrada:
const personas = [
  { nombre: "Juan", edad: 20, ciudad: "Madrid" },
  { nombre: "Ana", edad: 17, ciudad: "Barcelona" },
  { nombre: "Luis", edad: 25, ciudad: "Sevilla" },
  { nombre: "Marta", edad: 15, ciudad: "Valencia" },
];

const filterOlderPeople = (arr) => {

return arr.filter((item) => item.edad > 18).map((element) => element.nombre)
};
console.log(filterOlderPeople(personas));

//salida:
//["Juan", "Luis"]

//Dado un array de objetos con información sobre productos (con propiedades como nombre y precio), crea una función que calcule la suma total de los precios de todos los productos.
//Entrada:

const productos = [
  { nombre: "Camiseta", precio: 15 },
  { nombre: "Pantalones", precio: 40 },
  { nombre: "Zapatos", precio: 60 },
];

const calculateTotalSum = (array) => {
  return array.reduce((acc, curr) => {
    return acc + curr.precio;
  }, 0);
};

console.log(calculateTotalSum(productos));

//Salida:
//115

// Dado un array de objetos que representan estudiantes (con propiedades como nombre y nota), crea una función que ordene los estudiantes de mayor a menor según su nota. La función debe devolver el array de objetos ordenado.
// entrada:
const estudiantes = [
  { nombre: "Pedro", nota: 8 },
  { nombre: "Lucía", nota: 9 },
  { nombre: "Carlos", nota: 7 },
  { nombre: "Marta", nota: 10 },
];

const sortStudents = (array) => {
  return array.sort((a, b) => b.nota - a.nota);
};

console.log(sortStudents(estudiantes));

//salida:
//[
//{ nombre: "Marta", nota: 10 },
//{ nombre: "Lucía", nota: 9 },
//{ nombre: "Pedro", nota: 8 },
//{ nombre: "Carlos", nota: 7 }
//]
