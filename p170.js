// como limpiar una cadena de numeros y signos

const strinLimpiar = (str) => {
//  return str.replace(/[0-9\W]/gi," ")
return str.replace(/[^a-z]/gi,"")
// return str.replace(/[^aeiou]/gi,"")

}

console.log(strinLimpiar("G3a97434233b6ys47a/n"))

