// Dadas dos cadenas compuestas por +y -, devuelve una nueva cadena que muestra cómo interactúan las dos cadenas de la siguiente manera:

// Cuando lo positivo y lo positivo interactúan, siguen siendo positivos .
// Cuando lo negativo y lo negativo interactúan, siguen siendo negativos .
// Pero cuando lo negativo y lo positivo interactúan, se vuelven neutrales y se muestran como el número 0.
// Ejemplo resuelto
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Ejemplos
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"
// Notas
// Las dos cuerdas tendrán la misma longitud.

const neutralise = (s1, s2) => {
    let resultado = "";
    for (let i = 0; i < s1.length; i++) {
        let char1 = s1[i];
        let char2 = s2[i];

        if(char1 == "+" && char2 == "+"){
            resultado += "+";
        }else if(char1 == "-" && char2 == "-"){
            resultado += "-";
        }else{
            resultado += "0";
    }
  }return resultado

//  return s1.split('').map((element,index) => element === s2[index] ? element : 0).join('')
}

console.log(neutralise("--++--", "++--++"), "000000");
console.log(neutralise("-+-+-+", "-+-+-+"), "-+-+-+");
console.log(neutralise("-++-", "-+-+"), "-+00");
console.log(neutralise("--++", "++++"), "00++");
console.log(neutralise("+++--+---", "++----++-"), "++0--000-");
console.log(neutralise("-----", "-----"), "-----");
console.log(neutralise("-+", "++"), "0+");
console.log(neutralise("--", "-+"), "-0");