const censurarTarjetas = (texto) =>{

    // Definir la expresión regular para números de tarjeta de crédito
    const patronTarjeta = /\b(?:\d{4}[-\s]?){3}(\d{4})\b/g

    // Reemplazar los números de tarjeta encontrados
   const  textoActualizado = texto.replace(patronTarjeta, (coincidencia, últimosCuatro) => {
        // RETORNAR "--**-" + últimosCuatro
        return "--**--**--**-" + últimosCuatro;
    })
    return textoActualizado
}



console.log(censurarTarjetas("Mi tarjeta es 1234-5678-9012-3456 y la tuya es 9876 5432 1098 7654"));
console.log(censurarTarjetas("No hay números de tarjeta aquí"));
console.log(censurarTarjetas("Números incompletos: 1234-5678-9012 o 1234 5678"));

// Detalle por partes:
// / y /g:

// Los símbolos / delimitan el inicio y el final de la expresión regular.
// El modificador g indica que la búsqueda será global, es decir, encontrará todas las coincidencias en el texto, no solo la primera.
// \b:

// \b marca un límite de palabra (word boundary), que significa que la expresión busca números de tarjeta que estén aislados (es decir, no formarán parte de palabras más grandes).
// Este límite asegura que los números de tarjeta estén separados del resto del texto por un espacio, guion, o el inicio/final del string.
// (?: ...):

// (?: ...) es un grupo no capturante, lo que significa que agrupa una parte de la expresión regular pero no captura esta parte para usarla en los resultados.
// Aquí se usa para agrupar las secuencias de cuatro dígitos, pero solo nos interesa capturar el último bloque de cuatro dígitos, por lo que los primeros tres bloques están agrupados sin necesidad de ser capturados.
// \d{4}:

// \d representa un dígito numérico (cualquier número del 0 al 9).
// \d{4} significa "cuatro dígitos consecutivos".
// [-\s]?:

// El [-\s]? es un grupo opcional que permite un guion (-) o un espacio (\s) entre cada bloque de cuatro dígitos.
// \s representa un espacio en blanco (que puede ser un espacio regular o cualquier otro tipo de espacio, como tabulaciones).
// El signo ? significa que este carácter (guion o espacio) es opcional, por lo que puede o no estar presente.
// {3}:

// El {3} indica que el patrón previo (cuatro dígitos con guion o espacio opcional) debe repetirse exactamente tres veces.
// Esto cubre los primeros tres bloques de cuatro dígitos en un número de tarjeta.
// (\d{4}):

// Los paréntesis () crean un grupo capturante.
// Aquí, se captura el último bloque de cuatro dígitos (los últimos cuatro dígitos de la tarjeta de crédito).
// Esta parte se captura para poder ser usada en el reemplazo, como los "últimos cuatro" de la tarjeta.
// \b (otra vez):

// Este segundo \b indica el límite final de palabra, asegurando que la secuencia termina después del último bloque de cuatro dígitos.