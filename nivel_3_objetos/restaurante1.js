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

function pagar(cliente) {
    cliente.dinero -= 40; // Resta dinero de la billetera
    console.log(cliente.nombre + " pagó la cuenta. Saldo restante: " + cliente.dinero);
}
