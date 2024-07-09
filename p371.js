// Ordenar una matriz por valor e índice

// Para ordenar, el índice comienza en 1, ¡NO en 0!
// La clasificación tiene que ser ascendente.
// La matriz nunca será nula y siempre contendrá números.

// Ejemplo:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

const sortGiftCode = (code) => {
    
    return code.split('').sort().join('')
  }

  console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'))
  console.log(sortGiftCode('pqksuvy'))