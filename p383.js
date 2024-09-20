// Un cifrado de sustitución simple reemplaza un carácter de un alfabeto con un carácter de un alfabeto alternativo, donde la posición de cada carácter en un alfabeto se asigna al alfabeto alternativo para codificar o decodificar.

//1- pasar todos los caracteres en minusculas 
//2- convertir string en un array
//3- crear la variable para guardar los indices
//4- encontrar el indice del string dentro del abc1 y sustituirlo por el caracter del abc2.
//5- buscar dentro de la variable ab2
//6-

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxZ";

const substitutionCipher = (str) => {
    return str.toLowerCase().split("").map((item) => {
        const saveTheIndexes = abc1.indexOf(item) 
        // return saveTheIndexes
        return saveTheIndexes !== -1 ? abc2[saveTheIndexes] : item
    })
    .join("")
};

console.log(substitutionCipher("abc")); // => "eta"
console.log(substitutionCipher("xyz")); // => "qxz"
console.log(substitutionCipher("aeiou")); // => "eirfg"

