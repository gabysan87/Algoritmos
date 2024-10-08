// Contar Ocurrencias
// Enunciado: Crea una función que cuente cuántas veces aparece cada categoría en un array de objetos.
// Entrada:
// javascript
const items = [
    { tipo: 'fruta', nombre: 'manzana' },
    { tipo: 'fruta', nombre: 'banana' },
    { tipo: 'verdura', nombre: 'zanahoria' }
];

const tellingOccurrences = (arr) => {
return arr.reduce((acc, curr) => {
// Si la categoría ya existe, incrementa el contador, si no, inicialízalo en 1
acc[curr.tipo] = (acc[curr.tipo] || 0) + 1
    return acc
},{})
}

console.log(tellingOccurrences(items))

// Salida:
// javascript
// { fruta: 2, verdura: 1 }