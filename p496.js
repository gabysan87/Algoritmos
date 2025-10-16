// 🧩 2. Convertir a mayúsculas
// Entrada: ["emma", "pava", "frontend"]
// 👉 Salida esperada: ["EMMA", "PAVA", "FRONTEND"

const words = ["emma", "pava", "frontend"];
const toUpperCase = (arr) => {
  return arr.map((word) => word.toUpperCase());
};
console.log(toUpperCase(words));
