
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
// PD: Puedes usar \nin string para saltar a la siguiente línea.

// Nota: se deben agregar nuevas líneas entre las filas, pero no debe haber ninguna nueva línea al final. Si no está seguro del formato, consulte las pruebas de muestra.


const multiTable = (number) => {
    const table = []
	for(let i = 1; i <= 10; i++) {
		table.push(`${i} * ${number} = ${i*number}`)
	}
	return table.join('\n')


  }

console.log(multiTable(5));
console.log(multiTable(1))