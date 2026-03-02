//DECLARAMOS LAS VARIABLES PARA ALMACENAR LA ENERGÍA DEL JORDY Y ALESSANDRO
let energiajordy = 100;
let energiaalessandro = 100;

//FUNCIÓN ATAQUE DE JORDY HACIA ALESSANDRO
function ataqueJordy() {
    energiaAlessandro -= 20;
    console.log("Jordy ataca. Energía de Alessandro: " + energiaAlessandro);
}

function defenderJordy() {
    console.log("Jordy se pone en guardia para reducir el próximo impacto.");
}

function recargarEnergiaJordy() {
    energiaJordy += 15;
    console.log("Jordy descansa un momento. Energía actual: " + energiaJordy);
}.

function superAtaque() {
    energiaAlessandro -= 50;
    console.log("¡ATAQUE ESPECIAL de Jordy! El impacto es crítico. Energía Alessandro: " + energiaAlessandro);
}
//PARTE DE ALESSANDRO
function ataqueAlessandro() {
    energiaJordy -= 20;
    console.log("Alessandro contraataca. Energía de Jordy: " + energiaJordy);
}

function defenderAlessandro() {
    console.log("Alessandro levanta su escudo para protegerse.");
}

function recargarEnergiaAlessandro() {
    energiaAlessandro += 15;
    console.log("Alessandro recupera fuerzas. Energía actual: " + energiaAlessandro);
}

function escudoMagico() {
    console.log("¡Alessandro activa el Escudo Mágico! Un aura brilla a su alrededor.");
}


// SIMULACIÓN DE LA BATALLA
console.log("--- ¡COMIENZA EL DUELO EN TRUJILLO! ---");

ataqueJordy();
defenderAlessandro();
ataqueAlessandro();
escudoMagico(); // Aquí solo se muestra el mensaje de activación
superAtaque();  // El daño entra normal porque aún no usamos "if"
recargarEnergiaJordy();

console.log("--- EL COMBATE CONTINÚA... ---");
