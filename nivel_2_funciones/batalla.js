//DECLARAMOS LAS VARIABLES PARA ALMACENAR LA ENERGÍA DEL JORDY Y ALESSANDRO
let energiajordy = 100;
let energiaalessandro = 100;

//FUNCIÓN ATAQUE DE JORDY HACIA ALESSANDRO
function ataqueJordy() {
    energiaAlessandro -= 20;
    console.log("Jordy ataca. Energía de Alessandro: " + energiaAlessandro);
}

