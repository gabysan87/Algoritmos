const formatearTelefono = (texto) => {
    // Definir la expresión regular para números de teléfono
    const patronTelefono = /\b(\d{3})[-.]?(\d{3})[-.]?(\d{4})\b/g

    // Reemplazar los números de teléfono encontrados
    const textoFormateado = texto.replace(patronTelefono, (coincidencia, codigo, central, final) => {
        // RETORNAR "(" + codigo + ") " + central + "-" + final
        return " (" + codigo + ") " + central + "-" + final
    })
return textoFormateado
}

//     RETORNAR textoFormateado
// FIN FUNCIÓN

console.log(formatearTelefono("Llámame al 1234567890 o al 123-456-7890"));
console.log(formatearTelefono("Mis números son 123.456.7890 y 9876543210"));
console.log(formatearTelefono("Este texto no tiene números de teléfono válidos"));
