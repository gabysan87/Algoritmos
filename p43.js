
// ¡Bienvenido!

// La licenciatura de su nueva empresa le ha dicho a marketing que su sitio web tiene una gran audiencia en Escandinavia y los países vecinos. Marketing cree que sería estupendo dar la bienvenida a los visitantes del sitio en su propio idioma. Afortunadamente, ya utilizas una API que detecta la ubicación del usuario, por lo que es fácil de lograr.

// La tarea
// Piense en una forma de almacenar los idiomas como una base de datos. ¡Los idiomas se enumeran a continuación para que pueda copiar y pegar!
// Escriba una función de 'bienvenida' que tome un parámetro 'idioma', con un tipo String, y devuelva un saludo, si lo tiene en su base de datos. El valor predeterminado debería ser inglés si el idioma no está en la base de datos o en caso de una entrada no válida.
// La base de datos

let database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    }
    
    const greet = (language) => {
    return database[language] || "Welcome";
    }  

console.log(greet('english')) 
console.log(greet('dutch')) 
console.log(greet('IP_ADDRESS_INVALID'))