// Transformar un Array de Objetos a un Solo Objeto
// Este algoritmo toma un array de objetos y lo transforma en un único objeto, donde cada clave es una propiedad única del objeto y los valores son arrays de los valores correspondientes.
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
];

const transfArray = (arr, prop) => {
    return arr.reduce((acc, curr) => {
        const key = curr[prop] // Obtenemos el valor de la propiedad específica

        // Operador ternario:
    // Si acc[key] ya existe (ya hemos encontrado este 'role'), agregamos "{...}" al array.
    // Si acc[key] no existe (es la primera vez que encontramos este 'role'), creamos un nuevo array con "{...}".
        acc[key] = acc[key] ? [...acc[key], curr] : [curr] 
 return acc
    })
}

console.log(transfArray(users, 'role'));
// Resultado: { admin: [{...}, {...}], user: [{...}] }