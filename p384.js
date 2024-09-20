// dado un array un de nro entero devolver un objeto con las propiedades pares e impares,  donde se va asignar la cantidad segun se encuentre en el array 

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const contarParesEImpares =(numeros) => {
    return numeros.reduce((acc, number) => {
        number % 2 === 0 ? acc.pares++ : acc.impares++;
    //   if (number % 2 === 0) {
    //      Si el número es par, incrementa el contador de pares
    //     acc.pares++;
    //   } else {
    //      Si el número es impar, incrementa el contador de impares
    //     acc.impares++;
    //   }
      return acc;
    }, { pares: 0, impares: 0 }); // Inicializa el objeto con pares e impares en 0
  }

  
  console.log(contarParesEImpares(numeros));
  
  // Salida esperada:
  // { pares: 5, impares: 5 }
  