

const hacerPizza = async () => {
    console.log("Empezamos a hacer la pizza...");
 
    // Simulamos el tiempo que tarda en hornearse
    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log("¡La pizza está lista para comer!");
}

hacerPizza();
