// Plantillas de cadenas: corrección de errores n.° 5
// ¡Oh, no! Timmy no ha seguido las instrucciones con mucho cuidado y olvidó cómo usar la nueva función Plantilla de cadena. ¡Ayuda a Timmy con su plantilla de cadena para que funcione como él espera!

const buildString = (...template) => {
  return `I like ${template.join(", ")}!`;
};

console.log(buildString("Cheese", "Milk", "Chocolate"));
console.log(buildString("Cheese", "Milk"));
console.log(buildString("Chocolate"));
