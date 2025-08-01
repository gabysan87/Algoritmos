// Ejercicio 1: Mostrar saludo si hay nombre (cortocircuito &&)
// Entrada:
// Objetivo:
// Mostrar un saludo como "Hola, Emma" solo si hay un nombre.
const nombre = "Gaby";

const result = (name) => {
  return (name && `Hola ${name}`) || "NO EXISTE NOMBRE";
};

console.log(result(nombre));

// Ejercicio 2: Mostrar "Invitado" si el nombre está vacío (||)
// Entrada:
// const nombre = "";
// Objetivo:
// Asignar el valor "Invitado" si nombre está vacío o es falsy.

const name = "";

const show = (string) => {
  return string || "Invitado";
};

console.log(show(name));

// Ejercicio 3: Verificar edad con ternario
// Entrada:
const edad = 18;
// Objetivo:
// Mostrar "Mayor de edad" si tiene 18 o más, o "Menor de edad" si no.

const verifyAge = (age) => {
  return age >= 18 ? "Mayor de edad" : "Menor de edad";
};
console.log(verifyAge(edad));

// Ejercicio 4: Acceso solo si usuario está activo y es administrador (&&)
// Entrada:
const activo = true;
const admin = false;
// Objetivo:
// Mostrar "Acceso permitido" solo si ambas condiciones son verdaderas.

const access = (act, adm) => {
  return act && adm ? "Acceso permitido" : " Acceso denegado";
};
console.log(access(activo, admin));

// Ejercicio 5: Asignar color según estado (? : anidado)
// Entrada:
// const estado = "advertencia"; // puede ser "ok", "advertencia" o "error"
// Objetivo:
// Asignar "verde" si es "ok", "amarillo" si es "advertencia" y "rojo" si es "error".
const estado = "error";

const assignValue = (state) => {};

console.log(assignValue(estado));

