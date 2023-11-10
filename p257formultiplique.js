// tabla de multiplicar para numeros
// Tu objetivo es devolver la tabla de multiplicar porque numbersiempre es un número entero del 1 al 10.

// Por ejemplo, una tabla de multiplicar (cadena) para number == 5se parece a la siguiente:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// PD: Puedes usar \n in string para saltar a la siguiente línea.

// Nota: se deben agregar nuevas líneas entre las filas, pero no debe haber ninguna nueva línea al final. Si no está seguro del formato, consulte las pruebas de muestra.

const multiTable = (number) => {
let tabla = "";
  for (let i = 1; i <= 10; i++) {
    tabla += i + " * " + number + " = " + (i * number);
    if (i < 10) {
      tabla += "\n"; // Agregar una nueva línea entre las filas, excepto la última.
    }
  }
  return tabla;
}

//2do ejemplo
// const multiTable = (number) => {
// const table = []
// 	for(let i = 1; i <= 10; i++) {
// 		table.push(`${i} * ${number} = ${i*number}`)
// 	}
// 	return table.join('\n')
// }


// 3er ejemplo
// const multiTable = (number) => {
//   let table = '';
//   for(let i = 1; i <= 10; i++){
//     table += `${i} * ${number} = ${i*number}\n`
//   }
//   return table.slice(0, -1)
// }


// const multiTable = (number) => {

//   let numToMultiplicate= []
//    for (let j = 1; j <= 10; j++) {
//        numToMultiplicate.push(j)
//    }
//    return numToMultiplicate.map((item)=> ${item} * ${number} = ${number*item}).join("\n")

//  }