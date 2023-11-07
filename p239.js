// Queremos saber el índice de las vocales en una palabra dada, por ejemplo, hay dos vocales en la palabra super (la segunda y cuarta letras).

// Entonces, dada una cadena "super", deberíamos devolver una lista de [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTAS
// Las vocales en este contexto se refieren a: aeiouy (incluidas las mayúsculas)
// Esto está indexado desde [1..n](¡no indexado a cero!)

const vowelIndex = (str) => {
return str.split("").map((item, index) => { 
   return item.match(/[aeiouy]/gi) ? index + 1 : item
}).filter((element) => typeof element === "number")
}

console.log(vowelIndex("Mmmm"))
console.log(vowelIndex("Super"))
console.log(vowelIndex("Apple"))
console.log(vowelIndex("YoMama"))


