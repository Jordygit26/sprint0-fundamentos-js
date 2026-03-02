// OBJETO CLIENTE
let cliente = {
    nombre: "Jordy",
    dinero: 100, 
    hambre: 80   
};

// 2. FUNCIONES OBLIGATORIAS
function ordenarComida(cliente) {
    cliente.hambre -= 30; // Baja el nivel de hambre
    console.log(cliente.nombre + " ordenó comida. Hambre actual: " + cliente.hambre);
}
