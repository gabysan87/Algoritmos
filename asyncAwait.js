//Async Await

//async: 
//se usa para declarar una función asíncrona, esto significa que que espera el resultado de esa funcion.
// Ademas hace que una función devuelva una Promesa


//Promesa: es un objeto que sirve para reservar el resultado de una operacion futura.


// await hace que una función espere una Promesa
//pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.

// Hornear una Pizza
// Supongamos que estás en casa y quieres hornear una pizza. Hacer una pizza lleva tiempo, pero mientras esperas que se hornee, no tienes que quedarte parado sin hacer nada. Puedes hacer otras cosas mientras esperas, y eso es básicamente lo que hace async y await en JavaScript.

// Paso 1: Preparar la pizza (función)
// Primero, le dices a tu familia: "Voy a preparar una pizza". Sabes que esto tomará tiempo porque tiene que hornearse, así que lo programas de una manera en que puedas hacer otras cosas mientras tanto. Esto es como decirle a JavaScript: "Haz esto de manera async, porque va a tomar un tiempo".

// Paso 2: Meter la pizza en el horno (promesa)
// Pones la pizza en el horno y le dices a tu familia: "Voy a esperar hasta que esté lista, pero mientras tanto, puedo hacer otras cosas". Entonces, puedes ver la tele o hacer tu tarea, pero tienes en mente que estás esperando la pizza.

// Paso 3: Revisar si la pizza ya está lista (await)
// Cada cierto tiempo, vas a revisar el horno para ver si la pizza ya está. Este es el papel de await: pausas para ver si la tarea se ha completado, pero mientras tanto puedes seguir con otras cosas.

// Paso 4: Pizza lista (resultado)
// Finalmente, la pizza está lista, así que puedes comerla. El await te ayudó a hacer otras cosas mientras el horno hacía su trabajo, y ahora tienes el resultado (¡la pizza está lista!) sin haber perdido el tiempo solo esperando.


const hacerPizza = async () => {
    console.log("Empezamos a hacer la pizza...");
 
    // Simulamos el tiempo que tarda en hornearse
    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log("¡La pizza está lista para comer!");
}

hacerPizza();

// Aquí, await está esperando que la pizza se hornee, pero no se detiene el programa entero. Mientras la pizza se hornea, JavaScript puede hacer otras cosas si es necesario, y cuando la pizza está lista, se imprime el mensaje: "¡La pizza está lista para comer!"

// Async: Le decimos a JavaScript que esta función va a hacer algo que tomará tiempo (como hornear la pizza).
// Await: Esto es como decir "espera hasta que esté lista" sin detener todo lo demás.