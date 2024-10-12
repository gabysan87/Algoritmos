const animales = [
    { tipo: 'mamífero', nombre: 'perro' },
    { tipo: 'ave', nombre: 'canario' },
    { tipo: 'mamífero', nombre: 'gato' },
    { tipo: 'reptil', nombre: 'serpiente' },
    { tipo: 'ave', nombre: 'águila' }
];

const countAnimals = (arr) => {
    return arr.reduce((acc, curr) => {

    acc[curr.tipo] = (acc[curr.tipo] || 0) + 1

    // acc[curr.tipo] = acc[curr.tipo] ? acc[curr.tipo] + 1 : 1
    return acc
    },{})
}

console.table(countAnimals(animales))
// {
//     'mamífero': 2,
//     'ave': 2,
//     'reptil': 1
// }