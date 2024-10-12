// Crea una función que reciba un array de objetos y lo ordene por una propiedad específica.
// Entrada:
// javascript
const estudiantes = [
    { nombre: "Carlos", nota: 85 },
    { nombre: "Ana", nota: 90 },
    { nombre: "Luis", nota: 80 }
];

const orderStudents = (arr) => {
return arr.sort((a,b) => a.nota - b.nota)
}

console.log(orderStudents(estudiantes))

// Salida Esperada:
// javascript
// [
//     { nombre: "Luis", nota: 80 },
//     { nombre: "Carlos", nota: 85 },
//     { nombre: "Ana", nota: 90 }
// ]