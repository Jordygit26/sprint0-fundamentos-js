// Fase 1: Simulador de Superhéroe
const nombreHeroe = "Jordy"; 
let poder = "Teletransportación de corto alcance"; 
let nivelEnergia = 100; 
let ciudad = "Trujillo"; 
let enemigo = "Sombra Voraz"; 

// Simulación de la historia inicial
console.log(nombreHeroe + " vigila desde los techos de " + ciudad + ".");
console.log("Gracias a su " + poder + ", puede moverse sin ser visto.");
console.log("¡Atención! " + enemigo + " ha sido avistado en el centro.");
console.log("Estado de energía: " + nivelEnergia + "%.");

nivelEnergia = 1;

console.log(nombreHeroe +  "ha recibido un daño critico de parte de" + enemigo );
console.log("ahora su nivel de energia es de "+ nivelEnergia);
