//DECLARAMOS LAS VARIABLES PARA ALMACENAR LA ENERGÍA DEL JORDY Y ALESSANDRO
let energiajordy = 100;
let energiaalessandro = 100;

//FUNCIÓN ATAQUE DE JORDY HACIA ALESSANDRO
function ataqueJordy() {
    energiaAlessandro -= 20;
    console.log("Jordy ataca. Energía de Alessandro: " + energiaAlessandro);
}

function ataquealessandro(){
    energiajordy -= 20;
console.log("QEl ataque ha sido exitoso!, el enemigo tiene" + energiajordy + "de energia restante");


};
function defenderalessandro(){
    console.log("el ataque enemigo a sido bloqueado");
};
function recargarEnergiaalessandro(){
energiaalessandro += 50;
console.log("!te has curado!, ahora tu energia es de " + energiaalessandro);


};
