// Su jefe decidió ahorrar dinero comprando un software de reconocimiento óptico de caracteres de precio reducido para escanear el texto de novelas antiguas en su base de datos. Al principio parece capturar bien las palabras, pero rápidamente notas que arroja muchos números en lugares aleatorios del texto.

// Ejemplos (entrada -> salida)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Tus acosados ​​compañeros de trabajo te buscan para encontrar una solución para tomar este texto confuso y eliminar todos los números. Su programa tomará una cadena, borrará todos los caracteres numéricos y devolverá una cadena con espacios y caracteres especiales ~#$%^&!@*():;"'.,?intactos.
const stringClean = (s) => {
    // Function will return the cleaned string
   
   return s.replace(/[0-9]/g, '')

  }

  console.log(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"))
  console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"))