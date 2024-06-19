// Se requiere un algoritmo que tome un array de objetos y los agrupe en un nuevo objeto según el valor de una de sus propiedades.

// Entrada:
const personas = [
  { nombre: 'Juan', genero: 'M' },
  { nombre: 'María', genero: 'F' },
  { nombre: 'Pedro', genero: 'M' },
  { nombre: 'Ana', genero: 'F' }
];

const groupByGender = (arr) => {
return arr.reduce((acc, curr, _index, array) => {
    const personFiltered = array.filter((item) => 
    item.genero === curr.genero )
    acc[curr.genero] = personFiltered 
    return acc
},{})
}

console.log(groupByGender(personas ))

// Salida:
// {
//   'M': [
//     { nombre: 'Juan', genero: 'M' },
//     { nombre: 'Pedro', genero: 'M' }
//   ],
//   'F': [
//     { nombre: 'María', genero: 'F' },
//     { nombre: 'Ana', genero: 'F' }
//   ]
// }