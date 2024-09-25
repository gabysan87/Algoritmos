//  Lista de productos únicos con cantidad total vendida

let ventas3 = [
    { producto: "Manzana", cantidad: 10 },
    { producto: "Plátano", cantidad: 5 },
    { producto: "Manzana", cantidad: 8 },
    { producto: "Fresa", cantidad: 3 }
  ];


  const productUnique = (arr) => {
  return [...new Set(arr.map((item) => item.producto))]
  }
  console.log(productUnique(ventas3))

  // ["Manzana", "Plátano", "Fresa"]