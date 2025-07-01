// Desestructuracion de objetos
// Asignacion Desestructurante

// renombrar
// const {nombre: nombre2} = persona;
// console.log( nombre2)

// const {nombre, edad, clave} = persona;

// console.log( nombre)
// console.log( edad)
// console.log( clave)

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.clave)
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const useContenxt = ({ clave, nombre, edad, rango = "Capitan" }) => {
  // console.log(nombre, edad, rango)
  return {
    nombreClave: clave,
    anios: edad,
    lating: {
      lat: 144555,
      lng: -12.4444,
    },
  };
};

const {
  nombreClave,
  anios,
  lating: { lat, lng },
} = useContenxt(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
