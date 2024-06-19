// Calcular Edad Promedio por País:
// Se requiere un algoritmo que tome un array de objetos de personas con su edad y país,
//  y devuelva un objeto con la edad promedio de las personas para cada país.
//  Entrada:

const personas = [
  { nombre: "Juan", edad: 25, pais: "Argentina" },
  { nombre: "María", edad: 30, pais: "España" },
  { nombre: "Pedro", edad: 20, pais: "Argentina" },
  { nombre: "Ana", edad: 35, pais: "España" },
  { nombre: "Luis", edad: 40, pais: "México" },
];

const averageAgeCountry = (arr) => {
  return arr.reduce((acc, curr, _index, array) => {
    const personsFiltered = array.filter((item) => item.pais === curr.pais);
    acc[curr.pais] =
      personsFiltered.reduce((acum, current) => acum + current.edad, 0) /
      personsFiltered.length;

    return acc;
  }, {});
};
console.log(averageAgeCountry(personas));
//   Salida:
// {
//     'Argentina': 22.5,
//     'España': 32.5,
//     'México': 40
//   }
