// Pilares
// Hay pilares cerca de la carretera. La distancia entre los pilares es la misma y el ancho de los pilares es el mismo. Su función acepta tres argumentos:

// número de pilares (≥ 1);
// distancia entre pilares (10 - 30 metros);
// ancho del pilar (10 - 50 centímetros).
// Calcula la distancia entre el primer y el último pilar en centímetros (sin el ancho del primer y último pilar).

const pillars = (numPill, dist, width) => {

    const converDisToCm = dist * 100

    if(numPill === 2){
        return converDisToCm
    } else if (numPill > 2){
        return (numPill-1) * converDisToCm + ((numPill-2) * width)
    } else{
        return 0
    }
    // return numpill > 1 ? (numpill-1) * dist*100 + (numpill-2) * width : 0;
  }

  console.log(pillars(1, 10, 10));

console.log(pillars(2, 20, 25));

console.log(pillars(11, 15, 30));