// Contar Palabras en un Texto:
// Se necesita un algoritmo que tome un texto
// y devuelva un objeto con la cantidad de ocurrencias de cada palabra en el texto.
// Entrada:
const texto =
  "La música es arte. El arte inspira. La creatividad es libertad. La libertad es vida. La vida es un sueño. Los sueños se hacen realidad. La realidad es sorprendente. La sorpresa es alegría.";

const countWord = (string) => {
  const result = string.replace(/[^\w\sñáéíóú]/g, "");
  return result.split(" ").reduce((acc, curr, _index, array) => {
    const count = array.filter((element) => element === curr).length;
    acc[curr] = count;
    return acc;
  }, {});
};

console.log(countWord(texto));
//Salida:
// {
//     La: 6,
//     'música': 1,
//     es: 6,
//     arte: 2,
//     El: 1,
//     inspira: 1,
//     creatividad: 1,
//     libertad: 2,
//     vida: 2,
//     un: 1,
//     'sueño': 1,
//     Los: 1,
//     'sueños': 1,
//     se: 1,
//     hacen: 1,
//     realidad: 2,
//     sorprendente: 1,
//     sorpresa: 1,
//     'alegría': 1
//   }
