// Ordenar objetos por una propiedad específica

const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Mary', age: 28 },
];

const orderPerson = (arr) => {
return arr.sort((a,b) => a.age - b.age).map((person) => person.name)
}

console.log(orderPerson(people))
// Salida: ['Jane', 'Mary', 'John']