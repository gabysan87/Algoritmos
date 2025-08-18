//simular uan modeda que tarde 1 segundo en caer

const tossACoin = () => {
  return new Promise((resolve, reject) => {
    console.log("Lanzando moneda");
    setTimeout(() => {
      const isFace = Math.random() > 0.5;
      if (isFace) {
        resolve("Es cara");
      } else {
        reject("Es sello");
      }
    }, 1500);
  });
};

const playCurrency = async () => {
  try {
    const result = await tossACoin();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
playCurrency();

// carrera de caballo, simula un caballo corriendo, y decide si gana o pierde segun nro. aleatorio

const horseRace = () => {
  return new Promise((resolve, reject) => {
    console.log("Caballo corriendo");

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      if (randomNumber > 3) {
        resolve(`El caballo gano velocidad ${randomNumber}`);
      } else {
        reject(`El caballo perdio velocidad ${randomNumber}`);
      }
    }, 2000);
  });
};

const runningHorse = async () => {
  try {
    const date = await horseRace();
    console.log(date);
  } catch (error) {
    console.log(error);
  }
};

runningHorse();

//la tortuga, simula la velocidad

const turtlerace = () => {
  return new Promise((resolve, reject) => {
    console.log("La Tortuga comenzo la carrera");

    //genero un tiempo aleatorio entre 1000 y 5999
    const turtleSpeed = Math.floor(Math.random() * 5) + 1;

    // simula que tarda en llegar
    setTimeout(() => {
      if (turtleSpeed <= 4000) {
        resolve(`Ganaste en tiempo ${turtleSpeed} s`);
      } else {
        reject(`Perdiste en tiempo ${turtleSpeed} s`);
      }
    }, turtleSpeed * 1000);
  });
};

const runTurtleRace = async () => {
  try {
    const turtleRaceResult = await turtlerace();
    console.log(turtleRaceResult);
  } catch (err) {
    console.log(err);
  }
};
runTurtleRace();
