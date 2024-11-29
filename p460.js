// Enunciado: Dado un array de números, utiliza reduce para obtener la suma total, pero resta el valor del índice de cada número al total acumulado.




const arrayNumb = (arr) => {
    return arr.reduce((acc, curr, index) =>  (acc + curr) - index,0 )
  
}

console.log(arrayNumb([10, 20, 30, 40]))

// Salida => 96 // (10 - 0) + (20 - 1) + (30 - 2) + (40 - 3)