// 1. CREAMOS LA "MOCHILA" (El Objeto)
let cliente = {
    nombre: "Jordy",
    dinero: 100, // Tienes 100 soles
    hambre: 80   // Tienes mucha hambre (80 puntos de hambre)
};

// 2. CREAMOS LAS FUNCIONES QUE MODIFICAN LA MOCHILA
function ordenarComida(persona) {
    persona.hambre -= 50; // Al comer, el hambre baja 50 puntos
    console.log(persona.nombre + " pidió un buen ceviche. Su hambre bajó a: " + persona.hambre);
}

function pagar(persona) {
    persona.dinero -= 35; // El plato costó 35 soles
    console.log(persona.nombre + " pagó la cuenta. Le quedan: " + persona.dinero + " soles.");
}

