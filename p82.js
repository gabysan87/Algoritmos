// Crea un array de objetos que representen ciudades. Cada objeto debe tener propiedades como "nombre", "población" y "país". Luego, utiliza un método para crear una nueva propiedad en cada objeto que indique la densidad de población de la ciudad (población dividida entre la superficie de la ciudad).

//Ejemplo de entrada:
// Ejemplo de salida:

// [
//   { nombre: "Ciudad de México", población: 8918653, país: "México", superficie: 1485, densidad: 6009.7 },
//   { nombre: "Buenos Aires", población: 2891082, país: "Argentina", superficie: 203, densidad: 14239.6 },
//   { nombre: "Madrid", población: 6559748, país: "España", superficie: 604, densidad: 10856.4 }
// ]

const citys = [
  {
    nombre: "Ciudad de México",
    población: 8918653,
    país: "México",
    superficie: 1485,
  },
  {
    nombre: "Buenos Aires",
    población: 2891082,
    país: "Argentina",
    superficie: 203,
  },
  { nombre: "Madrid", población: 6559748, país: "España", superficie: 604 },
];

const densidad = (arr) => {
  return arr.map((item) => {
    return {
      ...item,
      densidad: item.población / item.superficie,
    };
  });
};

console.log(densidad(citys));
