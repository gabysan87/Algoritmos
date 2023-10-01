// Encuentra las capitales

// Completa el método que toma una secuencia de objetos con dos claves cada uno: país o estado y capital. Las claves pueden ser símbolos o cadenas.

// El método debería devolver una serie de frases que declaren el estado o país y su capital.

// Ejemplos
// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

const capital = (capitals) => {
    //...
    return capitals.map((item) => `The capital of ${item.state||item.country} is ${item.capital}`);
  }

 const country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
console.log(capital(country_capitals)[0])

const state_capitals = [{state: 'Maine', capital: 'Augusta'}]

console.log(capital(state_capitals)[0])

const mixed_capitals = [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]

console.log(capital(mixed_capitals)[1])