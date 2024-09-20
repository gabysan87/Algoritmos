// Agrupar personas por edad
// Problema: Dado un array de personas, agrupa a las personas por su edad.
let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 25 },
  { nombre: "Maria", edad: 30 }
];

const groupPeopleByAge = (arr) => {
    return arr.reduce((acc, {nombre,edad}) => {
        //curr :  Es el objeto actual del arreglo durante cada iteración, que contiene nombre y edad.
    // const { nombre, edad } = curr;
    //si la edad ya existe como clave en el acumulador, añadimos el nombre 
    if ( acc[edad]){
        acc[edad].push(nombre)
    }else {
        //si no existe, creamos un nuevo array con el nombre
        acc[edad] = [nombre]
    }
    //otra solucion con el operador ternario 
    //  acc[edad] ? acc[edad].push(nombre) : acc[edad] = [nombre];
    return acc
    },{})
    
}
console.log(groupPeopleByAge(personas))

// Salida : {
//   "25": ["Juan", "Pedro"],
//   "30": ["Ana", "Maria"]
// }