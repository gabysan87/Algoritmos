// Dado un array de objetos que representan personas, crea una función que agrupe a las personas por su edad.
// Entrada:
// javascript
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 25 }
];

const countPerson = (arr) => {
    return arr.reduce((acc, curr) => {
        // Si la edad ya existe, agrega la persona al grupo de esa edad
        if(!acc[curr.edad]) {
            acc[curr.edad] = [] // Inicializa un array si no existe
        }
        //añade a la persona al grupo correspondiente a su edad
        acc[curr.edad].push(curr.nombre)
        return acc
    },{})
}

console.table(countPerson(personas))

// Salida Esperada:
// javascript
// {
//     25: [{ nombre: "Juan", edad: 25 }, { nombre: "Pedro", edad: 25 }],
//     30: [{ nombre: "Ana", edad: 30 }]
// }