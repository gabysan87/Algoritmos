//sumar todos los numeros

const sumarNumeros = (...data) => {
  return data
    .filter((elemt) => typeof elemt === "number")
    .reduce((acc, curr) => acc + curr, 0);
};
console.log(sumarNumeros("hola", 5, 3, true, 10, undefined));

//convertir en mayuscula solo los string

const mayusculasStrings = (...elemt) => {
  return elemt
    .filter((item) => typeof item === "string")
    .join()
    .toUpperCase();
};
console.log(mayusculasStrings("Emma", 123, "hola", true, "react"));
// mayusculasStrings("Emma", 123, "hola", true, "react")
// ["EMMA", "HOLA", "REACT"]

// 🧠 Ejercicio 5: Crear un objeto con el conteo de cada tipo
// entrada : contarTipos("hola", 5, true, null, "Emma", 9, false)
// salida : {
//   string: 2,
//   number: 2,
//   boolean: 2,
//   object: 1
// }

const groupEachType = (...data) => {
  //   const filterString = data.filter((str) => typeof str === "string").length;
  //   const filterNumber = data.filter((num) => typeof num === "number").length;
  //   const filterBoolean = data.filter((bol) => typeof bol === "boolean").length;
  //   const filterObject = data.filter((obj) => typeof obj === "object").length;
  //   return {
  //     string: filterString,
  //     number: filterNumber,
  //     boolean: filterBoolean,
  //     object: filterObject,
  //   };
  return data.reduce((acc, curr) => {
    const tipo = typeof curr;
    acc[tipo] = (acc[tipo] || 0) + 1;
    return acc;
  }, {});
};
console.log(groupEachType("hola", 5, true, null, "Emma", 9, false));
