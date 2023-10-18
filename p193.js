
// Sea conciso I: el operador ternario
// Se le proporciona una función describeAge/ describe_ageque toma un parámetro age(que siempre será un número entero positivo ) y hace lo siguiente:

// Si la edad es 12o menor,return "You're a(n) kid"
// Si la edad es entre 13y 17(inclusive),return "You're a(n) teenager"
// Si la edad es entre 18y 64(inclusive),return "You're a(n) adult"
// Si la edad es 65o mayor,return "You're a(n) elderly"
// Tu tarea es acortar el código tanto como sea posible. Tenga en cuenta que enviar el código proporcionado no funcionará porque hay un límite de 137 caracteres .

// Te daré algunas pistas:

// El título en sí es una pista: si no está seguro de qué hacer, siempre investigue cualquier terminología en esta descripción de la que no haya oído hablar.
// ¿ No te parece "You're a(n) <insert_something_here>"muy repetitivo el conjunto? ;) ¿Quizás podamos acortarlo?
// Escriba todo en una línea \ny los demás espacios en blanco cuentan.
// Hagas lo que hagas, no cambies lo que hace la función. Buena suerte :)

const describeAge = (age)  => {
    return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
  }

  console.log(describeAge(9));
  console.log(describeAge(65));
  console.log(describeAge(13));
  console.log(describeAge(12));