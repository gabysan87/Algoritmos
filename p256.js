// Obtener pares clave/valor como matrices
// Complete la función keyAndValues ​​para que reciba un objeto y devuelva las claves y los valores como matrices separadas.

// Ejemplo:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Puntos de estilo (solo JS/CoffeeScript) : este kata solo prueba datos que usan notación literal de objeto (objetos simples). Para obtener más estilo, ¿puede obtener su método para buscar objetos que amplíen su prototipo?

const keysAndValues = (data)=> {
    // let result = Object.values(data)
    // return [Object.keys(data),result]

    return [Object.keys(data), Object.values(data)];
  }

 console.log(keysAndValues({a: 1, b: 2, c: 3}))
 console.log(keysAndValues({}));
 console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'}))