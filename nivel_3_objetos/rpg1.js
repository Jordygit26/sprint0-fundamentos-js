// OBJETO JUGADOR
let jugador = {
    nombre: "Jordy Guerrero",
    vida: 100,
    fuerza: 20,
    nivel: 1
};

// FUNCIONES QUE MODIFICAN EL OBJETO
function subirNivel(personaje) {
    personaje.nivel += 1;
    personaje.fuerza += 10;
    console.log("¡NIVEL UP! " + personaje.nombre + " ahora es nivel " + personaje.nivel);
}

function recibirDano(personaje) {
    personaje.vida -= 15;
    console.log(personaje.nombre + " recibió daño. Vida: " + personaje.vida);
}


