// Argumentos para la suma binaria
// Dada una matriz, agregue todos los elementos numéricos y devuelva el equivalente binario de esa suma; Para que el código sea a prueba de balas, cualquier otra cosa que no sea un número debe agregarse como 0, ya que no se puede agregar.

// Si su idioma puede manejar binarios flotantes, suponga que la matriz no contendrá flotantes ni dobles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
// Esta es una modificación del Kata: Array2Binary additionespero que les guste

const arr2bin = (arr) => {
    return arr.filter((item) => typeof (item) === "number").reduce((acc, curr) => acc + curr, 0).toString(2)

//    return arr.reduce((sum, cur) => typeof(cur) === 'number' ? sum + cur : sum, 0).toString(2);
}


console.log(arr2bin([1,2,3,4,5]))
console.log(arr2bin([1,10,100,1000]))
console.log(arr2bin([null]))
console.log(arr2bin([true,true,false,15]))