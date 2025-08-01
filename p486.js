const dataType = {
  name: "Renzo",
  age: 35,
  direccion: { ciudad: "Rancagua" },
  estadoCivil: null,
  hobbies: ["leer", "jugar"],
  example: (animal) => animal.length,
};

const sampleDataType = (data) => {
  return Object.entries(data);
};

console.table(sampleDataType(dataType));
console.log(dataType.example("loro"));
