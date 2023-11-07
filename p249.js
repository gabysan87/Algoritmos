// El doble de viejo
// Su función toma dos argumentos:

// edad actual del padre (años)
// edad actual de su hijo (años)
// Calcula cuántos años hace el padre tenía el doble de la edad de su hijo (o en cuántos años tendrá el doble). La respuesta siempre es mayor o igual a 0, sin importar si fue en el pasado o es en el futuro.

const twiceAsOld = (dadYearsOld, sonYearsOld) => {
  if (dadYearsOld < 2 * sonYearsOld) {
    return 2 * sonYearsOld - dadYearsOld;
  } else {
    return dadYearsOld - 2 * sonYearsOld;
  }
  // return Math.abs(dadYearsOld - 2 * sonYearsOld);
};

console.log(twiceAsOld(22, 1));
