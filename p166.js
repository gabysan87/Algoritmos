// Recibir un string y validar si es pangrama.

const validatePangrama = (str) => {
  let abc = 26;
  let result = str.replace(/[^A-Za-z0-9]/g, "").toUpperCase().split("");

  return [...new Set(result)].sort().length == abc;
};

console.log(validatePangrama("Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol"));

//2da opcion
const isPangram = (str) => {
  let alphabet = "abcdefghijklmnñopqrstuvwxyz";
  return alphabet.split("").every((item) => str.includes(item));
};

console.log(isPangram("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"));

// 3era opcion
const isPangram1 = (str) => {
  let alphabet = "abcdefghijklmnñopqrstuvwxyz";
  return (alphabet = [...new Set(str)].length === alphabet.length)
};
console.log(isPangram1("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"));


// ++++++++
const istPangrama = (str) => {

return [...new Set(str.toLowerCase().replace(/[^A-Za-zñ]+/g))].length === 27
}

console.log(istPangrama("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"))