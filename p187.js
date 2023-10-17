// Entrenamiento JS #29: métodos de arrayObject---concat() y join()
// En esta lección aprendemos dos métodos de matriz: concat()y join(). Hemos visto concat()en el método stringObject, pero el método de arrayObject es diferente del método stringObject, por lo que debemos aprender nuevamente. Al estudiar el método stringObject split(), simplemente hemos aprendido el join()método. En esta ocasión lo revisaremos y explicaremos detalladamente.

const bigToSmall = (arr) => {
    //coding here...

    return  [].concat(...arr).sort((a, b) => b - a).join('>');
  }


  console.log(bigToSmall([[1,2],[3,4],[5,6]]))

//   primero coloco un array vacio para luego concatenar las matrices, con el spread me traigo la copia del array, lo siguiente es ordenar de forma ascendente con el metodo .sort y al final utilizo el metodo join para ingresar el separador >