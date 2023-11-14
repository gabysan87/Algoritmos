// encontrar las capitales
// Instrucciones
// Escribe una función que tome una sola cadena ( word) como argumento. La función debe devolver una lista ordenada que contenga los índices de todas las letras mayúsculas de la cadena.

// Ejemplo (Entrada --> Salida)
// "CodEWaRs" --> [0,3,4,6]

const capitals = (word) => {
// return word.split("").map((element,index) => element === element.toUpperCase() ? index : false).filter((item) => item !== false)

return [...word].map((element, index) => element === element.toUpperCase() ? index : -1).filter((item)=> item >= 0)
};

console.log(capitals('CodEWaRs'))