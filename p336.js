// Agrupa objetos en un nuevo array según un rango de edades.

// Entrada:

 const personas = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Carlos', edad: 25 },
  { nombre: 'Luisa', edad: 30 }
];

const result = (arr) => {
    const ageRange = {
      "0-20": arr.filter((item) => item.edad >= 0 && item.edad <= 20),
      "21-30": arr.filter((elem) => elem.edad >= 21 && elem.edad <= 30),
      "31+": arr.filter((elm) => elm.edad >= 31),
    };
    return ageRange;
  };
  
  console.table(result(personas));
// Salida:
// { '0-20': [{ nombre: 'Juan', edad: 20 }], '21-30': [{ nombre: 'Ana', edad: 22 }, { nombre: 'Carlos', edad: 25 }], '31+': [{ nombre: 'Luisa', edad: 30 }] }