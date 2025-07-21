// Verificar dos condiciones

// Si el usuario está logueado y es admin, muestra "Acceso total"
// Si está logueado pero no es admin, muestra "Acceso limitado"
// Si no está logueado, muestra "Debes iniciar sesión"
const verificarAcceso = (isLogged, isAdmin) => {
  if (isLogged && isAdmin) {
    return "Acceso total";
  } else if (isLogged || !isAdmin) {
    return "Acceso limitado";
  } else {
    return "Debes iniciar sesión";
  }
};

console.log(verificarAcceso(true, false));
console.log(verificarAcceso(true, true));
console.log(verificarAcceso(false, false));
console.log(verificarAcceso(false, true));
