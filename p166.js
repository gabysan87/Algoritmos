// Recibir un string y validar si es pangrama.

const validatePangrama = (str) => {
  let abc = 26;
  let result = str
    .replace(/[^A-Za-z0-9]/g, "")
    .toUpperCase()
    .split("");

  return [...new Set(result)].sort().length == abc;
};

console.log(
  validatePangrama(
    "Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol"
  )
);

// otra opcion
const isPangram = (str) => {
  let alphabet = "abcdefghijklmnñopqrstuvwxyz";
  return alphabet.split("").every((item) => str.includes(item));
};

console.log(
  isPangram(
    "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"
  )
);

// otra opcion
const isPangram1 = (str) => {
  let alphabet = "abcdefghijklmnñopqrstuvwxyz";
  return (alphabet = [...new Set(alphabet)].length === alphabet.length)
};

console.log(
  isPangram1(
    "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"
  )
);
