
// Convertir una matriz de cadenas en una matriz de números
// Oh no!
// ¡Algún desarrollador web realmente divertido te dio una secuencia de números de su respuesta API como una secuencia de cadenas !

// Debe convertir toda la matriz al tipo correcto.

// Cree la función que toma como parámetro una secuencia de números representados como cadenas y genera una secuencia de números.

// es decir: ["1", "2", "3"]eso[1, 2, 3]

// Tenga en cuenta que también puede recibir flotadores.


const toNumberArray = (stringarray) => {

   return  stringarray.map(Number)
}
console.log(toNumberArray(["1.1","2.2","3.3"]))