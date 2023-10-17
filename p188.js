// 5.- Tabla de multiplicar: Escribe un programa que muestre la tabla de multiplicar de un número utilizando un bucle for. Debe mostrar las multiplicaciones de ese número del 1 al 10.

const tableMultiplique = (number) => {
    let multiplique = 0
    for (let i = 0; i <= 10; i++){
        multiplique = number * i
        console.log(`${number} x ${i} = ${multiplique}`)

    }

}

console.log(tableMultiplique(3))