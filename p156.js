// declara una variable que reciba como parametro un array y un numero multiplicador donde el numero se a va a multiplicar por cada elemento de ese array 


const numberMultiplique = (arr, num) => {
    return arr.map((item) => item * num)
}

console.log(numberMultiplique([2,3,4],5))

const numberMultiplique1 = (arr, num) => {
    let result = []
    for (let i = 0; i <= arr.length-1; i++){
      result.push(arr[i] * num)
 
    }
    return result
}

console.log(numberMultiplique1([2,3,4],5))

// programacion declarativa e imperativa

// funcion expresiva y declarativa