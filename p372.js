//imprime los nro del 1 al 20

for (let i =1; i <= 10; i++){
    console.log(i)
}


//dado un array de nro. del 1 al 10 multiplicar por 2 utilizando el bucle el while

let array = [1,2,3,4,5,6,7,8,9,10];
// let i = 0;

// while( i <= array.length-1){
//   console.log(array[i]* 2);
//   i++;
// }


// let i = 2;
// while(i <= 20){
//     console.log(i)
//     i+=2
// }

// realizar una funcion donde itere el while y devolver los nros pares de un array dando solamente el largo del array
// retorna los pares 


const arrWhile = (number = 10) => {
let result = []
let i = 0
while(i < number){
i % 2 === 0  ? result.push(i) : null
    i++
}
return result
}
console.log(arrWhile())