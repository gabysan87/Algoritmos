// Verificar permisos

// Si el usuario no tiene permisos, muestra "Acceso denegado"
// Si tiene permisos, muestra "Acceso permitido"
const verificarPermisos = (tienePermiso) => {
  return tienePermiso ? "Acceso permitido" : "Acceso denegado";
};

console.log(verificarPermisos(true));
console.log(verificarPermisos(false));
