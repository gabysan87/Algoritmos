// crea una funcion que reciba como funcion un array de string y devolver en un nuevo array las palabras que sean palindromo

const palindrome = (arr) => {
  return arr.filter((item) => item.split("").reverse().join("") === item);
};

console.log(
  palindrome(["oso", "hola", "arepera", "ana", "mundo", "anitalavalatina"])
);
// [ 'oso', 'arepera', 'ana', 'anitalavalatina' ]

const str = "Hola Mundo"
console.log(str.split())
console.log(str.split(""))
console.log(str.split(" "))
console.log(str.split("-"))