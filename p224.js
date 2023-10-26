// realizar una funcion que reciba un array de strings y debe retornar un objeto
//enumerando las propiedades del 0 a la n donde su valor sea la longitud de cada string. Entrada: ["Miami", "California"], Salida: { '0': 5, '1': 10 }

const arrOfString = (arr) => {
  let obj = {};
  arr.map((item, index) => {
    obj[index] = item.length;
  });

  return obj;
};

console.log(arrOfString(["Miami", "California"]));
