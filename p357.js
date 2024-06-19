// Se necesita un algoritmo que agrupe un array de objetos en diferentes categorías según los rangos de valores de una propiedad específica.
// excelente: 90 a 100
// bueno 80 a 89
// regular 70 a 79
// malo 0 a 69

// Entrada:
const estudiantes = [
  { nombre: 'Juan', puntaje: 85 },
  { nombre: 'María', puntaje: 92 },
  { nombre: 'Pedro', puntaje: 78 },
  { nombre: 'Ana', puntaje: 95 },
  { nombre: 'Luis', puntaje: 67 }
];

const rankCategory = (array) => {
        const excelent = array.filter((item) => item.puntaje >= 90 )
        const well = array.filter((item) => item.puntaje > 80 &&  item.puntaje  <= 89)
        const regular = array.filter((item) => item.puntaje > 70 &&  item.puntaje  <= 79)
        const bad = array.filter((item) => item.puntaje > 0 &&  item.puntaje  <= 69)
        return {
            Excelente: excelent,
            Bueno: well,
            Regular: regular,
            Malo: bad
        }

}
console.log(rankCategory(estudiantes))
// Salida:
// {
//   'Excelente': [
//     { nombre: 'María', puntaje: 92 },
//     { nombre: 'Ana', puntaje: 95 }
//   ],
//   'Bueno': [
//     { nombre: 'Juan', puntaje: 85 }
//   ],
//   'Regular': [
//     { nombre: 'Pedro', puntaje: 78 }
//   ],
//   'Malo': [
//     { nombre: 'Luis', puntaje: 67 }
//   ]
// }