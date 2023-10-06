// escribe una funcion que tome un array de string y devolver en un nuevo array los string que sean palindromos

const palindromo = (array) => {
   return array.filter(word => word === word.split("").reverse().join(""))
}


console.log(palindromo(["oso", "arepera", "casa","reconocer", "solos"]))

