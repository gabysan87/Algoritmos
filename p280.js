// Vacaciones III - Incendio en el barco
// ¡Disfrutando de tus vacaciones, te embarcas en un viaje de buceo!

// ¡¡Desastre!! ¡¡El barco se ha incendiado!!

// Se le proporcionará una cadena que enumera muchos elementos relacionados con el barco. Si alguno de estos elementos es "Fuego", debes entrar en acción. Cambie cualquier instancia de "Fire" a "~~". Luego devuelve la cadena.

// ¡Ir al trabajo!

const fireFight= (s) => {
   return s.replace(/Fire/g, `~~`)
//    return s.split(' ').map((item) => item === 'Fire' ? item = '~~' : item).join(' ');
}

console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"))
console.log(fireFight("Mast Deck Engine Water Fire"));
console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain")) 