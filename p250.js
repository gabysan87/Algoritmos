// Escribe una función para convertir un nombre en iniciales. Este kata requiere estrictamente dos palabras con un espacio entre ellas.

// El resultado debe ser dos letras mayúsculas separadas por un punto.

// Debe tener un aspecto como este:

// Sam Harris=>S.H

// patrick feeney=>P.F

// Abreviar un nombre de dos palabras

const abbrevName = (name) => {
  return name
    .split(" ")
    .map((item) => item[0])
    .join(".")
    .toUpperCase();
};
console.log(abbrevName("Sam Harris"));
