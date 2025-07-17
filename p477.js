//  Ejercicio 1: Verificar edad y membresía
// Enunciado:
// Escribe una función que reciba una edad y un valor booleano que indica si la persona tiene membresía. Solo puede entrar si tiene más de 18 años y tiene membresía.
// puedeEntrar(20, true); // true
// puedeEntrar(17, true); // false
// puedeEntrar(25, false); // false

const verificarEdad = (age, bol) => {
  return age > 18 && bol === true;
};

console.log(verificarEdad(20, true));
console.log(verificarEdad(17, true));
console.log(verificarEdad(25, false));

//  Ejercicio 2: Mostrar mensaje de bienvenida
// Enunciado:
// Escribe una función que reciba un nombre de usuario. Si el nombre existe (es truthy), devuelve "Bienvenido, [nombre]". Si no, devuelve "Invitado".

const mostrarMensaje = (dato) => {
  return (dato && `Bienvenido, ${dato}`) || "Invitado";
  //   return dato ? `Bienvenido ${dato}` : "Invitado";
  //   if (dato) {
  //     return `Bienvenido ${dato}`;
  //   } else {
  //     return "Invitado";
  //   }
};
console.log(mostrarMensaje("Emma")); // "Bienvenido, Emma"
console.log(mostrarMensaje("")); // "Invitado"

const edad = 0;

if (edad) {
  console.log("Tiene edad");
} else {
  console.log("Edad no válida");
}

// Ejercicio 3: Completa la función
// Completa esta función para que retorne "Válido" si el valor es truthy, y "Inválido" si es falsy.

const validarDato = (dato) => {
  return dato ? "Valido" : "Invalido";
};

console.log(validarDato("Hola")); // "Válido"
console.log(validarDato(0)); // "Inválido"
console.log(validarDato([])); // "Válido"
console.log(validarDato(undefined)); // "Inválido"

// Ejercicio 4: Detectar valores falsy en un array

// const datos = [0, 1, "", "JS", null, [], {}, false, true];

// const falsyValues = datos.filter((valor) => !valor);
// console.log(falsyValues);

const datos = [0, 1, "", "JS", null, [], {}, false, true];

const falsyValues = datos.filter((valor, index) => {
  const esFalsy = !valor;
  console.log(
    `Índice ${index}: valor = ${JSON.stringify(valor)}, !valor = ${esFalsy}`
  );
  return esFalsy; // solo pasa al nuevo array si esto es true
});

console.log("Valores falsy encontrados:", falsyValues);

const limpiarEntrada = (valor) => {
  return valor || "Sin datos";
};

console.log(limpiarEntrada("Hola")); //
console.log(limpiarEntrada("")); //
console.log(limpiarEntrada(null)); //
console.log(limpiarEntrada("ChatGPT"));
