// como limpiar una cadena de numeros y signos

const stringLimpiar = (str) => {
 return str.replace(/[0-9\W]/gi,"")
// return str.replace(/[^a-z]/gi,"")
// return str.replace(/[^aeiou]/gi,"") solo devolver las vocales
}
console.log(stringLimpiar("G3a97434233b6ys47a/n"))

