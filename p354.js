// Contar Caracteres por Tipo:
// Se necesita un algoritmo que tome un array de strings
// y devuelva un objeto con la cantidad de caracteres alfabéticos, numéricos y especiales en cada string.
// Entrada:
const strings = ["AÑlmn=#%Tbc1089", "Ñ3M77,;7h.j-", "925?¿|¡MjN", "1oJ2"];

const countCharacters = (arr) => {
    return arr.reduce((acc, curr) => {
        const alfabeticos = curr.match(/[a-z,ñ]/gi)
        const numericos = curr.match(/[0-9]/g)
        const especiales = curr.match(/[^A-Za-z0-9\sñÑáéíóúÁÉÍÓÚüÜ]/g)
        acc[curr] = {
alfabeticos: alfabeticos.length,
numericos: numericos.length,
especiales: especiales === null  ? 0  : especiales.length
        }
return acc
    },{})
}

console.log(countCharacters(strings))


// salida:
// {
//   'AÑlmn=#%Tbc1089': { alfabeticos: 8, numericos: 4, especiales: 5 },
//   'Ñ3M77,;7h.j-': { alfabeticos: 5, numericos: 4, especiales: 4 },
//   '925?¿|¡MjN': { alfabeticos: 3, numericos: 3, especiales: 4 },
//   '1oJ2': { alfabeticos: 2, numericos: 2, especiales: 0 }
// }