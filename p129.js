
// Abreviar un nombre de dos palabras
// Escribe una función para convertir un nombre en iniciales. Este kata requiere estrictamente dos palabras con un espacio entre ellas.

// El resultado debe ser dos letras mayúsculas separadas por un punto.

// Debe tener un aspecto como este:

// Sam Harris=>S.H

// patrick feeney=>P.F

const abbrevName = (name) =>{

   return name.split(' ').map(item => item[0].toUpperCase()).join('.')
   

}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));