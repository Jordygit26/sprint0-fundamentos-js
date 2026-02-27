// FASE 2 — BATALLA INTEGRADA
// Reglas: Solo Variables, Funciones y Console.log


//Declaramos  las variables que almacenarán la enrgia del heroe y el enemigo 
let energiaHeroe = 100;
let energiaEnemigo = 100;

function ataque() {
    energiaEnemigo -= 20;
    console.log("¡Ataque básico! Energía del enemigo: " + energiaEnemigo);
}

function defender() {
    console.log("El héroe se pone en guardia: " + energiaEnemigo);
}
