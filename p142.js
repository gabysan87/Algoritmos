// Hexadecimal a decimal
// Complete la función que convierte un número hexadecimal (dado como una cadena) en un número decimal.
const hexToDec = (hexString) => {
    //your code here
    return parseInt(hexString, 16)
  }

 console.log(hexToDec("1"), 1);
 console.log(hexToDec("a"), 10);
 console.log(hexToDec("10"), 16);
 console.log(hexToDec("FF"), 255);
 console.log(hexToDec("-C"), -12);

//  La función parseInt() permite analizar una cadena y devolver su valor numérico en la base especificada. En este caso, vamos a usar la base 16 para convertir un número hexadecimal a decimal