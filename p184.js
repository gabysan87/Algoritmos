
// /Escribe una funcion que reciba como parametro un array de strings y devuelva un nuevo
//  array con todos los string que son palindromos"/

 const isPalindrome = (arr) =>{
    return arr.filter((item)=> item.split("").reverse().join("") === item)
}

console.log(isPalindrome(["asa","arepera","hola"]))
